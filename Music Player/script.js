let playMusic = document.getElementById("play");
let pauseMusic = document.getElementById("pause");
let previousPlay = document.getElementById("play-previous");
let nextPlay = document.getElementById("play-next");
let moveBackward = document.getElementById("backward-btn");
let moveForward = document.getElementById("forward-btn");
let songName = document.getElementById("songName");
let songArtist = document.getElementById("songArtist");
let playStatus = document.getElementById("playStatus");
let startTime = document.getElementById("start-text");
let endTime = document.getElementById("end-text");
let percent = document.getElementById("percent");
let img = document.getElementById("img");
let bar = document.getElementById("bar");
let myBar = document.getElementById("mybar");
// let endTime = document.getElementById("end");
let i = 0;
let a = 0;
let beatTimers = [111000, 228000, 116000];
let images = [
  "images/468-thumbnail.png",
  "images/reedmathis.jpg",
  "images/hanudixit.jpg",
];

let beats = ["playAudio1.mp3", "playAudio2.mp3", "playAudio3.mp3"];
let titles = ["High noon", `(Iv'e Got A) Baby Sister`, "The Mumbai Beat"];

let audio = document.createElement("audio");
let artists = ["TrackTribe", "Reed Mathis", "Hanu Dixit"];

let time = [1000, 2000, 1000];
let timers = [11, 25, 12];
let nextSong;
let prevSong = [];
let newBeats;
let curSong;
let pr;
let duration;
let first = beats[0];
let last = beats[beats.length - 1];
curSong = new Audio(beats[0]);
let yourNum = 0;
let timeArr = [];
let cur = 0;
let cur1 = 0;
let currentTime = 10;
let increase = 0;
let decrease = 0;
let herebar;
let m = 0;

function playSong(song) {
  song.play();
  song.ontimeupdate = (e) => {
    console.log(e.srcElement.currentTime);
    increase = e.srcElement.currentTime + 10;
    decrease = e.srcElement.currentTime - 10;
    e = e.srcElement;

    moveForward.onclick = function () {
      movingForward(increase, e);
    };

    moveBackward.onclick = function () {
      movingBackward(decrease, e);
    };

    myBar.onclick = function (f) {
      increase = e.currentTime + f.offsetX / timers[s];
      console.log(increase);
      movingbarForward(increase, e, f);
      console.log(f);
      console.log(e.currentTime);
    };

    bar.onclick = function (f) {
      decrease = Math.abs(e.currentTime - f.offsetX);
      console.log(decrease);
      movingbarBackward(decrease, e, f);
      console.log(f);
      console.log(e.currentTime);
    };
  };

  function movingForward(inc, e) {
    console.log(inc);
    e.currentTime = inc;
    a += Number(20.091 / timers[s]);
    bar.style.transition = "1s all";
    console.log(a);
  }

  function movingBackward(dec, e) {
    console.log(dec);
    e.currentTime = dec;
    a -= Number(20.091 / timers[s]);
    console.log(a);
  }

  function movingbarForward(inc, e, f) {
    console.log(inc);
    e.currentTime = inc;
    a += (f.offsetX / f.clientX) * 20;
    bar.style.transition = "2s all";
    console.log(a);
  }

  function movingbarBackward(dec, e, f) {
    console.log(dec);
    e.currentTime = dec;
    a = (f.offsetX / f.clientX) * 15;
    console.log(a);
  }
}

let s = 0;

function designBar() {
  a += Number(20.091 / (beatTimers[s] / time[s]));
  bar.style.height = "0.5rem";
  bar.style.width = ` ${a}rem`;
  bar.style.borderRadius = "5px";
  bar.style.backgroundColor = "#99737a";
  if (a >= 20) {
    clearInterval(designBar1);
    if (!nextPlay.classList.contains("unclickable")) {
      playStatus.textContent = `No more Songs to Play`;
      playNextAudio();
    }
  }
}

function playAudio() {
  bar.classList.remove("hidden");
  playStatus.classList.remove("hidden");
  designBar1 = setInterval(designBar, time[s]);
  songName.textContent = titles[s];
  songArtist.textContent = artists[s];
  nextPlay.classList.remove("unclickable");
  pauseMusic.classList.remove("hidden");
  moveForward.classList.remove("unclickable");
  moveBackward.classList.remove("unclickable");
  playMusic.classList.add("hidden");
  playSong(curSong);
  img.src = images[s];
  playStatus.textContent = ` Playing ${s + 1} song of ${beats.length} songs `;
}

function pauseAudio() {
  clearInterval(designBar1);
  curSong.pause();
  pauseMusic.classList.add("hidden");
  playMusic.classList.remove("hidden");
}

function resetBar() {
  clearInterval(designBar1);
  a = 0;
  bar.style.width = `0rem`;
  bar.style.transition = "0s";
}

function playPrevAudio() {
  resetBar();
  s -= 1;
  designBar1 = setInterval(designBar, time[s]);
  img.src = images[s];
  playStatus.textContent = ` Playing ${s + 1} song of ${titles.length} songs `;
  songName.textContent = titles[s];
  songArtist.textContent = artists[s];
  pauseMusic.classList.remove("hidden");
  playMusic.classList.add("hidden");
  curSong.pause();
  prev = prevSong.pop();
  beats.unshift(prev);
  curSong = new Audio(beats[0]);
  playSong(curSong);
  if (prev == first) {
    previousPlay.classList.add("unclickable");
  } else {
    nextPlay.classList.remove("unclickable");
  }
}

function playNextAudio() {
  resetBar();
  s += 1;
  designBar1 = setInterval(designBar, time[s]);
  playStatus.textContent = ` Playing ${s + 1} song of ${titles.length} songs `;
  img.src = images[s];
  songName.textContent = titles[s];
  songArtist.textContent = artists[s];
  curSong.pause();
  pauseMusic.classList.remove("hidden");
  playMusic.classList.add("hidden");
  previousPlay.classList.remove("unclickable");
  prevSong.push(beats.shift());
  curSong = new Audio(beats[0]);
  console.log(beats);
  playSong(curSong);
  console.log(prevSong);
  if (prevSong.length >= 2 && beats.length <= 1) {
    nextPlay.classList.add("unclickable");
  }
}

playMusic.addEventListener("click", playAudio);
pauseMusic.addEventListener("click", pauseAudio);
nextPlay.addEventListener("click", playNextAudio);
previousPlay.addEventListener("click", playPrevAudio);
