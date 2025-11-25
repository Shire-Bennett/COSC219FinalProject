
const signupForm = document.getElementById("signupForm");

// SIGN UP
document.getElementById("signupForm").addEventListener("submit", async (e) => {
    e.preventDefault();

    const email = document.getElementById("signupEmail").value.trim();
    const password = document.getElementById("signupPassword").value.trim();

    if (!email.includes("@")) return alert("Enter a valid email");
    if (password.length < 6) return alert("Password must be at least 6 characters");

    try {
        await firebase.auth().createUserWithEmailAndPassword(email, password);
        alert("Account created! 🎉");
        window.location.href = "index.html";
    } catch (error) {
        alert(error.message);
    }
});

// LOG IN
document.getElementById("loginForm").addEventListener("submit", async (e) => {
    e.preventDefault();

    const email = document.getElementById("loginEmail").value.trim();
    const password = document.getElementById("loginPassword").value.trim();

    try {
        await firebase.auth().signInWithEmailAndPassword(email, password);
        alert("Logged in!");
        window.location.href = "index.html";
    } catch (error) {
        alert(error.message);
    }
});


