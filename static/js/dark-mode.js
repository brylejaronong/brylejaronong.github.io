if (localStorage.getItem("theme") === "dark") {
    document.documentElement.classList.add("dark-mode");
}

const toggleButton = document.querySelector(".dark-mode-toggle");

toggleButton.addEventListener("click", function() {
    document.documentElement.classList.toggle("dark-mode");

    if (document.documentElement.classList.contains("dark-mode"))
        localStorage.setItem("theme", "dark");
    else
        localStorage.setItem("theme", "light");
});