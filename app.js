<!-- app.js -->
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.2.0/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/11.2.0/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyAllWmo_Y0J0u0vlwZ5SzkWxy3TQ0jV8s8",
  authDomain: "lucasstreaming-3b945.firebaseapp.com",
  projectId: "lucasstreaming-3b945",
  storageBucket: "lucasstreaming-3b945.firebasestorage.app",
  messagingSenderId: "99351053114",
  appId: "1:99351053114:web:1010893e0f5fefdc82c603",
  measurementId: "G-7CMGMYMXV1"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// Inscription
document.getElementById("registerForm")?.addEventListener("submit", (e) => {
  e.preventDefault();
  const email = document.getElementById("registerEmail").value;
  const password = document.getElementById("registerPassword").value;
  createUserWithEmailAndPassword(auth, email, password)
    .then(() => alert("Compte créé avec succès !"))
    .catch((error) => alert(error.message));
});

// Connexion
document.getElementById("loginForm")?.addEventListener("submit", (e) => {
  e.preventDefault();
  const email = document.getElementById("loginEmail").value;
  const password = document.getElementById("loginPassword").value;
  signInWithEmailAndPassword(auth, email, password)
    .then(() => {
      alert("Connexion réussie !");
      window.location.href = "dashboard.html";
    })
    .catch((error) => alert(error.message));
});

// Déconnexion
document.getElementById("logoutButton")?.addEventListener("click", () => {
  signOut(auth)
    .then(() => {
      alert("Déconnexion réussie !");
      window.location.href = "index.html";
    })
    .catch((error) => alert(error.message));
});

// Gestion de l'état utilisateur
onAuthStateChanged(auth, (user) => {
  if (!user && window.location.pathname.includes("dashboard.html")) {
    alert("Vous devez être connecté pour accéder à cette page.");
    window.location.href = "login.html";
  }
});
