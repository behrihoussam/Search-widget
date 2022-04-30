const searchInput = document.getElementById("searchInput");
const searchButton = document.getElementById("searchButton");

searchButton.addEventListener("click",() => {
    searchInput.classList.toggle("hide");
    searchInput.value = null;
})