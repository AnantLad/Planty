function openSearch() {
    document.getElementById("myOverlay").style.display = "block";
}

function closeSearch() {
    document.getElementById("myOverlay").style.display = "none";
}
const swiper = new Swiper('.swiper-container', {
    loop: true,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
});