// Data karyawan
const karyawanData = [
    { nama: "Budi Santoso", jabatan: "Manager", divisi: "Keuangan" },
    { nama: "Ani Rahmawati", jabatan: "Staff", divisi: "HRD" },
    { nama: "Dedi Pratama", jabatan: "Supervisor", divisi: "Produksi" },
    { nama: "Siti Aisyah", jabatan: "Staff", divisi: "Marketing" },
    { nama: "Rahmat Hidayat", jabatan: "Manager", divisi: "IT" },
    { nama: "Tina Kusuma", jabatan: "Staff", divisi: "Logistik" },
    { nama: "Rizky Fahmi", jabatan: "Supervisor", divisi: "Keuangan" },
    { nama: "Mira Andayani", jabatan: "Staff", divisi: "Produksi" },
    { nama: "Farhan Putra", jabatan: "Manager", divisi: "Marketing" },
    { nama: "Dina Lestari", jabatan: "Staff", divisi: "HRD" }
];

// Data jabatan
const jabatanData = [
    { namaJabatan: "Manager", level: "Senior", deskripsi: "Memimpin dan mengawasi divisi" },
    { namaJabatan: "Supervisor", level: "Middle", deskripsi: "Mengawasi kegiatan harian tim" },
    { namaJabatan: "Staff", level: "Junior", deskripsi: "Melaksanakan tugas operasional" },
    { namaJabatan: "Senior Staff", level: "Middle", deskripsi: "Bertanggung jawab pada area spesifik" },
    { namaJabatan: "Assistant Manager", level: "Senior", deskripsi: "Mendampingi manager dalam operasional" },
    { namaJabatan: "HR Specialist", level: "Middle", deskripsi: "Mengelola sumber daya manusia" },
    { namaJabatan: "Finance Officer", level: "Junior", deskripsi: "Mengurus keuangan perusahaan" },
    { namaJabatan: "IT Support", level: "Junior", deskripsi: "Mendukung kebutuhan teknis IT" },
    { namaJabatan: "Marketing Executive", level: "Middle", deskripsi: "Mengelola strategi pemasaran" },
    { namaJabatan: "Logistics Coordinator", level: "Middle", deskripsi: "Mengelola pengiriman dan logistik" }
];

// Data divisi
const divisiData = [
    { namaDivisi: "Keuangan", deskripsi: "Mengelola dana dan laporan keuangan." },
    { namaDivisi: "Sumber Daya Manusia", deskripsi: "Mengelola karyawan, perekrutan, dan pelatihan." },
    { namaDivisi: "Produksi", deskripsi: "Mengawasi proses produksi barang dan jasa." },
    { namaDivisi: "Pemasaran", deskripsi: "Mengelola strategi dan aktivitas pemasaran produk." },
    { namaDivisi: "Teknologi Informasi", deskripsi: "Bertanggung jawab atas infrastruktur IT dan dukungan teknis." },
    { namaDivisi: "Logistik", deskripsi: "Mengelola pengiriman dan penyimpanan barang." },
    { namaDivisi: "Penjualan", deskripsi: "Meningkatkan penjualan produk dan hubungan dengan klien." },
    { namaDivisi: "Riset dan Pengembangan", deskripsi: "Mengembangkan produk baru dan inovasi." },
    { namaDivisi: "Customer Service", deskripsi: "Menangani keluhan dan pertanyaan pelanggan." },
    { namaDivisi: "Kualitas", deskripsi: "Memastikan standar kualitas produk dan layanan." }
];

// Fungsi untuk menampilkan data karyawan di tabel
function displayKaryawanData() {
    const tableBody = document.getElementById("karyawanTableBody");
    tableBody.innerHTML = ""; // Kosongkan isi tabel agar tidak ada duplikat saat memanggil fungsi lagi
    karyawanData.forEach((karyawan, index) => {
        const row = document.createElement("tr");
        row.innerHTML = `
            <td>${index + 1}</td>
            <td>${karyawan.nama}</td>
            <td>${karyawan.jabatan}</td>
            <td>${karyawan.divisi}</td>
            <!-- Contoh untuk tombol edit dan hapus di tabel karyawan -->
<td>
    <button class="karyawan-btn karyawan-btn-warning" title="Edit Data">
        <i class="fas fa-edit"></i>
    </button>
    <button class="karyawan-btn karyawan-btn-danger" title="Hapus Data">
        <i class="fas fa-trash"></i>
    </button>
</td>

        `;
        tableBody.appendChild(row);
    });
}
// Fungsi untuk menambahkan karyawan baru
function tambahKaryawan(event) {
    event.preventDefault(); // Mencegah pengiriman formulir secara default
    const nama = document.getElementById("namaKaryawan").value;
    const jabatan = document.getElementById("jabatanKaryawan").value;
    const divisi = document.getElementById("divisiKaryawan").value;

    const karyawanBaru = { nama, jabatan, divisi };
    karyawanData.push(karyawanBaru); // Tambahkan karyawan baru ke array
    displayKaryawanData(); // Tampilkan data karyawan yang terbaru

    // Reset form setelah penambahan
    document.getElementById("tambahKaryawanForm").reset();
}

// Memanggil fungsi displayKaryawanData dan menambahkan event listener untuk form
document.addEventListener("DOMContentLoaded", () => {
    displayKaryawanData();
    document.getElementById("tambahKaryawanForm").addEventListener("submit", tambahKaryawan);
});
//Tulisan ketika icon disentuh
// Inisialisasi tooltip saat halaman dimuat
$(document).ready(function(){
    $('[data-toggle="tooltip"]').tooltip();
});




// Fungsi untuk menampilkan data jabatan di tabel
function displayJabatanData() {
    const tableBody = document.getElementById("jabatanTableBody");
    jabatanData.forEach((jabatan, index) => {
        const row = document.createElement("tr");
        row.innerHTML = `
            <td>${index + 1}</td>
            <td>${jabatan.namaJabatan}</td>
            <td>${jabatan.level}</td>
            <td>${jabatan.deskripsi}</td>
            <td>
                <button class="icon-button" onclick="editJabatan(${index})">
                    <i class="fas fa-edit"></i>
                    <span class="tooltip-text">Edit Data</span>
                </button>
                <button class="icon-button" onclick="deleteJabatan(${index})">
                    <i class="fas fa-trash-alt"></i>
                    <span class="tooltip-text">Hapus Data</span>
                </button>
            </td>
        `;
        tableBody.appendChild(row);
    });
}


// Fungsi untuk menampilkan data divisi di tabel
function displayDivisiData() {
    const tableBody = document.getElementById("divisiTableBody");
    divisiData.forEach((divisi, index) => {
        const row = document.createElement("tr");
        row.innerHTML = `
            <td>${index + 1}</td>
            <td>${divisi.namaDivisi}</td>
            <td>${divisi.deskripsi}</td>
            <td>
        <button class="icon-button" onclick="editDivisi(${index})">
            <i class="fas fa-edit"></i>
            <span class="tooltip-text">Edit Data</span>
        </button>
        <button class="icon-button" onclick="deleteDivisi(${index})">
            <i class="fas fa-trash-alt"></i>
            <span class="tooltip-text">Hapus Data</span>
        </button>
    </td>
        `;
        tableBody.appendChild(row);
    });
}

// Memanggil fungsi displayKaryawanData dan displayJabatanData saat halaman dimuat
document.addEventListener("DOMContentLoaded", () => {
    if (document.getElementById("karyawanTableBody")) {
        displayKaryawanData();
    }
    if (document.getElementById("jabatanTableBody")) {
        displayJabatanData();
    }
    if (document.getElementById("divisiTableBody")) {
        displayDivisiData();
    }
});

//Bagian ABSENSI
// Data Absensi
const absensiData = [
    { nama: "Budi Santoso", tanggal: "2024-11-01", jamMasuk: "08:00", jamKeluar: "19:00", status: "Hadir" },
    { nama: "Ani Rahmawati", tanggal: "2024-11-01", jamMasuk: "08:15", jamKeluar: "17:00", status: "Hadir" },
    { nama: "Dedi Pratama", tanggal: "2024-11-01", jamMasuk: "08:30", jamKeluar: "20:00", status: "Hadir" },
    { nama: "Siti Aisyah", tanggal: "2024-11-01", jamMasuk: "0", jamKeluar: "0", status: "Izin" },
    { nama: "Rahmat Hidayat", tanggal: "2024-11-01", jamMasuk: "08:10", jamKeluar: "17:00", status: "Hadir" },
    { nama: "Tina Kusuma", tanggal: "2024-11-01", jamMasuk: "08:20", jamKeluar: "17:00", status: "Hadir" },
    { nama: "Rizky Fahmi", tanggal: "2024-11-01", jamMasuk: "08:00", jamKeluar: "21:00", status: "Hadir" },
    { nama: "Mira Andayani", tanggal: "2024-11-01", jamMasuk: "08:00", jamKeluar: "17:00", status: "Hadir" },
    { nama: "Farhan Putra", tanggal: "2024-11-01", jamMasuk: "0", jamKeluar: "0", status: "Izin" },
    { nama: "Dina Lestari", tanggal: "2024-11-01", jamMasuk: "08:00", jamKeluar: "17:00", status: "Hadir" },
];


// Data Izin
const izinData = [
    { nama: "Siti Aisyah", tanggalIzin: "2024-11-01", alasan: "Sakit" },
    { nama: "Farhan Putra", tanggalIzin: "2024-11-01", alasan: "Acara Keluarga" },
];

// Data Lembur
const lemburData = [
    { nama: "Budi Santoso", tanggalLembur: "2024-11-01", jam: 2 },
    { nama: "Dedi Pratama", tanggalLembur: "2024-11-01", jam: 3 },
    { nama: "Rizky Fahmi", tanggalLembur: "2024-11-01", jam: 4 },
];

// TAMPILAN DATA ABSENSI
// Fungsi untuk menampilkan data absensi
function displayAbsensiData() {
    const tableBody = document.getElementById("absensiTableBody");
    tableBody.innerHTML = ''; // Kosongkan isi tabel sebelum menambah data
    absensiData.forEach((absensi, index) => {
        const row = document.createElement("tr");
        row.innerHTML = `
            <td>${index + 1}</td>
            <td>${absensi.nama}</td>
            <td>${absensi.tanggal}</td>
            <td>${absensi.jamMasuk || '0'}</td> <!-- Jam Masuk -->
            <td>${absensi.jamKeluar || '0'}</td> <!-- Jam Keluar -->
            <td>${absensi.status}</td>
            <td>
                <button class="btn btn-success" onclick="updateStatus(${index}, 'Hadir')">
                    <i class="fas fa-check"></i>
                </button>
                <button class="btn btn-warning" onclick="updateStatus(${index}, 'Izin')">
                    <i class="fas fa-clock"></i>
                </button>
                <button class="btn btn-danger" onclick="updateStatus(${index}, 'Alpa')">
                    <i class="fas fa-times"></i>
                </button>
            </td>
        `;
        tableBody.appendChild(row);
    });
}

// Untuk menampilkan fungsi baru
// Fungsi untuk memperbarui status absensi
function updateStatus(index, status) {
    // Memperbarui status pada data absensi
    absensiData[index].status = status;
    
    // Memperbarui jam masuk dan keluar jika hadir
    if (status === 'Hadir') {
        const jamMasuk = prompt("Masukkan jam masuk (HH:MM):");
        const jamKeluar = prompt("Masukkan jam keluar (HH:MM):");
        absensiData[index].jamMasuk = jamMasuk;
        absensiData[index].jamKeluar = jamKeluar;
    } else {
        absensiData[index].jamMasuk = "0"; // Set jam masuk 0 jika tidak hadir
        absensiData[index].jamKeluar = "0"; // Set jam keluar 0 jika tidak hadir
    }

    // Menampilkan kembali data absensi
    displayAbsensiData();
}


// Fungsi untuk menampilkan data izin
function displayIzinData() {
    const tableBody = document.getElementById("izinTableBody");
    izinData.forEach((izin, index) => {
        const row = document.createElement("tr");
        row.innerHTML = `
            <td>${index + 1}</td>
            <td>${izin.nama}</td>
            <td>${izin.tanggalIzin}</td>
            <td>${izin.alasan}</td>
        <td>
        <button class="icon-button" onclick="editDivisi(${index})">
            <i class="fas fa-edit"></i>
            <span class="tooltip-text">Edit Data</span>
        </button>
        <button class="icon-button" onclick="deleteDivisi(${index})">
            <i class="fas fa-trash-alt"></i>
            <span class="tooltip-text">Hapus Data</span>
        </button>
    </td>
        `;
        tableBody.appendChild(row);
    });
}

// Fungsi untuk menampilkan data lembur
function displayLemburData() {
    const tableBody = document.getElementById("lemburTableBody");
    lemburData.forEach((lembur, index) => {
        const row = document.createElement("tr");
        row.innerHTML = `
            <td>${index + 1}</td>
            <td>${lembur.nama}</td>
            <td>${lembur.tanggalLembur}</td>
            <td>${lembur.jam}</td>
            <td>
        <button class="icon-button" onclick="editDivisi(${index})">
            <i class="fas fa-edit"></i>
            <span class="tooltip-text">Edit Data</span>
        </button>
        <button class="icon-button" onclick="deleteDivisi(${index})">
            <i class="fas fa-trash-alt"></i>
            <span class="tooltip-text">Hapus Data</span>
        </button>
    </td>
        `;
        tableBody.appendChild(row);
    });
}

// Memanggil fungsi saat halaman dimuat
document.addEventListener("DOMContentLoaded", () => {
    displayAbsensiData();
});
document.addEventListener("DOMContentLoaded", () => {
    if (document.getElementById("izinTableBody")) {
        displayIzinData();
    }
    if (document.getElementById("lemburTableBody")) {
        displayLemburData();
    }
});

