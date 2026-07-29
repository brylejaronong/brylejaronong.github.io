const toggleButton = document.querySelector(".dark-mode-toggle");

toggleButton.addEventListener("click", function() {
    document.documentElement.classList.toggle("dark-mode");
});