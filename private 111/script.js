const surpriseBtn = document.getElementById("surpriseBtn");
const modal = document.getElementById("modal");
const close = document.getElementById("close");
const musicBtn = document.getElementById("musicBtn");
const song = document.getElementById("song");

surpriseBtn.addEventListener("click", () => {
  modal.classList.add("show");
  burst();
});
close.addEventListener("click", () => modal.classList.remove("show"));
modal.addEventListener("click", e => { if(e.target === modal) modal.classList.remove("show"); });

musicBtn.addEventListener("click", async () => {
  try {
    if(song.paused){
      await song.play();
      musicBtn.textContent = "❚❚ Pause Song";
    } else {
      song.pause();
      musicBtn.textContent = "♫ Our Song";
    }
  } catch {
    alert("Add your MP3 file as 'song.mp3' inside this website folder first.");
  }
});

function makeHeart(){
  const h = document.createElement("div");
  h.className = "heart";
  h.textContent = ["♥","❤","💕","✨","💗"][Math.floor(Math.random()*5)];
  h.style.left = Math.random()*100 + "vw";
  h.style.animationDuration = (4 + Math.random()*4) + "s";
  h.style.fontSize = (12 + Math.random()*20) + "px";
  document.getElementById("hearts").appendChild(h);
  setTimeout(()=>h.remove(), 8500);
}
setInterval(makeHeart, 700);

function burst(){
  for(let i=0;i<35;i++){
    setTimeout(makeHeart, i*35);
  }
}
