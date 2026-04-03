let honeysingh = [
    ["BIRTHDAY BASH", "hoeysingh/birthdaybash.mp3"],
    ["CHASKA", "hoeysingh/chaska.mp3"],
    ["MILLIONAIRE", "hoeysingh/MILLIONAIRE.mp3"],
    ["PARTY ALL NIGHT", "hoeysingh/PartyAllNight.mp3"]
];
let dhurander = [
    ["DHURANDER - TITLE TRACK", "dhurander/titletrack.mp3"],
    ["ISHQ JHALAKAR", "dhurander/ishqjhalakar.mp3"],
    ["LUTT LE GYA", "dhurander/luttlegya.mp3"],
    ["F9LA - REHMAN DAKAIT", "dhurander/f9la.mp3"]
];
let playpause = document.querySelector(".fa-play");
let nextBtn = document.querySelector(".fa-forward");
let prevBtn = document.querySelector(".fa-backward");
let progressBar = document.getElementById("progressBar");
let currentAudio = new Audio();
let currentList=[];
let currentIndex = 0;
function playSong() {
    currentAudio.src = currentList[currentIndex][1];
    currentAudio.play();
    playpause.classList.replace("fa-play", "fa-pause");
}
playpause.addEventListener("click", () => {
    if (!currentAudio.src) return;

    if (currentAudio.paused) {
        currentAudio.play();
        playpause.classList.replace("fa-play", "fa-pause");
    } else {
        currentAudio.pause();
        playpause.classList.replace("fa-pause", "fa-play");
    }
});
nextBtn.addEventListener("click", () => {
    if (currentIndex < currentList.length - 1) {
        currentIndex++;
        playSong();
    }
});
prevBtn.addEventListener("click", () => {
    if (currentIndex > 0) {
        currentIndex--;
        playSong();
    }
});
function displaySongs(songArray) {
    let box = document.getElementById("songsBox");
    box.innerHTML = "";
    currentList = songArray;
    let ul = document.createElement("ul");
    songArray.forEach((song, index) => {
        let li = document.createElement("li");
        li.textContent = song[0];
        li.onclick = function () {
            currentIndex = index;
            playSong();
        };
        ul.appendChild(li);
    });
    box.appendChild(ul);
}
currentAudio.addEventListener("timeupdate", () => {
    if (currentAudio.duration) {
        let progress = (currentAudio.currentTime / currentAudio.duration) * 100;
        progressBar.value = progress;
    }
});
progressBar.addEventListener("input", () => {
    if (currentAudio.duration) {
        currentAudio.currentTime =
            (progressBar.value / 100) * currentAudio.duration;
    }
});
currentAudio.addEventListener("ended", () => {
    if (currentIndex < currentList.length - 1) {
        currentIndex++;
        playSong();
    } else {
        playpause.classList.replace("fa-pause", "fa-play");
    }
});
document.querySelector(".honeysingh").onclick = () => displaySongs(honeysingh);
document.querySelector(".dhurander").onclick = () => displaySongs(dhurander);
let home = document.querySelector(".fa-house");
home.addEventListener("click", function () {
    window.location.href = "index.html";
});