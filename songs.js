let playlists = {
    honeysingh: [
        ["BIRTHDAY BASH", "hoeysingh/birthdaybash.mp3"],
        ["CHASKA", "hoeysingh/chaska.mp3"],
        ["MILLIONAIRE", "hoeysingh/MILLIONAIRE.mp3"],
        ["PARTY ALL NIGHT", "hoeysingh/PartyAllNight.mp3"]
    ],
    dhurander: [
        ["DHURANDER - TITLE TRACK", "dhurander/titletrack.mp3"],
        ["ISHQ JHALAKAR", "dhurander/ishqjhalakar.mp3"],
        ["LUTT LE GYA", "dhurander/luttlegya.mp3"],
        ["F9LA - REHMAN DAKAIT", "dhurander/f9la.mp3"]
    ],
    diljit: [
        ["BORN TO SHINE", "diljit/borntoshine.mp3"],
        ["GOAT","diljit/goat.mp3"],
        ["LALKARA","diljit/lalkara.mp3"],
        ["HASS HASS","diljit/hasshass.mp3"]
    ],
    dhurander2:[
        ["JAIYE SAJNA","dhurander2/jayesajna.mp3"],
        ["JAAN SE GUZARTE HAIN","dhurander2/JaanSeGuzarteHain.mp3"],
        ["AARI AARI-TITLE TRACK","dhurander2/DhurandharTheRevengeAari Aari.mp3"],
        ["DIDI-SHERE BALCOCH","dhurander2/DIDI(SHER-E-BALOCH).mp3"]
    ]
};
let params = new URLSearchParams(window.location.search);
let playlistName = params.get("playlist");
let title = document.getElementById("title");
let songsBox = document.getElementById("songsBox");
title.innerText = playlistName.toUpperCase() + " PLAYLIST";
let currentAudio = new Audio();
let currentList = playlists[playlistName];
let currentIndex = 0;
function playSong() {
    currentAudio.src = currentList[currentIndex][1];
    currentAudio.play();
    playpause.classList.replace("fa-play", "fa-pause");
}
let playpause = document.querySelector(".fa-play");
let nextBtn = document.querySelector(".fa-forward");
let prevBtn = document.querySelector(".fa-backward");
let progressBar = document.getElementById("progressBar");
let ul = document.createElement("ul");
currentList.forEach((song, index) => {
    let li = document.createElement("li");
    li.innerText = song[0];
    li.onclick = () => {
        currentIndex = index;
        playSong();
    };
    ul.appendChild(li);
});
songsBox.appendChild(ul);
playpause.onclick = () => {
    if (currentAudio.paused) {
        currentAudio.play();
        playpause.classList.replace("fa-play", "fa-pause");
    } else {
        currentAudio.pause();
        playpause.classList.replace("fa-pause", "fa-play");
    }
};
nextBtn.onclick = () => {
    if (currentIndex < currentList.length - 1) {
        currentIndex++;
        playSong();
    }
};
prevBtn.onclick = () => {
    if (currentIndex > 0) {
        currentIndex--;
        playSong();
    }
};
currentAudio.addEventListener("timeupdate", () => {
    if (currentAudio.duration) {
        progressBar.value =
            (currentAudio.currentTime / currentAudio.duration) * 100;
    }
});
progressBar.oninput = () => {
    currentAudio.currentTime =
        (progressBar.value / 100) * currentAudio.duration;
};
document.querySelector(".fa-house").onclick = () => {
    window.location.href = "index2.html";
};