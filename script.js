const yesBtn = document.getElementById("yesBtn");
const maybeBtn = document.getElementById("maybeBtn");
const questionCard = document.getElementById("questionCard");
const successCard = document.getElementById("successCard");
const hint = document.getElementById("hint");

let clicks = 0;

maybeBtn.addEventListener("click", () => {
  clicks++;

  const messages = [
    "Awww... please don't make me wait 🥺❤️",
    "I'll give you an extra-big hug! 🤗💕",
    "Okay okay... chocolate also! 🍫🥺",
    "Last chance... please say YES! 🥹❤️"
  ];

  hint.textContent = messages[Math.min(clicks - 1, messages.length - 1)];

  if (clicks >= 4) {
    maybeBtn.textContent = "Okay... YES ❤️";
    maybeBtn.style.background = "#ffe0eb";
  }
});

yesBtn.addEventListener("click", () => {
  questionCard.classList.add("hidden");
  successCard.classList.remove("hidden");
  createHearts();
});

function createHearts() {
  for (let i = 0; i < 35; i++) {
    const heart = document.createElement("span");
    heart.textContent = ["❤️", "💕", "💖", "💗"][Math.floor(Math.random() * 4)];
    heart.style.position = "fixed";
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.top = "100vh";
    heart.style.fontSize = 18 + Math.random() * 25 + "px";
    heart.style.zIndex = 10;
    heart.style.transition =
      `transform ${2 + Math.random() * 2}s ease-out, opacity 3s`;

    document.body.appendChild(heart);

    requestAnimationFrame(() => {
      heart.style.transform =
        `translateY(-${110 + Math.random() * 60}vh) rotate(${Math.random() * 360}deg)`;
      heart.style.opacity = "0";
    });

    setTimeout(() => heart.remove(), 4500);
  }
}
