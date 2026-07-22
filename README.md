# 🤖 Naufal ChatBot

Asisten AI chatbot berbahasa Indonesia yang siap membantu Anda dengan berbagai pertanyaan dan fitur-fitur menarik.

## ✨ Fitur

- 💬 Chat interaktif real-time
- 🎯 Respons cepat dan akurat
- 🌍 Fully berbahasa Indonesia
- 📱 Responsive design (mobile & desktop)
- 🎨 UI modern dan user-friendly
- ⚡ Lightweight & fast

## 📋 Menu Utama

- **AI** - Tanya sesuatu kepada AI
- **Downloader** - Download konten
- **Anime** - Informasi tentang anime
- **Game** - Informasi game
- **Group** - Informasi grup
- **Owner** - Informasi developer
- **Tools** - Alat bantu

## 🚀 Cara Menggunakan

### 1. Buka File Lokal
Cukup buka file `index.html` dengan browser favorit Anda:
- Klik dua kali pada `index.html`, atau
- Drag-drop ke browser, atau
- Gunakan Live Server di VS Code

### 2. Contoh Pertanyaan
```
Coba ketik:
- "halo" atau "hai"
- "siapa kamu"
- "menu"
- "jam"
- "tanggal"
- "terima kasih"
```

### 3. Interaksi
- Ketik pesan di input field
- Tekan Enter atau klik tombol Kirim
- Bot akan merespons dalam waktu 0.5 detik

## 🛠️ Teknologi

- **HTML5** - Structure
- **CSS3** - Styling & Animation
- **JavaScript (Vanilla)** - Logic

## 📁 Struktur File

```
he-fall-ai/
├── index.html      # File HTML utama
├── styles.css      # Styling & layout
├── script.js       # Logic & database
└── README.md       # Dokumentasi
```

## 🎨 Customization

### Mengubah Warna
Edit di `styles.css`:
```css
background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
```

### Menambah Respons Baru
Edit di `script.js` dalam array `database`:
```javascript
{
    q: ["pertanyaan1", "pertanyaan2"],
    a: "Jawaban yang ingin diberikan"
}
```

### Dynamic Response
Untuk respons dinamis (seperti jam dan tanggal):
```javascript
{
    q: ["pertanyaan"],
    a: () => "Respons: " + new Date().toLocaleTimeString()
}
```

## 💡 Fitur Keamanan

- HTML escaping untuk mencegah XSS
- Input validation
- Safe message handling

## 📞 Kontak Developer

**Developer:** Naufal AI  
**GitHub:** [naufalke932-oss](https://github.com/naufalke932-oss)  
**Repository:** [he-fall-ai](https://github.com/naufalke932-oss/he-fall-ai)

## 📝 Lisensi

Bebas digunakan untuk keperluan pribadi dan komersial.

---

**Dibuat dengan ❤️ oleh Naufal AI**