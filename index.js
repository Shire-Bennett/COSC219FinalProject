import { getAuth, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/10.13.0/firebase-auth.js";

const auth = getAuth();

const welcomeMsg = document.getElementById("welcomeMsg");
const collectionLink = document.getElementById("collectionLink");

onAuthStateChanged(auth, (user) => {
    if (user) {
        welcomeMsg.innerHTML = `Welcome back, <strong>${user.email}</strong>`;
        collectionLink.style.display = "block";
    } else {
        welcomeMsg.textContent = "Welcome to PokeWorld! Create an account and open packs to collect all 151 Pokémon!";
        collectionLink.style.display = "none";
    }
});
