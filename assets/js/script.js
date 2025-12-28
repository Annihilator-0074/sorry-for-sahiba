function showMessage() {
  document.getElementById("hiddenMessage").innerText =
    "Sahiba, I’m really sorry 🥺💗 I miss you and I promise to do better.";

  const hug = document.getElementById("hug");
  hug.classList.add("show");

  setTimeout(() => {
    hug.classList.remove("show");
  }, 2000);
}

// Floating hearts
setInterval(() => {
  const heart = document.createElement("div");
  heart.className = "heart";
  heart.innerText = "💗";
  heart.style.left = Math.random() * 100 + "vw";
  document.body.appendChild(heart);

  setTimeout(() => heart.remove(), 6000);
}, 500);
const music = document.getElementById("bgMusic");
const overlay = document.getElementById("tapToStart");

function startMusic() {
  music.play().catch(() => {});
  overlay.style.display = "none";

  document.removeEventListener("click", startMusic);
  document.removeEventListener("touchstart", startMusic);
}

document.addEventListener("click", startMusic);
document.addEventListener("touchstart", startMusic);
