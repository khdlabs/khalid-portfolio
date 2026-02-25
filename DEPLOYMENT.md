# Panduan Publikasi Website Portfolio Anda

Saat ini website Anda berjalan di komputer lokal (`localhost`). Agar teman-teman, rekruter, atau klien bisa melihatnya, Anda perlu melakukan proses **Deployment** (publikasi ke internet).

Kami merekomendasikan **Vercel** sebagai platform hosting terbaik untuk Next.js (gratis, cepat, dan profesional).

Berikut 2 cara untuk melakukannya:

---

## Cara 1: Menggunakan Vercel CLI (Paling Mudah Tanpa Git)

Jika Anda belum menginstall Git, ini cara tercepat.

1.  **Install Vercel CLI**
    Buka terminal di folder proyek (`portfolio`) dan jalankan:
    ```bash
    npm install -g vercel
    ```

2.  **Login ke Vercel**
    Jalankan perintah ini:
    ```bash
    vercel login
    ```
    - Pilih login dengan email/GitHub/GitLab/Bitbucket.
    - Browser akan terbuka, silakan konfirmasi login.

3.  **Deploy Website**
    Setelah login sukses, jalankan perintah:
    ```bash
    vercel
    ```
    - Jawab pertanyaan di terminal (tekan Enter terus untuk default):
      - `Set up and deploy?` -> **y** y
      - `Which scope?` -> (Pilih akun Anda)
      - `Link to existing project?` -> **n**
      - `Project name?` -> (Tekan Enter atau beri nama unik, misal: `portfolio-budi`)
      - `In which directory?` -> **./**
      - `Want to modify these settings?` -> **n**

4.  **Selesai!**
    Terminal akan menampilkan tautan **Production**.
    Contoh: `https://portfolio-budi.vercel.app`
    Kirim link ini ke teman-teman Anda!

---

## Cara 2: Melalui GitHub (Paling Profesional & Direkomendasikan)

Cara ini lebih baik untuk jangka panjang, karena setiap kali Anda menyimpan perubahan (save) di komputer dan mengirimnya ke GitHub, website Anda akan **otomatis terupdate**.

### Langkah 1: Siapkan Git
Jika perintah `git` belum dikenali di terminal Anda, download dan install Git dari: [git-scm.com](https://git-scm.com/downloads).

### Langkah 2: Buat Repository di GitHub
1.  Buka [GitHub.com](https://github.com) dan buat akun.
2.  Buat repository baru (klik tombol **New**).
3.  Beri nama (misal: `portfolio`), biarkan Public/Private, jangan centang "Add README".
4.  Klik **Create repository**.

### Langkah 3: Upload Kode
Di terminal folder proyek Anda (`portfolio`), jalankan perintah berikut (ganti URL dengan URL repo Anda):

```bash
git init
git add .
git commit -m "Upload pertama website portfolio"
git branch -M main
git remote add origin https://github.com/USERNAME_ANDA/REPO_ANDA.git
git push -u origin main
```

### Langkah 4: Hubungkan ke Vercel
1.  Buka [Vercel.com](https://vercel.com) dan login dengan akun GitHub Anda.
2.  Klik **Add New...** > **Project**.
3.  Di daftar "Import Git Repository", cari repo `portfolio` Anda dan klik **Import**.
4.  Klik **Deploy**.
5.  Tunggu sebentar, dan website Anda online!

---

## 3. Menambahkan Domain Sendiri (Opsional)
Agar lebih profesional lagi, Anda bisa menggunakan domain seperti `namaanda.com` alih-alih `vercel.app`.

1.  Beli domain di penyedia (seperti Niagahoster, Namecheap, Google Domains, dll).
2.  Di dashboard Vercel proyek Anda, pergi ke **Settings** > **Domains**.
3.  Masukkan nama domain Anda dan ikuti instruksi DNS yang diberikan Vercel.

---

## Catatan Penting
- **Formulir Kontak**: Karena Anda menggunakan API Route Next.js (`/api/contact`), fitur kontak akan berfungsi normal di Vercel tanpa konfigurasi tambahan!
- **Update Konten**: Jika pakai Cara 1, jalankan `vercel --prod` setiap kali ada perubahan untuk update website. Jika pakai Cara 2, cukup `git push`.
