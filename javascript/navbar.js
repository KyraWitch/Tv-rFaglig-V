document.addEventListener("DOMContentLoaded", function() {
    const navbar = document.querySelector("nav");

    window.addEventListener("scroll", () => {
        if (window.scrollY > 50) {
            navbar.classList.add("show");
        } else {
            navbar.classList.remove("show");
        }
    });
});