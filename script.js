const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");
menuToggle.addEventListener("click", () => {
    navLinks.classList.toggle("active");
});
function refreshLayout() {
    document.body.style.display = "none";
    document.body.offsetHeight;
    document.body.style.display = "";
}
window.addEventListener("orientationchange", () => {
    setTimeout(refreshLayout, 200);
});