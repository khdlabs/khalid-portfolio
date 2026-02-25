import React from 'react';

export interface Project {
    id: string;
    title: string;
    desc: string;
    fullDesc: string;
    tags: string[];
    category: string;
    features: string[];
    challenges: string[];
    role: string;
    year: string;
}

export const projects: Project[] = [
    {
        id: "oee-system",
        title: "Integrated IIoT & SCADA System",
        desc: "A full-stack industrial system integrating Siemens PLC (TIA Portal) and HMI control with a real-time OEE dashboard and database storage.",
        fullDesc: "This OEE (Overall Equipment Effectiveness) Management System is designed as a real-time production efficiency monitoring platform that integrates production floor data into a comprehensive analytical dashboard. The system captures critical machine variables, such as production counts and operational status, and stores them in a PostgreSQL database via a robust Node.js (Express) backend. By categorizing data into production sessions and shifts, management can precisely track operator performance, downtime intervals, and actual production speeds against established benchmarks.\n\nAt its core, the system automates the calculation of the three OEE pillars: Availability, Performance, and Quality. These metrics are visualized through a high-performance Vue 3 frontend featuring interactive charts, state timelines, and dynamic KPI indicators. Developed for PT. DENALI INDONESIA, the platform empowers the organization to identify production bottlenecks, analyze root causes of downtime, and leverage data-driven insights to maximize overall manufacturing productivity.",
        tags: ["Node.js", "Express", "Vue 3", "PostgreSQL", "TIA Portal", "MQTT", "IIoT"],
        category: "Industrial IoT",
        year: "2026",
        role: "Full Stack & Systems Developer",
        features: [
            "PLC Ladder Logic for Production Control",
            "Interactive HMI Interface for Machine Operation",
            "Real-time Data Bridge (PLC to Dashboard)",
            "Automated OEE & Production Analytics",
            "Persistent Database Storage for History"
        ],
        challenges: [
            "Establishing seamless communication between OT (PLC) and IT (Web) layers.",
            "Structuring complex database schemas for high-frequency industrial data.",
            "Designing HMI screens that are both functional and ergonomic."
        ]
    },
    {
        id: "sorting-system",
        title: "Automated Sorting Machine",
        desc: "A mechatronics system using sensors and actuators to sort objects by color and material, controlled by an embedded system.",
        fullDesc: "An advanced mechatronics project involving mechanical design in Inventor, electronics integration, and software control. This machine uses infrared and color sensors to identify objects on a conveyor belt, which are then sorted into bins using pneumatic or servo-driven actuators.",
        tags: ["Arduino/ESP32", "Sensors", "Pneumatics", "Inventor", "C++"],
        category: "Mechatronics",
        year: "2025",
        role: "Mechatronics Engineer",
        features: [
            "PID-controlled Conveyor Speed",
            "Color & Material Recognition System",
            "Pneumatic Actuator Integration",
            "Real-time Monitoring Serial Interface",
            "Modular Mechanical Frame Design"
        ],
        challenges: [
            "Interfacing diverse sensors with tight timing constraints.",
            "Calculating precise physical trajectories for the sorting mechanism.",
            "Optimizing the mechanical design for durability and speed."
        ]
    },
    {
        id: "flowchart-tool",
        title: "Modern Flowchart Tool",
        desc: "Interactive flowchart application with drag-and-drop features and seamless block connections.",
        fullDesc: "A web-based productivity tool that allows creative teams and developers to visualize system architectures or business processes quickly and aesthetically.",
        tags: ["React Flow", "Zustand", "Vite", "Canvas"],
        category: "Productivity",
        year: "2023",
        role: "Frontend Developer & UI Designer",
        features: [
            "Responsive Drag-and-Drop Interface",
            "Auto-save & Version History",
            "Export to various formats (SVG, PNG, PDF)",
            "Real-time Collaboration (Experimental)",
            "Smart Routing for Connection Lines"
        ],
        challenges: [
            "Optimizing canvas rendering for thousands of diagram nodes.",
            "Handling complex auto-routing algorithms between blocks.",
            "Implementing solid undo/redo state management."
        ]
    }
];
