async function loadCards() {
    const response = await fetch("baseSet.json");
    const data = await response.json();

    const gallery = document.getElementById("gallery");

    data.data.forEach(card => {
        const div = document.createElement("div");
        div.classList.add("card");
        div.style.backgroundImage = `url(${card.image})`;
        gallery.appendChild(div);
    });
}

loadCards();
