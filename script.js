const mainName = "Amisha";
const loveFrom = "Subash";
const startDate = new Date("2025-07-14T00:00:00");
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

// Mian image
const coverImg = "img0.jpg";
changeCoverImg = document.querySelector(".main-photo");
changeCoverImg.src = coverImg;

let imageList = ["img1.jpg", "img2.jpg", "img3.jpg", "img4.jpg", "img5.jpg"];

//////////////// ****************************** ////////////////
title = document.querySelector(".title");
title.textContent = `${mainName} ❤️ ${loveFrom}`;

// Date conversion to string
const dateInString = startDate.toLocaleDateString("en-US", {
  month: "long",
  day: "numeric",
  year: "numeric",
});

// Add girl name
const girlName = document.querySelector(".name");
girlName.textContent = `${mainName} ❤️`;

// Add boy name
const boyName = document.querySelector(".love_from");
boyName.textContent = ` From ${loveFrom} — With All My Heart`;

// Update date from relationship started
function updateCounter() {
  let n = new Date(),
    d = n - startDate,
    s = Math.floor(d / 1000),
    m = Math.floor(s / 60),
    h = Math.floor(m / 60),
    dy = Math.floor(h / 24);
  const y = Math.floor(dy / 365);
  dy %= 365;
  const mo = Math.floor(dy / 30);
  dy %= 30;
  h %= 24;
  m %= 60;
  s %= 60;
  counter.innerHTML = `Since <b>${dateInString}</b><br>${y} years ${mo} months ${dy} days<br>${h} hours ${m} minutes ${s} seconds of love 💫`;
}
setInterval(updateCounter, 1000);
updateCounter();
const msg = `${mainName}, since ${dateInString}, ${loveMessage}`;
let i = 0;
(function type() {
  if (i < msg.length) {
    typing.innerHTML += msg[i++];
    setTimeout(type, 40);
  }
})();

// Valentine msg
const valMsg = document.querySelector(".valentine_msg");
valMsg.textContent = valentineMsg;

// Final msg
const finMsg = document.querySelector("#finalMessage");
finMsg.textContent = finalMsg;

// Surprise section
let noCount = 0;
function startSurprise() {
  finalMessage.style.display = "block";
  proposal.style.display = "block";
  music.play();
  //   alert("I Love You Pooja ❤️");
  //   for (let i = 0; i < 25; i++) heart();
}

// envelop
function openEnvelope() {
  envelope.classList.add("open");
  secret.style.display = "block";
  secret.innerHTML = `💖 My Secret 💖<br><br> ${envelopeMsg} — ${loveFrom} ❤️`;
  for (let i = 0; i < 20; i++) heart();
}

// When she click "YES" show message
function yesClicked() {
  document.body.classList.add("candle-mode");
  secret.style.display = "block";
  envelopeWrap.style.display = "block";
  hideNoBTnOnClickYes();
  memories();
  secret.innerHTML =
    "💍 SHE SAID YES 💍<br><br>Forever officially begins now ❤️";
  for (let i = 0; i < 30; i++) heart();
}

// HIde no If On YES
function hideNoBTnOnClickYes() {
  noBtn = document.querySelector(".no_btn");
  noBtn.style.display = "none";
}

// Show memories on YES
const memoriesSection = document.querySelector(".memories");
memoriesSection.style.display = "none";

function memories() {
  memoriesSection.style.display = "";
}

// ********************* Memories Images Section **************

const mainImg = document.querySelector(".org_img");
const thumbnailContainer = document.querySelector(".memory-grid");

// Function to render main and thumbnails
function renderGallery() {
  // Set main image
  mainImg.style.opacity = 0; // start fade out
  setTimeout(() => {
    mainImg.src = imageList[0]; // set new main image
    mainImg.style.opacity = 1; // fade in
  }, 200); // small fade delay

  // Clear existing thumbnails
  thumbnailContainer.innerHTML = "";

  // Render thumbnails (skip main image at index 0)
  for (let i = 1; i < imageList.length; i++) {
    const thumbDiv = document.createElement("div");
    thumbDiv.className = "items";

    const thumbImg = document.createElement("img");
    thumbImg.src = imageList[i];
    thumbImg.style.cursor = "pointer";

    // Click event for swapping
    thumbImg.addEventListener("click", () => {
      // Swap main image with clicked thumbnail
      const clickedIndex = i;
      const clickedImage = imageList[clickedIndex];

      // Swap clicked with main
      [imageList[0], imageList[clickedIndex]] = [
        imageList[clickedIndex],
        imageList[0],
      ];

      // Move previous main (which is now at clickedIndex) to end
      const prevMain = imageList.splice(clickedIndex, 1)[0];
      imageList.push(prevMain);

      renderGallery(); // re-render everything
    });

    thumbDiv.appendChild(thumbImg);
    thumbnailContainer.appendChild(thumbDiv);
  }
}

// Initial render
renderGallery();

// ********************* Memories Images Section **************

function noClicked() {
  noCount++;
  noBtn.textContent = msgs[Math.min(noCount - 1, msgs.length)];
  noBtn.style.transform = `scale(${1 - noCount * 0.01})`;
  if (noCount >= msgs.length) noBtn.style.display = "none";
}

function heart() {
  const h = document.createElement("div");
  h.className = "heart";
  h.innerHTML = "❤️";
  h.style.left = Math.random() * 100 + "vw";
  document.body.appendChild(h);
  setTimeout(() => h.remove(), 6000);
}

//////////////// ****************************** ////////////////
