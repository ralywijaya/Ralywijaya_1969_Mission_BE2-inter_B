1. npm install
2. buat file .env
3. isi konfigurasi database
4. npm run dev

buat data query

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
