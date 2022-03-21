import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.9/firebase-app.js";
import { getAuth, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.6.9/firebase-auth.js";

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

const correo = document.getElementById("correo_login")
const contraseña = document.getElementById("password")
const formulario = document.getElementById("formularioInicioSesion")
const textoErrorCorreo = document.getElementById("advertenciaCorreo")
const textoErrorPass = document.getElementById("advertenciaContraseña")
const botonInicioSesion = document.getElementById("botonIniciarSesion")

const esEmailValido = (email) => {
  const expRegular = /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/;
  return expRegular.test(email.toLowerCase());
}
let advertenciaCorreoLogin = ""
let advertenciaPasswordLogin = ""
textoErrorCorreo.innerHTML = ""
textoErrorPass.innerHTML = ""

formulario.addEventListener("submit", e=>{
  e.preventDefault()
  if(contraseña.value !== "" && contraseña.value.length > 5 && esEmailValido(correo.value)){
    signInWithEmailAndPassword(auth, correo.value, contraseña.value)
    .then((userCredential) => {
      const user = userCredential.user;
      console.log(user)
      formulario.reset()
      alert("Has ingresado con éxito.")
      location.href = "usuario.html"
    })
    .catch((error) => {
      alert("Autenticación incorrecta.")
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorCode)
      console.log(errorMessage)
      formulario.reset()
    });
  }
});

formulario.addEventListener("keyup", ()=>{
    if(contraseña.value === "" || contraseña.value.length < 6 || !esEmailValido(correo.value)){
      botonInicioSesion.disabled = true;
    }else{
      botonInicioSesion.disabled = false;
  }
});

formulario.addEventListener("change", ()=>{
  if (correo.name === "correo_login") {
    if(correo.value.length > 0 && !esEmailValido(correo.value)){
      advertenciaCorreoLogin = `El correo no es valido. <br>`
      textoErrorCorreo.innerHTML = advertenciaCorreoLogin
    }else{
      textoErrorCorreo.innerHTML = ""
    }
  };

  if (contraseña.name === "password") {
    if(contraseña.value.length > 0 && contraseña.value.length < 6){
      advertenciaPasswordLogin = `La contraseña debe tener al menos 6 dígitos. <br>`
      textoErrorPass.innerHTML = advertenciaPasswordLogin
    }else{
      textoErrorPass.innerHTML = ""
    }
  };
});
