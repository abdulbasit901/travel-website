let video = document.getElementById("play-vedio");
let btn = document.getElementById("btn-vedio");
btn.addEventListener("click", () => {
  if (video.classList.contains("pause")) {
    btn.innerHTML = `<img src="https://img.icons8.com/android/24/000000/pause.png"/>`;
    video.play();
    video.classList.remove("pause");
  } else {
    video.pause();
    btn.innerHTML = `<img src="https://img.icons8.com/metro/26/000000/play.png"/>`;
    video.classList.add("pause");
  }
});
