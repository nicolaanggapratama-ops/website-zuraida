(() => {
  "use strict";

  document.addEventListener("DOMContentLoaded", () => {
    // ===== BUKA PESAN ULANG TAHUN =====
    const openBtn = document.getElementById("openBtn");
    const letter = document.getElementById("letter");
    const reasons = document.getElementById("reasons");
    const finalNote = document.getElementById("finalNote");
    const messageText = document.getElementById("messageText");

    const birthdayMessage = [
      "Selamat ulang tahun, Zuraida Safitri. ♡",
      "Hari ini adalah hari spesial untuk seseorang yang begitu berarti.",
      "Terima kasih sudah hadir dan membawa banyak hal baik ke dalam hari-hariku.",
      "Aku berharap di usia yang baru ini, kamu selalu diberi kesehatan, kebahagiaan, dan kekuatan untuk mengejar semua impianmu.",
      "Semoga hal-hal baik datang kepadamu, satu per satu. Jangan pernah lupa bahwa kamu berharga dan pantas disayangi.",
      "Semoga hari ini membuatmu tersenyum, sama seperti kamu bisa membuat hari orang lain terasa lebih indah. Selamat ulang tahun, Zuraida. ✨"
    ];

    let messageOpened = false;

    function openBirthdayMessage() {
      if (messageOpened) return;
      messageOpened = true;

      if (letter) letter.classList.remove("hidden");
      if (reasons) reasons.classList.remove("hidden");
      if (finalNote) finalNote.classList.remove("hidden");

      if (messageText) {
        messageText.textContent = "";
        let paragraphIndex = 0;
        function showNextParagraph() {
          if (paragraphIndex >= birthdayMessage.length) return;
          const p = document.createElement("p");
          p.textContent = birthdayMessage[paragraphIndex++];
          messageText.appendChild(p);
          window.setTimeout(showNextParagraph, 650);
        }
        showNextParagraph();
      }

      if (openBtn) {
        openBtn.innerHTML = "Pesan terbuka <span>♡</span>";
        openBtn.setAttribute("aria-expanded", "true");
      }
      launchConfetti();
    }

    if (openBtn) {
      openBtn.setAttribute("aria-expanded", "false");
      openBtn.addEventListener("click", openBirthdayMessage);
    }

    // ===== CONFETTI =====
    function launchConfetti() {
      const canvas = document.getElementById("confetti");
      if (!canvas) return;
      const ctx = canvas.getContext("2d");
      if (!ctx) return;

      const dpr = window.devicePixelRatio || 1;
      const width = window.innerWidth;
      const height = window.innerHeight;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      canvas.style.width = width + "px";
      canvas.style.height = height + "px";
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

      const colors = ["#f3d38a", "#e8a6bc", "#fff0c2", "#c96b8a"];
      const pieces = Array.from({ length: 90 }, () => ({
        x: Math.random() * width,
        y: -Math.random() * height * 0.5,
        size: 3 + Math.random() * 5,
        speed: 2 + Math.random() * 4,
        drift: -1.5 + Math.random() * 3,
        angle: Math.random() * Math.PI * 2,
        color: colors[Math.floor(Math.random() * colors.length)]
      }));

      let frames = 0;
      function draw() {
        ctx.clearRect(0, 0, width, height);
        pieces.forEach(piece => {
          piece.y += piece.speed;
          piece.x += piece.drift;
          piece.angle += 0.04;
          ctx.save();
          ctx.translate(piece.x, piece.y);
          ctx.rotate(piece.angle);
          ctx.fillStyle = piece.color;
          ctx.fillRect(-piece.size / 2, -piece.size / 2, piece.size, piece.size * 1.5);
          ctx.restore();
          if (piece.y > height) {
            piece.y = -10;
            piece.x = Math.random() * width;
          }
        });
        frames += 1;
        if (frames < 180) window.requestAnimationFrame(draw);
        else ctx.clearRect(0, 0, width, height);
      }
      draw();
    }

    // ===== MUSIK LATAR OTOMATIS DAN LOOP =====
    const music = document.getElementById("birthdayMusic");
    if (!music) return;

    music.volume = 0.45;
    music.loop = true;

    async function tryPlayMusic() {
      try {
        if (music.paused) await music.play();
      } catch (error) {
        // Browser bisa memblokir autoplay bersuara sebelum interaksi pengguna.
        console.info("Autoplay diblokir browser; akan mencoba lagi setelah interaksi.", error);
      }
    }

    // Coba mulai saat halaman dibuka.
    tryPlayMusic();

    // Jika autoplay ditolak browser, coba lagi pada interaksi pertama.
    const retryAutoplay = () => {
      if (music.paused) tryPlayMusic();
    };
    document.addEventListener("pointerdown", retryAutoplay, { once: true });
    document.addEventListener("keydown", retryAutoplay, { once: true });

    // loop=true akan memutar ulang otomatis ketika lagu selesai.
    // Fallback tambahan jika browser gagal mengulang.
    music.addEventListener("ended", () => {
      music.currentTime = 0;
      tryPlayMusic();
    });
  });
})();
