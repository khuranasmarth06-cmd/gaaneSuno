async function searchSongs() {
    let query = document.getElementById("search").value;
    let res = await fetch(`https://striveschool-api.herokuapp.com/api/deezer/search?q=${query}`);
    let data = await res.json();
    console.log(data);
    let results = document.getElementById("results");
    results.innerHTML = "";
    data.data.forEach(song => {
        let card = document.createElement("div");
        card.classList.add("card");

        card.innerHTML = `
            <img src="${song.album.cover}" alt="cover">
            <h3>${song.title}</h3>
            <p>${song.artist.name}</p>
            <button onclick="playSong('${song.preview}')">Play</button>
        `;
        results.appendChild(card);
    });
}
function playSong(url) {
    let player = document.getElementById("audioPlayer");
    player.src = url;
    player.play();
}
let btn = document.querySelector(".fa-house");
btn.addEventListener("click", function () {
    window.location.href = "index.html"
})