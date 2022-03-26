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
    console.log("se ha cerrado sesión");
    location.replace("../index.html")
  }).catch((error) => {
    console.log(error);
  });
});

onAuthStateChanged(auth, (user) => {
  if (user) {
    const uid = user.uid;
    console.log(uid);
    console.log("signin");
  } else {
    console.log("signout");
    location.replace("inicioSesion.html")
  }
});


window.addEventListener('haschange', function(){
  console.log('location changed!');
})
