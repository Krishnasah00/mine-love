/* ================= BASIC DATA ================= */
const mainName = "Manika";
const loveFrom = "Rabindra";
const startDate = new Date("2020-03-27T00:00:00");
const finalMsg = `I Love You ${mainName} ❤️`;

const loveMessage =
  "my heart chose you. Every second has only made that choice stronger.";
const envelopeMsg = "You are my calm, my chaos, my forever.";
const valentineMsg = "Will you be my Valentine 🌹 ? 🥹";

const msgs = [
  "Are you really sure? 🥺",
  "Think again, my heart is shaking 😭",
  "Unlimited love included 😌",
  "Chocolate bribe incoming 🍫",
  "Last chance before I cry 😢",
  "My mom already likes you 😭❤️",
  "I promise lifetime happiness 🥹",
  "Say yes and I’ll cook for you 😋",
  "Free hugs for life 🤗",
  "No refunds, only love 😌💖",
  "My heart says YES for you 💓",
  "Even the stars agree 🌟",
  "Don’t break my heart pls 🥺",
  "Forever starts with YES 💍",
  "Warning: Extreme love ahead 🚨❤️",
  "Only Yes",
];

/* ================= COVER IMAGE ================= */
const coverImg = "./images/img0.jpg";
const changeCoverImg = document.querySelector(".main-photo");
if (changeCoverImg) changeCoverImg.src = coverImg;

/* ================= GALLERY IMAGES ================= */
let imageList = [
  "./images/img1.jpg",
  "./images/img2.jpg",
  "./images/img3.jpg",
  "./images/img4.jpg",
  "./images/img5.jpg",
];

/* ================= TEXT CONTENT ================= */
document.querySelector(".title").textContent = `${mainName} ❤️ ${loveFrom}`;
document.querySelector(".name").textContent = `${mainName} ❤️`;
document.querySelector(".love_from").textContent =
  ` From ${loveFrom} — With All My Heart`;
document.querySelector(".valentine_msg").textContent = valentineMsg;
document.querySelector("#finalMessage").textContent = finalMsg;

/* ================= DATE STRING ================= */
const dateInString = startDate.toLocaleDateString("en-US", {
  month: "long",
  day: "numeric",
  year: "numeric",
});

/* ================= LOVE COUNTER ================= */
function updateCounter() {
  const now = new Date();
  let diff = now - startDate;

  let s = Math.floor(diff / 1000);
  let m = Math.floor(s / 60);
  let h = Math.floor(m / 60);
  let d = Math.floor(h / 24);

  const y = Math.floor(d / 365);
  d %= 365;
  const mo = Math.floor(d / 30);
  d %= 30;
  h %= 24;
  m %= 60;
  s %= 60;

  counter.innerHTML = `Since <b>${dateInString}</b><br />
${y} years ${mo} months ${d} days<br />
${h} hours ${m} minutes ${s} seconds of love 💫`;
}

setInterval(updateCounter, 1000);
updateCounter();

/* ================= TYPE WRITER ================= */
const typingText = `${mainName}, since ${dateInString}, ${loveMessage}`;
let t = 0;

(function typeEffect() {
  if (t < typingText.length) {
    typing.innerHTML += typingText[t++];
    setTimeout(typeEffect, 40);
  }
})();

/* ================= MEMORIES SECTION ================= */
const memoriesSection = document.querySelector(".memories");
if (memoriesSection) memoriesSection.style.display = "none";

function memories() {
  if (memoriesSection) memoriesSection.style.display = "";
}

/* ================= GALLERY WITH FADE ANIMATION ================= */
const mainImg = document.querySelector(".org_img");
const thumbnailContainer = document.querySelector(".memory-grid");

function renderGallery() {
  if (!mainImg || !thumbnailContainer) return;

  mainImg.style.opacity = 0;
  mainImg.onload = null;

  setTimeout(() => {
    mainImg.src = imageList[0];
    mainImg.onload = () => {
      mainImg.style.opacity = 1;
    };
  }, 300);

  thumbnailContainer.innerHTML = "";

  for (let i = 1; i < imageList.length; i++) {
    const item = document.createElement("div");
    item.className = "items";

    const img = document.createElement("img");
    img.src = imageList[i];
    img.style.cursor = "pointer";

    img.addEventListener("click", () => {
      [imageList[0], imageList[i]] = [imageList[i], imageList[0]];
      const moved = imageList.splice(i, 1)[0];
      imageList.push(moved);
      renderGallery();
    });

    item.appendChild(img);
    thumbnailContainer.appendChild(item);
  }
}

renderGallery();

/* ================= SURPRISE SECTION ================= */
function startSurprise() {
  finalMessage.style.display = "block";
  proposal.style.display = "block";
}

function openEnvelope() {
  envelope.classList.add("open");
  secret.style.display = "block";
  secret.innerHTML = `💖 My Secret 💖<br /><br />${envelopeMsg} — ${loveFrom} ❤️`;

  for (let i = 0; i < 20; i++) heart();
}

/* ================= YES CLICKED ================= */
function yesClicked() {
  document.body.classList.add("candle-mode");

  secret.style.display = "block";
  envelopeWrap.style.display = "block";

  hideNoBTnOnClickYes();
  memories();

  secret.innerHTML =
    "💍 SHE SAID YES 💍<br /><br />Forever officially begins now ❤️";

  // Start continuous hearts
  startHearts();
}

let noCount = 0;
function noClicked() {
  noCount++;
  noBtn.textContent = msgs[Math.min(noCount - 1, msgs.length - 1)];
  noBtn.style.transform = `scale(${1 - noCount * 0.01})`;
  if (noCount >= msgs.length) noBtn.style.display = "none";
}

function hideNoBTnOnClickYes() {
  const noBtn = document.querySelector(".no_btn");
  if (noBtn) noBtn.style.display = "none";
}

/* ================= HEART EFFECT ================= */
let heartInterval = null;

function heart() {
  const h = document.createElement("div");
  h.className = "heart";
  h.innerHTML = "❤️";
  h.style.left = Math.random() * 100 + "vw";
  document.body.appendChild(h);
  setTimeout(() => h.remove(), 6000);
}

// Continuous hearts
function startHearts() {
  if (heartInterval) return; // already running

  heartInterval = setInterval(() => {
    const heartCount = 2 + Math.floor(Math.random() * 2); // 2-3 hearts per interval

    for (let i = 0; i < heartCount; i++) {
      const h = document.createElement("div");
      h.className = "heart";

      // Random position relative to current viewport
      const scrollTop = window.scrollY || document.documentElement.scrollTop;
      const scrollLeft = window.scrollX || document.documentElement.scrollLeft;

      h.style.left =
        scrollLeft + Math.random() * (document.body.scrollWidth - 50) + "px";
      h.style.top =
        scrollTop + Math.random() * (window.innerHeight - 50) + "px";

      const size = 20 + Math.random() * 30;
      h.style.width = size + "px";
      h.style.height = size + "px";

      h.innerHTML = `
        <svg viewBox="0 0 800 700" xmlns="http://www.w3.org/2000/svg">
          <path d="m263.42 235.15c-66.24 0-120 53.76-120 120 0 134.76 135.93 170.09 228.56 303.31 87.574-132.4 228.56-172.86 228.56-303.31 0-66.24-53.76-120-120-120-48.048 0-89.402 28.37-108.56 69.188-19.161-40.817-60.514-69.188-108.56-69.188z"/>
        </svg>
      `;

      document.body.appendChild(h);

      // Remove heart after animation
      h.addEventListener("animationend", () => h.remove());
    }
  }, 400); // spawn every 400ms
}
