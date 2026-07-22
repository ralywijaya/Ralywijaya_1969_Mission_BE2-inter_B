1. npm install
2. buat file .env
3. isi konfigurasi database
4. npm run dev

buat data query

untuk users

create database appchill;
CREATE TABLE users (
    id_user INT AUTO_INCREMENT PRIMARY KEY,
    user_nama VARCHAR(150) NOT NULL,
    user_password VARCHAR(255) NOT NULL,
 
);

INSERT INTO users (user_nama, user_password, id_paket) VALUES
('Raly', '123456', NULL),
('Andi', 'andi123', NULL),
('Budi', 'budi123', NULL),
('Citra', 'citra123', NULL),
('Dewi', 'dewi123', NULL),
('Eko', 'eko123', NULL),
('Fajar', 'fajar123', NULL),
('Gina', 'gina123', NULL),
('Hana', 'hana123', NULL),
('Ivan', 'ivan123', NULL);

untuk movie

CREATE TABLE movie (
    id_movie INT AUTO_INCREMENT PRIMARY KEY,
    nama_movie VARCHAR(150) NOT NULL,
    kategori_umur VARCHAR(10) NOT NULL,
    deskripsi_movie TEXT NOT NULL
   
);

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


