import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.9/firebase-app.js";
import { getAuth, signOut, onAuthStateChanged  } from "https://www.gstatic.com/firebasejs/9.6.9/firebase-auth.js";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD7skVhq6lYtEUqs1VYoKsvYaM8dg0VOvA",
  authDomain: "programacion-web-46a79.firebaseapp.com",
  databaseURL: "https://programacion-web-46a79-default-rtdb.firebaseio.com",
  projectId: "programacion-web-46a79",
  storageBucket: "programacion-web-46a79.appspot.com",
  messagingSenderId: "135786747784",
  appId: "1:135786747784:web:290fb28e0d523d1e2d4c3d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)

const botonCerrarSesion = document.getElementById("cerrarSesion")

botonCerrarSesion.addEventListener("click", () =>{
  signOut(auth).then(() => {
    location.replace("../index.html")
  }).catch(() => {
    alert("intente cerrar sesión de nuevo por favor");
  });
});

onAuthStateChanged(auth, (user) => {
  if (!user) {
    location.replace("inicioSesion.html")
  } 
});
