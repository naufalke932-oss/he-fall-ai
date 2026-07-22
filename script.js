const database = [
    {
        q: ["halo", "hai", "assalamualaikum"],
        a: "Halo 👋 Selamat datang di Naufal Chat-Bot."
    },
    {
        q: ["siapa kamu"],
        a: "Saya adalah Naufal Chat-Bot, asisten AI yang siap membantu Anda dengan berbagai kebutuhan."
    },
    {
        q: ["menu"],
        a: "📋 Menu tersedia:\n• AI - Tanya sesuatu kepada AI\n• Downloader - Download konten\n• Anime - Info tentang anime\n• Game - Info game\n• Group - Informasi grup\n• Owner - Info developer\n• Tools - Alat bantu"
    },
    {
        q: ["creator", "owner", "pembuat", "siapa pembuat"],
        a: "👨‍💻 Developer: Naufal AI\nGitHub: naufalke932-oss"
    },
    {
        q: ["terima kasih", "makasih", "thanks"],
        a: "Sama-sama 😊 Senang bisa membantu Anda!"
    },
    {
        q: ["jam", "pukul", "waktu"],
        a: () => "⏰ Sekarang pukul: " + new Date().toLocaleTimeString("id-ID")
    },
    {
        q: ["tanggal", "hari"],
        a: () => "📅 Hari ini: " + new Date().toLocaleDateString("id-ID", { 
            weekday: 'long', 
            year: 'numeric', 
            month: 'long', 
            day: 'numeric' 
        })
    },
    {
        q: ["halo naufal"],
        a: "Halo juga! 👋 Ada yang bisa saya bantu?"
    },
    {
        q: ["apa kabar", "kabar"],
        a: "Alhamdulillah baik-baik saja 😊 Bagaimana dengan Anda? Ada yang bisa saya bantu?"
    },
    {
        q: ["bantuan", "help"],
        a: "📞 Butuh bantuan? Silakan tanyakan:\n• Ketik 'menu' untuk melihat fitur\n• Tanya tentang waktu atau tanggal\n• Atau tanya hal lainnya yang ingin Anda ketahui"
    },
    {
        q: ["hello"],
        a: "Hello! 👋 Selamat datang di Naufal ChatBot"
    },
    {
        q: ["bye", "goodbye", "sampai jumpa"],
        a: "Sampai jumpa! 👋 Terima kasih telah menggunakan Naufal ChatBot"
    }
];

function cariJawaban(pesan) {
    pesan = pesan.toLowerCase().trim();

    // Exact match first
    for (let item of database) {
        for (let kata of item.q) {
            if (pesan === kata) {
                return typeof item.a === "function" ? item.a() : item.a;
            }
        }
    }

    // Partial match
    for (let item of database) {
        for (let kata of item.q) {
            if (pesan.includes(kata)) {
                return typeof item.a === "function" ? item.a() : item.a;
            }
        }
    }

    return "❓ Maaf, saya belum mengetahui jawaban tersebut. Silakan tambahkan ke database AI atau coba tanyakan hal lain. Ketik 'menu' untuk bantuan!";
}

function send() {
    const input = document.getElementById("text");
    const chat = document.getElementById("chat");

    if (input.value.trim() === "") return;

    const pesan = input.value;

    // Display user message
    chat.innerHTML += `<div class="user">${escapeHtml(pesan)}</div>`;

    // Get bot response
    const jawaban = cariJawaban(pesan);

    // Display bot response with delay
    setTimeout(() => {
        chat.innerHTML += `<div class="bot">${escapeHtml(jawaban)}</div>`;
        chat.scrollTop = chat.scrollHeight;
    }, 500);

    input.value = "";
    input.focus();
}

function escapeHtml(text) {
    const map = {
        '&': '&amp;',
        '<': '&lt;',
        '>': '&gt;',
        '"': '&quot;',
        "'": '&#039;'
    };
    return text.replace(/[&<>"']/g, m => map[m]);
}

// Enter key listener
document.getElementById("text").addEventListener("keypress", function (e) {
    if (e.key === "Enter") {
        send();
    }
});

// Auto focus input
window.addEventListener("load", () => {
    document.getElementById("text").focus();
});
