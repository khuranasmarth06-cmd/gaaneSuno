let btn=document.querySelector(".fa-house");
btn.addEventListener("click",function(){
    window.location.href="index.html"
})
function openPlaylist(name) {
    window.location.href = "songs.html?playlist=" + name;
}