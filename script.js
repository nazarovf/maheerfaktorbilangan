function cariFaktor() {
    let angka = parseInt(document.getElementById("angka").value);
    let faktor = [];
    let pasangan = [];
    let langkah = [];

    if (isNaN(angka) || angka <= 0) {
        document.getElementById("hasil").style.display = "block";
        document.getElementById("hasil").innerHTML = "⚠️ Masukkan angka positif!";
        return;
    }

    for (let i = 1; i <= angka; i++) {
        if (angka % i === 0) {
            faktor.push(i);
            langkah.push(`${angka} ÷ ${i} = ${angka / i} → faktor: ${i} dan ${angka / i}`);
        }
    }

    for (let i = 0; i < faktor.length / 2; i++) {
        pasangan.push(`${faktor[i]} × ${faktor[faktor.length - 1 - i]} = ${angka}`);
    }

    document.getElementById("hasil").style.display = "block";
    document.getElementById("hasil").innerHTML = `
        <div class="judul-hasil">📊 Hasil Perhitungan</div>
        <b>Langkah mencari faktor ${angka}:</b><br>
        ${langkah.map(l => `<div class="langkah">${l}</div>`).join("")}
        <br>
        ✅ <b>Faktor lengkap ${angka}:</b> ${faktor.join(", ")} <br><br>
        <b>Pasangan perkalian faktor:</b><br> ${pasangan.join("<br>")}
    `;
}
