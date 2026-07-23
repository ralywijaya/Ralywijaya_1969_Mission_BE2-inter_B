# Backend API

## Instalasi

1. Install dependencies

```bash
npm install
```

2. Buat file `.env`

```env
DB_HOST=localhost
DB_PORT=3306
DB_USER=root
DB_PASSWORD=your_password
DB_NAME=appchill

PORT=3000
JWT_SECRET=your_jwt_secret
```

3. Buat database dan jalankan query SQL di bawah ini.

4. Jalankan aplikasi

```bash
npm run dev
```

---

# Database

## Membuat Database

```sql
CREATE DATABASE appchill;
USE appchill;
```

---

## Tabel Users

### Membuat Tabel

```sql
CREATE TABLE users (
    id_user INT AUTO_INCREMENT PRIMARY KEY,
    user_nama VARCHAR(150) NOT NULL,
    user_password VARCHAR(255) NOT NULL
);
```

### Data Dummy

```sql
INSERT INTO users (user_nama, user_password) VALUES
('Raly', '123456'),
('Andi', 'andi123'),
('Budi', 'budi123'),
('Citra', 'citra123'),
('Dewi', 'dewi123'),
('Eko', 'eko123'),
('Fajar', 'fajar123'),
('Gina', 'gina123'),
('Hana', 'hana123'),
('Ivan', 'ivan123');
```

---

## Tabel Movie

### Membuat Tabel

```sql
CREATE TABLE movie (
    id_movie INT AUTO_INCREMENT PRIMARY KEY,
    nama_movie VARCHAR(150) NOT NULL,
    kategori_umur VARCHAR(10) NOT NULL,
    deskripsi_movie TEXT NOT NULL
);
```

### Data Dummy

```sql
INSERT INTO movie (id_movie, nama_movie, kategori_umur, deskripsi_movie) VALUES
(1, 'Avengers: Endgame', '13+', 'Para Avengers berusaha mengembalikan keseimbangan dunia setelah peristiwa Snap.'),
(2, 'Spider-Man: No Way Home', '13+', 'Peter Parker menghadapi ancaman dari multiverse setelah identitasnya terbongkar.'),
(3, 'Frozen II', 'SU', 'Elsa dan Anna melakukan perjalanan untuk mengungkap asal-usul kekuatan Elsa.'),
(4, 'The Batman', '17+', 'Batman menyelidiki serangkaian pembunuhan yang dilakukan oleh Riddler di Gotham City.'),
(5, 'Toy Story 4', 'SU', 'Woody dan teman-temannya memulai petualangan baru bersama Forky.'),
(6, 'Jurassic World Dominion', '13+', 'Manusia dan dinosaurus harus hidup berdampingan di dunia yang sama.'),
(7, 'Interstellar', '13+', 'Sekelompok astronot mencari planet baru untuk menyelamatkan umat manusia.'),
(8, 'The Conjuring', '17+', 'Pasangan paranormal menyelidiki gangguan supranatural di sebuah rumah keluarga.'),
(9, 'Fast X', '13+', 'Dom Toretto menghadapi musuh baru yang ingin membalas dendam kepada keluarganya.'),
(10, 'Coco', 'SU', 'Miguel memasuki Dunia Orang Mati untuk mengejar impiannya menjadi musisi.'),
(11, 'Dune', '13+', 'Paul Atreides memulai perjalanan yang mengubah nasib seluruh galaksi.'),
(12, 'Inside Out', 'SU', 'Emosi di dalam pikiran Riley bekerja sama menghadapi perubahan hidupnya.'),
(13, 'John Wick: Chapter 4', '17+', 'John Wick melawan organisasi High Table demi mendapatkan kebebasannya.'),
(14, 'Moana', 'SU', 'Moana berlayar melintasi lautan untuk menyelamatkan pulau tempat tinggalnya.'),
(15, 'Top Gun: Maverick', '13+', 'Maverick melatih generasi pilot baru dalam misi yang sangat berbahaya.');
```

---

## Menjalankan Project

```bash
npm run dev
```

Jika berhasil, server akan berjalan pada:

```
http://localhost:3000
```