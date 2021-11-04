const map = {
    first: 120,
    third: 40,
    fourth: -53,
    fifth: -146,
};
document.querySelectorAll(".card").forEach((card) => {
    card.addEventListener("click", () => {
        const id = card.id;
        const transposition = map[id];
        document.querySelector(
            ".info-area",
        ).style.transform = `translatex(${transposition}%)`;
        document.querySelectorAll(".song-info").forEach((cred) => {
            if (cred.id === card.id) {
                cred.style.opacity = "1";
            } else {
                cred.style.opacity = "0";
            }
        });
    });
});