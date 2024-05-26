const video = document.getElementById("video");
const body = document.body;
const h1 = document.getElementById('h1');
window.addEventListener('click', ()=>{
    video.play();
});
h1.style.left = (window.innerWidth / 2 +( h1.getBoundingClientRect().width / 2)) + 'px';