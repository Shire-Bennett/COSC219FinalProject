import { getAuth, onAuthStateChanged, signOut } from "https://www.gstatic.com/firebasejs/10.13.0/firebase-auth.js";

const auth = getAuth();

const welcomeMsg = document.getElementById("welcomeMsg");
const collectionLink = document.getElementById("collectionLink");
const logoutBtn = document.getElementById("logoutBtn");

onAuthStateChanged(auth, (user) => {
    if (user) {
        welcomeMsg.textContent = `Welcome back, ${user.email}!`;
        collectionLink.style.display = "block";
        logoutBtn.style.display = "block";
    } else {
        welcomeMsg.textContent = "Welcome to PokeWorld! Create an account and open packs to collect all 151 original Pokémon!";
        collectionLink.style.display = "none";
        logoutBtn.style.display = "none";
    }
});

logoutBtn.addEventListener("click", async () => {
    await signOut(auth);
    window.location.reload();
});
