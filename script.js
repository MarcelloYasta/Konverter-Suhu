// Ambil elemen dari DOM
const inputValue = document.getElementById('input-value');
const conversionType = document.getElementById('conversion-type');
const convertBtn = document.getElementById('convert-btn');
const resultDisplay = document.getElementById('result-display');

// Fungsi utama untuk melakukan konversi
function convertTemperature() {
    // 1. Ambil nilai input dan pastikan itu adalah angka
    const value = parseFloat(inputValue.value);
    const type = conversionType.value;
    let result = '';
    
    // 2. Validasi input
    if (isNaN(value)) {
        resultDisplay.innerHTML = '<span style="color: red;">⚠️ Masukkan nilai angka yang valid.</span>';
        return; 
    }

    // 3. Logika Konversi
    if (type === 'CtoF') {
        // Rumus: F = C * 9/5 + 32
        const fahrenheit = (value * 9/5) + 32;
        // Tampilkan hasil dengan 2 angka di belakang koma
        result = `${value}°C sama dengan ${fahrenheit.toFixed(2)}°F`;
    } else if (type === 'FtoC') {
        // Rumus: C = (F - 32) * 5/9
        const celcius = (value - 32) * 5/9;
        result = `${value}°F sama dengan ${celcius.toFixed(2)}°C`;
    } else {
        // Kasus seharusnya tidak terjadi, tapi sebagai penanganan error
        result = 'Tipe konversi tidak valid.';
    }

    // 4. Tampilkan Hasil
    resultDisplay.textContent = result;
}

// Tambahkan event listener ke tombol konversi
convertBtn.addEventListener('click', convertTemperature);

// Bonus: Konversi secara otomatis saat nilai input berubah
inputValue.addEventListener('input', convertTemperature);
conversionType.addEventListener('change', convertTemperature);

// Panggil fungsi sekali saat halaman dimuat (untuk membersihkan tampilan awal)
convertTemperature();