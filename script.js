function showResult() {
    const manga = document.getElementById("manga").checked;
    const manhwa = document.getElementById("manhwa").checked;
    const result = document.getElementById("result");

    if (manga && manhwa) {
        result.textContent = "You like both manhwa and manga.";
    } else if (manga) {
        result.textContent = "You like manga.";
    } else if (manhwa) {
        result.textContent = "You like manhwa.";
    } else {
        result.textContent = "Please select at least one option.";
    }
}
