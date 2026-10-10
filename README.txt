WEBSITE ULANG TAHUN — ZURAIDA SAFITRI

ISI FOLDER
- app.py: program Flask
- templates/index.html: tampilan website
- static/style.css: desain
- static/script.js: tombol pesan, animasi, dan musik
- static/audio/cinta_luar_biasa.mp3: musik latar

CARA MENJALANKAN DI THONNY (Windows)
1. Ekstrak seluruh ZIP terlebih dahulu. Jangan jalankan app.py dari dalam ZIP.
2. Buka folder birthday_zuraida_fix_final hasil ekstrak.
3. Buka app.py dengan Thonny.
4. Jika Flask belum terpasang, buka Tools > Manage packages, cari Flask, lalu instal.
   Alternatif di Shell Thonny: %Run -c "import sys; print(sys.executable)" lalu instal Flask melalui Tools > Manage packages.
5. Tekan Ctrl+S lalu F5.
6. Buka http://127.0.0.1:5001 di Edge/Chrome.
7. Untuk memeriksa file audio, buka http://127.0.0.1:5001/cek-audio. Harus tampil audio_ditemukan: true.

MUSIK OTOMATIS
Website mencoba memutar musik otomatis dan mengulanginya (loop). Browser kadang memblokir autoplay dengan suara. Jika musik belum berbunyi, klik sekali pada halaman atau tombol “Buka pesan ini”; tidak ada tombol musik terpisah. Pastikan tab browser tidak mute dan volume komputer aktif.

CATATAN FILE AUDIO
File audio yang dikirim sebelumnya bernama cinta_luar_biasa.mp3.crdownload, yang biasanya menandakan unduhan browser belum selesai. File tersebut bisa terbaca sebagai MP3, tetapi pastikan unduhan lagu sudah selesai. Di folder proyek ini file disimpan dengan nama cinta_luar_biasa.mp3 agar sesuai dengan alamat website. Jika lagu terputus/tidak lengkap, unduh ulang sampai selesai dan ganti file tersebut.

Website lokal hanya dapat dibuka di komputer yang menjalankan program.
