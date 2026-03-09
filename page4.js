<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Happy Birthday Aneela 🎂</title>
  <link
    href="https://fonts.googleapis.com/css2?family=Dancing+Script:wght@400;600;700&family=Playfair+Display:ital,wght@0,400;0,700;1,400&family=Josefin+Sans:wght@100;200;300&display=swap"
    rel="stylesheet" />
  <style>
    *,
    *::before,
    *::after {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }

    :root {
      --purple: #667eea;
      --violet: #764ba2;
      --pink: #ff6b9d;
      --rose: #c44569;
      --gold: #ffd700;
      --cream: #fff8f5;
      --white: #ffffff;
      --dark: #2d1b3d;
    }

    html {
      scroll-behavior: smooth;
    }

    body {
      will-change: transform;
      font-family: 'Josefin Sans', sans-serif;
      background: linear-gradient(135deg, #667eea 0%, #764ba2 50%, #c44569 100%);
      min-height: 100vh;
      overflow-x: hidden;
      cursor: default;
    }

    /* ── CUSTOM CURSOR ── */
    .cursor {
      position: fixed;
      width: 12px;
      height: 12px;
      background: var(--gold);
      border-radius: 50%;
      pointer-events: none;
      z-index: 9999;
      transform: translate(-50%, -50%);
      transition: width .3s, height .3s, background .3s;
      mix-blend-mode: difference;
    }

    <!-- .cursor-ring { position:fixed; width:38px; height:38px; border:1.5px solid rgba(255,215,0,.5); border-radius:50%; pointer-events:none; z-index:9998; transform:translate(-50%,-50%); transition:left .12s ease,top .12s ease,width .3s,height .3s; } -->
    <!-- body:has(.card:hover) .cursor      { width:22px; height:22px; background:var(--pink); } -->
    <!-- body:has(.card:hover) .cursor-ring { width:62px; height:62px; } -->

    /* ── CONFETTI LAYER ── */
    .confetti {
      position: fixed;
      inset: 0;
      pointer-events: none;
      overflow: hidden;
      z-index: 0;
    }

    .confetti-piece {
      position: absolute;
      font-size: 18px;
      top: -30px;
      opacity: 0;
      animation: confettiFall linear infinite;
    }

    @keyframes confettiFall {
      0% {
        top: -30px;
        opacity: 0;
        transform: rotate(0deg) scale(0.8);
      }

      8% {
        opacity: 1;
      }

      100% {
        top: 110%;
        opacity: .6;
        transform: rotate(540deg) scale(1.1);
      }
    }

    /* ── FLOATING ORBS ── */
    .orb {
      will-change: transform;
      position: fixed;
      border-radius: 50%;
      pointer-events: none;
      z-index: 1;
      filter: blur(70px);
      opacity: .18;
      animation: orbFloat 14s ease-in-out infinite;
    }

    .orb1 {
      width: 350px;
      height: 350px;
      background: var(--pink);
      top: 5%;
      left: 2%;
      animation-delay: 0s;
    }

    .orb2 {
      width: 250px;
      height: 250px;
      background: var(--gold);
      bottom: 10%;
      right: 5%;
      animation-delay: -6s;
    }

    .orb3 {
      width: 200px;
      height: 200px;
      background: #b388ff;
      top: 45%;
      left: 45%;
      animation-delay: -11s;
    }

    @keyframes orbFloat {

      0%,
      100% {
        transform: translate(0, 0) scale(1);
      }

      33% {
        transform: translate(25px, -25px) scale(1.08);
      }

      66% {
        transform: translate(-18px, 18px) scale(.94);
      }
    }

    /* ── HEADER ── */
    header {
      position: relative;
      z-index: 10;
      text-align: center;
      padding: 50px 20px 10px;
      opacity: 0;
      animation: fadeDown 1.2s cubic-bezier(.22, 1, .36, 1) .3s forwards;
    }

    .bday-badge {
      display: inline-block;
      background: rgba(255, 255, 255, .12);
      border: 1px solid rgba(255, 215, 0, .4);
      border-radius: 50px;
      padding: 6px 22px;
      font-size: .6rem;
      letter-spacing: .4em;
      color: var(--gold);
      font-weight: 200;
      text-transform: uppercase;
      margin-bottom: 16px;
      backdrop-filter: blur(8px);
    }

    header h1 {
      font-family: 'Dancing Script', cursive;
      font-weight: 700;
      font-size: clamp(2.8rem, 8vw, 5.5rem);
      color: var(--white);
      line-height: 1;
      text-shadow: 0 0 40px rgba(255, 107, 157, .6), 0 4px 20px rgba(0, 0, 0, .3);
    }

    header h1 span {
      color: var(--gold);
    }

    .subtitle {
      font-family: 'Playfair Display', serif;
      font-style: italic;
      font-size: clamp(1rem, 2.5vw, 1.3rem);
      color: rgba(255, 248, 245, .75);
      margin-top: 10px;
      letter-spacing: .05em;
    }

    .hd-divider {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 12px;
      margin: 18px auto;
    }

    .hd-divider span {
      font-size: 1.2rem;
      animation: pulse 1.5s ease-in-out infinite;
    }

    .hd-divider span:nth-child(2) {
      animation-delay: .3s;
    }

    .hd-divider span:nth-child(3) {
      animation-delay: .6s;
    }

    @keyframes pulse {

      0%,
      100% {
        transform: scale(1);
      }

      50% {
        transform: scale(1.3);
      }
    }

    /* ── GALLERY SECTION ── */
    .gallery-wrap {
      position: relative;
      z-index: 10;
      padding: 10px 20px 0;
    }

    .gallery {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      gap: 3px;
      max-width: 900px;
      margin: 0 auto;
    }

    /* ── CARDS ── */
    .card {
      will-change: transform, filter;
      transform: translateZ(0);
      backface-visibility: hidden;
      position: relative;
      overflow: hidden;
      aspect-ratio: 3/4;
      cursor: none;
      opacity: 0;
      animation: cardReveal 1s cubic-bezier(.22, 1, .36, 1) forwards;
    }

    .card:nth-child(1) {
      animation-delay: .5s;
      border-radius: 16px 3px 3px 3px;
    }

    .card:nth-child(2) {
      animation-delay: .75s;
      border-radius: 3px 16px 3px 3px;
    }

    .card:nth-child(3) {
      animation-delay: 1.0s;
      border-radius: 3px 3px 3px 16px;
    }

    .card:nth-child(4) {
      animation-delay: 1.25s;
      border-radius: 3px 3px 16px 3px;
    }

    .card img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      display: block;
      transform: scale(1.09);
      transition: transform .9s cubic-bezier(.22, 1, .36, 1), filter .5s ease;
      filter: brightness(.82) saturate(.95);
    }

    .card:hover img {
      transform: scale(1.0);
      filter: brightness(1.05) saturate(1.1);
    }

    .card-overlay {
      position: absolute;
      inset: 0;
      background: linear-gradient(to top, rgba(45, 27, 61, .85) 0%, rgba(102, 126, 234, .12) 50%, transparent 100%);
      transition: opacity .4s;
    }

    .card:hover .card-overlay {
      opacity: .55;
    }

    /* Birthday ribbon corner */
    .card-ribbon {
      position: absolute;
      top: 12px;
      left: 12px;
      background: linear-gradient(135deg, var(--gold), #ffaa00);
      color: var(--dark);
      font-size: .55rem;
      font-weight: 700;
      letter-spacing: .2em;
      text-transform: uppercase;
      padding: 4px 10px;
      border-radius: 20px;
      box-shadow: 0 2px 10px rgba(0, 0, 0, .25);
      opacity: 0;
      transform: translateX(-12px);
      transition: opacity .4s, transform .4s cubic-bezier(.22, 1, .36, 1);
    }

    .card:hover .card-ribbon {
      opacity: 1;
      transform: translateX(0);
    }

    /* Shine sweep */
    .card::after {
      content: '';
      position: absolute;
      inset: 0;
      background: linear-gradient(110deg, transparent 35%, rgba(255, 255, 255, .09) 50%, transparent 65%);
      transform: translateX(-100%);
    }

    .card:hover::after {
      transform: translateX(100%);
      transition: transform .65s ease;
    }

    /* Card info */
    .card-info {
      position: absolute;
      bottom: 0;
      left: 0;
      right: 0;
      padding: 24px 20px 18px;
      transform: translateY(10px);
      opacity: 0;
      transition: transform .5s cubic-bezier(.22, 1, .36, 1), opacity .4s;
    }

    .card:hover .card-info {
      transform: translateY(0);
      opacity: 1;
    }

    .card-num {
      font-size: .52rem;
      letter-spacing: .35em;
      color: var(--gold);
      font-weight: 200;
      margin-bottom: 5px;
    }

    .card-title {
      font-family: 'Dancing Script', cursive;
      font-size: 1.5rem;
      color: var(--white);
      line-height: 1.2;
    }

    /* Hover corner accent */
    .corner {
      position: absolute;
      top: 0;
      right: 0;
      width: 38px;
      height: 38px;
      border-top: 1.5px solid rgba(255, 215, 0, .6);
      border-right: 1.5px solid rgba(255, 215, 0, .6);
      opacity: 0;
      transform: scale(.5);
      transition: opacity .4s, transform .4s cubic-bezier(.22, 1, .36, 1);
    }

    .card:hover .corner {
      opacity: 1;
      transform: scale(1);
    }

    /* ── MESSAGE BOX ── */
    .message-section {
      position: relative;
      z-index: 10;
      max-width: 800px;
      margin: 40px auto;
      padding: 0 20px 20px;
      opacity: 0;
      animation: fadeUp 1.2s cubic-bezier(.22, 1, .36, 1) 2s forwards;
    }

    .message-box {
      background: var(--white);
      border-radius: 24px;
      padding: 50px 50px 40px;
      box-shadow: 0 30px 80px rgba(45, 27, 61, .4), 0 0 0 1px rgba(255, 215, 0, .15);
      position: relative;
      overflow: hidden;
    }

    /* Decorative top strip */
    .message-box::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      height: 5px;
      background: linear-gradient(90deg, var(--purple), var(--pink), var(--gold), var(--pink), var(--violet));
      background-size: 200% 100%;
      animation: shimmerStrip 3s linear infinite;
    }

    @keyframes shimmerStrip {
      0% {
        background-position: 0%
      }

      100% {
        background-position: 200%
      }
    }

    /* Emoji decorations */
    .msg-deco {
      text-align: center;
      font-size: 2rem;
      margin-bottom: 8px;
      letter-spacing: 8px;
      animation: pulse 1.8s ease-in-out infinite;
    }

    .message-title {
      font-family: 'Dancing Script', cursive;
      color: var(--purple);
      font-size: clamp(1.8rem, 4vw, 2.8rem);
      text-align: center;
      margin-bottom: 8px;
      font-weight: 700;
      background: linear-gradient(135deg, var(--purple), var(--rose));
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
    }

    .msg-line {
      width: 80px;
      height: 2px;
      background: linear-gradient(90deg, transparent, var(--gold), transparent);
      margin: 0 auto 28px;
    }

    .message-content {
      font-family: 'Playfair Display', serif;
      color: #333;
      line-height: 1.9;
      font-size: 1.05em;
    }

    .message-content p {
      margin-bottom: 18px;
    }

    .message-content p:first-child {
      font-weight: 700;
      color: var(--violet);
    }

    .signature {
      font-style: italic;
      color: var(--purple);
      font-weight: 600;
      font-size: 1.05em;
    }

    .from {
      text-align: right;
      font-size: 1.15em;
      color: var(--violet);
      font-weight: 700;
      margin-top: 8px;
      font-family: 'Dancing Script', cursive;
      font-size: 1.4rem;
    }

    /* ── FOOTER ── */
    footer {
      position: relative;
      z-index: 10;
      text-align: center;
      padding: 10px 20px 50px;
      opacity: 0;
      animation: fadeUp 1s ease 2.5s forwards;
    }

    footer p {
      font-size: .58rem;
      letter-spacing: .3em;
      color: rgba(255, 248, 245, .45);
      text-transform: uppercase;
    }

    /* ── LIGHTBOX ── */
    .lightbox {
      position: fixed;
      inset: 0;
      background: rgba(20, 8, 35, .96);
      z-index: 1000;
      display: flex;
      align-items: center;
      justify-content: center;
      opacity: 0;
      pointer-events: none;
      transition: opacity .4s ease;
      backdrop-filter: blur(10px);
    }

    .lightbox.active {
      opacity: 1;
      pointer-events: all;
    }

    .lightbox img {
      max-width: 88vw;
      max-height: 88vh;
      object-fit: contain;
      border: 1px solid rgba(255, 215, 0, .25);
      border-radius: 12px;
      box-shadow: 0 0 80px rgba(255, 107, 157, .25);
      transform: scale(.88);
      transition: transform .45s cubic-bezier(.22, 1, .36, 1);
    }

    .lightbox.active img {
      transform: scale(1);
    }

    .lb-close {
      position: absolute;
      top: 28px;
      right: 32px;
      color: var(--cream);
      font-size: 1.3rem;
      letter-spacing: .2em;
      cursor: pointer;
      opacity: .5;
      transition: opacity .3s;
      font-weight: 100;
    }

    .lb-close:hover {
      opacity: 1;
    }

    .lb-emojis {
      position: absolute;
      bottom: 20px;
      font-size: 1.4rem;
      letter-spacing: 10px;
      animation: pulse 1.5s ease-in-out infinite;
    }

    /* ── KEYFRAMES ── */
    @keyframes fadeDown {
      from {
        opacity: 0;
        transform: translateY(-28px);
      }

      to {
        opacity: 1;
        transform: translateY(0);
      }
    }

    @keyframes fadeUp {
      from {
        opacity: 0;
        transform: translateY(24px);
      }

      to {
        opacity: 1;
        transform: translateY(0);
      }
    }

    @keyframes cardReveal {
      from {
        opacity: 0;
        transform: scale(.92) translateY(24px);
      }

      to {
        opacity: 1;
        transform: scale(1) translateY(0);
      }
    }

    /* ── RESPONSIVE ── */
    @media(max-width:600px) {
      .gallery {
        gap: 2px;
      }

      .message-box {
        padding: 36px 22px 28px;
      }

      header {
        padding: 36px 15px 8px;
      }
    }
  </style>
</head>

<body>

  <!-- <div class="cursor" id="cursor"></div>
  <div class="cursor-ring" id="cursorRing"></div>
  <div class="confetti" id="confetti"></div> -->

  <div class="orb orb1"></div>
  <div class="orb orb2"></div>
  <div class="orb orb3"></div>

  <!-- HEADER -->
  <header>
    <div class="bday-badge">✨ &nbsp; A Birthday Celebration &nbsp; ✨</div>
    <h1>Happy Birthday<br /><span>Aneela</span> 🎂</h1>
    <p class="subtitle">A gallery of beautiful moments, just for you</p>
    <div class="hd-divider">
      <span>🎈</span><span>🎀</span><span>🎈</span>
    </div>
  </header>

  <!-- PHOTO GALLERY -->
  <div class="gallery-wrap">
    <div class="gallery">

      <div class="card" onclick="openLightbox('pic1.jpeg')">
        <img src="pic1.jpeg" alt="Portrait 1" />
        <div class="card-overlay"></div>
        <div class="corner"></div>
        <div class="card-ribbon">🎀 Birthday</div>
        <div class="card-info">
          <p class="card-num">01 / 04</p>
          <p class="card-title">First Light ✨</p>
        </div>
      </div>

      <div class="card" onclick="openLightbox('pic2.jpeg')">
        <img src="pic2.jpeg" alt="Portrait 2" />
        <div class="card-overlay"></div>
        <div class="corner"></div>
        <div class="card-ribbon">🌸 Special</div>
        <div class="card-info">
          <p class="card-num">02 / 04</p>
          <p class="card-title">In Bloom 🌸</p>
        </div>
      </div>

      <div class="card" onclick="openLightbox('pic3.jpeg')">
        <img src="pic3.jpeg" alt="Portrait 3" />
        <div class="card-overlay"></div>
        <div class="corner"></div>
        <div class="card-ribbon">🎂 Today</div>
        <div class="card-info">
          <p class="card-num">03 / 04</p>
          <p class="card-title">Golden Hour 🌟</p>
        </div>
      </div>

      <div class="card" onclick="openLightbox('pic4.jpeg')">
        <img src="pic4.jpeg" alt="Portrait 4" />
        <div class="card-overlay"></div>
        <div class="corner"></div>
        <div class="card-ribbon">💖 Always</div>
        <div class="card-info">
          <p class="card-num">04 / 04</p>
          <p class="card-title">Reverie 💖</p>
        </div>
      </div>

    </div>
  </div>

  <!-- MESSAGE BOX -->
  <div class="message-section">
    <div class="message-box">
      <div class="msg-deco">🎂 🎁 🎈</div>
      <h2 class="message-title">A Special Message for You</h2>
      <div class="msg-line"></div>
      <div class="message-content">
        <p>Dear Aneela,</p>

        <p>
          On this beautiful day, I just want to remind you how grateful I am to have you in my life.
        </p>

        <p>
          You are not only my cousin but also a wonderful soul — kind, graceful, and full of warmth.
          Your smile brings joy to everyone around you, and these pictures are just a small glimpse
          of the amazing person you truly are.
        </p>

        <p class="signature">
          🎀 May your birthday be filled with happiness, laughter, love, and countless beautiful memories. 🎀
        </p>

        <p class="from">
          With warm wishes,<br>
          — Muhammad Ahmad Khan 💜
        </p>
      </div>
    </div>
  </div>

  <footer>
    <p>Click any portrait to enlarge &nbsp;·&nbsp; Made with 💖 for Aneela</p>
  </footer>

  <!-- LIGHTBOX -->
  <div class="lightbox" id="lightbox" onclick="closeLightbox()">
    <span class="lb-close">✕ &nbsp;CLOSE</span>
    <img src="" id="lbImg" alt="Full view" />
    <div class="lb-emojis">🎂 🎈 🎀 💖 🌸</div>
  </div>

  <!-- AUDIO -->
  <audio id="birthdayMusic" loop>
    <source src="music3.mp3" type="audio/mpeg">
  </audio>

  <script>
    // ── CURSOR ──
  
     <!-- const cursor = document.getElementById('cursor');
    const ring   = document.getElementById('cursorRing');
    document.addEventListener('mousemove', e => {
      cursor.style.left = e.clientX + 'px';
      cursor.style.top  = e.clientY + 'px';
      setTimeout(() => {
        ring.style.left = e.clientX + 'px';
        ring.style.top  = e.clientY + 'px';
      }, 70);
    }); -->

    // ── MUSIC ──
    const music = document.getElementById('birthdayMusic');
    window.addEventListener('load', () => {
      music.play().catch(() => {
        document.body.addEventListener('click', () => music.play(), { once: true });
      });
    });

    // ── CONFETTI ──
    const confettiContainer = document.getElementById('confetti');
    const emojis = ['🎉', '🎈', '🎀', '🎁', '💕'];

    function createConfetti() {
      for (let i = 0; i < 28; i++) {
        setTimeout(() => {
          const el = document.createElement('div');
          el.className = 'confetti-piece';
          el.textContent = emojis[Math.floor(Math.random() * emojis.length)];
          el.style.left = Math.random() * 100 + '%';
          el.style.fontSize = (Math.random() * 14 + 12) + 'px';
          const dur = (Math.random() * 5 + 4);
          el.style.animationDuration = dur + 's';
          el.style.animationDelay = (Math.random() * 2) + 's';
          confettiContainer.appendChild(el);
          setTimeout(() => el.remove(), (dur + 3) * 1000);
        }, i * 120);
      }
    }
    createConfetti();
    setInterval(createConfetti, 8000);

    // ── LIGHTBOX ──
    function openLightbox(src) {
      document.getElementById('lbImg').src = src;
      document.getElementById('lightbox').classList.add('active');
    }
    function closeLightbox() {
      document.getElementById('lightbox').classList.remove('active');
    }
    document.addEventListener('keydown', e => { if (e.key === 'Escape') closeLightbox(); });

    // ── 3D TILT ON CARDS ──
    document.querySelectorAll('.card').forEach(card => {
      card.addEventListener('mousemove', e => {
        const r = card.getBoundingClientRect();
        const x = (e.clientX - r.left) / r.width - 0.5;
        const y = (e.clientY - r.top) / r.height - 0.5;
        card.style.transform = `perspective(800px) rotateY(${x * 7}deg) rotateX(${-y * 7}deg) scale(1.03)`;
        card.style.transition = 'transform 0.05s ease';
      });
      card.addEventListener('mouseleave', () => {
        card.style.transform = '';
        card.style.transition = 'transform 0.7s cubic-bezier(.22,1,.36,1)';
      });
    });
  </script>
</body>

</html>
