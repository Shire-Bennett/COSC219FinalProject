async function getBaseSetCards() {
    const response = await fetch("baseSet.json");
    const json = await response.json();
    return json.data;
}


function createPackElement() {
    const pack = document.createElement("div");
    pack.classList.add("pack");

    const img = document.createElement("img");
    img.src = "./baseSetPack_optimized.png";
    img.alt = "Base Set Booster Pack";

    pack.appendChild(img);
    return pack;
}

async function loadPacksIntoContainer() {
    const container = document.querySelector(".pack-container");
    container.innerHTML = "";

    const pile = document.createElement("div");
    pile.id = "cardPile";
    pile.classList.add("card-pile");
    container.appendChild(pile);

    const reveal = document.createElement("div");
    reveal.id = "revealArea";
    reveal.classList.add("reveal-area");
    container.appendChild(reveal);


    const cards = await getBaseSetCards();
    const pack = createPackElement();


    container.appendChild(pack);

        setTimeout(() => pack.classList.add("show"), 50);
        setTimeout(() => pack.classList.add("shake"), 600);
        setTimeout(() => pack.classList.add("fade"), 900);
        setTimeout(() => showCardPile(cards), 1200);
    

 pack.addEventListener("click", () => {
            console.log(cards);
        });
}

document.getElementById("buyBtn").addEventListener("click", () => { 
    loadPacksIntoContainer();
})



function generateRandomCards(cards) {
    const selected =[];

    for (let i = 0; i < 11; i++) {
        const randomIndex = Math.floor(Math.random() * cards.length);
        selected.push(cards[randomIndex]);
    }
    return selected;
}

function showCardPile(cards) {
    const pile = document.getElementById("cardPile");
    pile.innerHTML = "";

    const pulled = generateRandomCards(cards);

    pulled.forEach(card => {
        const div = document.createElement("div");
        div.classList.add("card");

        div.style.top = (Math.random() * 15) + "px";
        div.style.left = (Math.random() * 15) + "px";

        div.dataset.front = card.image;

       pile.appendChild(div);
    });

     pile.onclick = () => {
            const topCard = pile.lastElementChild;
            if (topCard) {
                revealCard(topCard);
            }
        };

        
}

function revealCard(cardDiv) {
    cardDiv.style.transform = "rotateY(90deg)";

    setTimeout(() => {

        cardDiv.style.backgroundImage = `url(${cardDiv.dataset.front})`;
        cardDiv.style.transform = "rotateY(0deg)";

        setTimeout(() => {
            moveToRevealArea(cardDiv);
        }, 200);
    }, 200);
   
}

function moveToRevealArea(cardDiv) {
    const reveal = document.getElementById("revealArea");

    cardDiv.remove();

    cardDiv.style.position = "static";
    cardDiv.style.top = "auto";
    cardDiv.style.left = "auto";
    cardDiv.classList.add("reveal-card");


    reveal.prepend(cardDiv);
}

