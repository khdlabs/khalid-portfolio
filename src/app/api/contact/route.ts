import { NextResponse } from 'next/server';
import { query } from '@/lib/db';

export async function POST(request: Request) {
    try {
        const body = await request.json();
        const { name, email, message } = body;

        // Simple validation
        if (!name || !email || !message) {
            return NextResponse.json(
                { error: 'Please complete all fields.' },
                { status: 400 }
            );
        }

        // Insert into database
        const sql = `
            INSERT INTO messages (name, email, message)
            VALUES ($1, $2, $3)
            RETURNING id, created_at
        `;

        const result = await query(sql, [name, email, message]);

        console.log('New Contact Saved to DB:', result.rows[0]);

        return NextResponse.json(
            { success: true, message: 'Thank you! Your message has been saved.' },
            { status: 200 }
        );
    } catch (error: any) {
        console.error('Database Error:', error);

        // Detailed error message for development
        const errorMessage = error.code === 'ECONNREFUSED'
            ? 'Database connection failed. Please check if PostgreSQL is running.'
            : 'A system error occurred. Please try again later.';

        return NextResponse.json(
            { error: errorMessage },
            { status: 500 }
        );
    }
}
