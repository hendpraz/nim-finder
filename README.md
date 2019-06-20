<h1 align="center">
  <br>
  ITB NIM Finder - Hendpraz
  <br>
</h1>

<h2 align="center">
  <br>
  Muhammad Hendry Prasetya
  <br>
  13517105
  <br>
  <br>
</h2>

Deployed to [https://hendpraz.github.io/nim-finder/#/](https://hendpraz.github.io/nim-finder/#/)

## Cara Memasang dan Menjalankan Aplikasi

### Requirement

An adeque version of:
- NodeJS with NPX and NPM
- ReactJS
- Browser (Recommended: Chrome)

### Cara Memasang dan Menjalankan Aplikasi

Langkah-langkah memasang dan menjalankan aplikasi:
1. cd ke lokasi repository
2. Jika belum ada `create-react-app`, jalankan `npm install create-react-app`
3. Jalankan `npm start` pada cmd
4. Buka [http://localhost:3000](localhost:3000) pada browser

## Cara Menggunakan Aplikasi

1. Lakukan registrasi pada _endpoint_ /register (skip jika telah punya akun)
2. Lakukan _login_ pada _endpoint_ /login
3. Jika _login_ berhasil, akan dialihkan ke _endpoint_ home
4. Lakukan pencarian pada kolom pencarian
5. Jika banyak hasil pencarian >= 10, dapat mengakses page berikutnya

Register :<br>
![pic1](pic/register.jpg?raw=true "Title")

Login : <br>
![pic2](pic/login.jpg?raw=true "Title")

Search results (_blurred_): <br>
![pic3](pic/1.jpg?raw=true "Title")

## Desain Aplikasi

### Konsep OOP

- Aplikasi terdiri atas kelas turunan dari _Component_ ReactJS
- Setiap kelas memiliki tugasnya masing-masing. _Single Responsibility Principle_
    - Kelas Welcome hanya menangani tampilan selamat datang 
    - Kelas Login hanya menangani proses login
    - Kelas Register hanya menangani proses register
    - Kelas Home hanya menangani proses pencarian query. Kelas home memiliki child kelas Table
    - Kelas Table untuk menampilkan Table hasil pencarian query
    - Kelas NotFound hanya untuk menangani endpoint yang tidak dikenali

### Cara Kerja

Routes:
```
- Memasang route untuk endpoint kelas-kelas pada aplikasi
- Endpoint: `/`, `/login`, `/register`, `/home`
```

Register:
```
1. Dilakukan pada objek kelas Register dengan endpoint /register
2. Melakukan request pada API dengan method 'POST' dan body berdasarkan username dan password baru
3. Jika berhasil, beri pesan sukses. Jika gagal, beri pesan kegagalan beserta keterangan.

Jika diakses dalam keadaan sudah login, akan dialihkan ke /home
```

Login:
```
1. Dilakukan pada objek kelas Register dengan endpoint /register
2. Melakukan request pada API dengan method 'POST' dan body berdasarkan username dan password baru
3. Jika berhasil, alihkan ke /home. Kemudian, simpan token yang diterima ke dalam sessionStorage. Jika gagal, beri pesan kegagalan beserta keterangan.

Jika diakses dalam keadaan sudah login, akan dialihkan ke /home
```

Home:
```
1. Dilakukan pada objek kelas Register dengan endpoint /home
2. Melakukan request pada API dengan method 'GET' dan headers berupa token yang tersimpan pada sessionStorage
3. Jika berhasil, tampilkan tabel hasil olahan dari objek payload yang diterima
4. Jika data >= 10, dapat menuju page berikutnya

- Skema next page digunakan dengan menyimpan currentURL dan currentPage. Jika tombol next ditekan, nilai currentPage akan bertambah 1.
- Tombol next akan hilang sendirinya jika tidak ada query atau jika page telah habis
```

### Design-Pattern

Pattern yang digunakan pada aplikasi ini adalah _Higher Order Components_. Pattern tersebut digunakan pada kelas Home. Table merupakan anak komponen dari objek Home itu sendiri dan akan berubah-ubah sesuai query dari pengguna.

![pic4](pic/table.jpg?raw=true "Title")

Sedangkan kelas lain tidak memerlukan anak komponen karena tugas yang ditangani hanya sedikit.

## Tools/Library

### Tools
```
Node.js
ReactJS
```

### Library

Library yang digunakan:
```
`react-router-dom` : Memanfaatkan Redirect, HashRouter, Route dan Switch
```

## Review API

API yang disediakan sudah sangat baik. Fungsionalitas API sudah baik sehingga saya dapat melakukan request dengan lancar. Code-code yang diberikan melalui response tidak terlalu beragam. Autentikasi dapat dengan mudah dilakukan. Namun, skema paginasi kadang membingungkan sehingga saya mendapat beberapa bug. Khususnya dalam penomoran page.