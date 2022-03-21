import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.9/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword  } from "https://www.gstatic.com/firebasejs/9.6.9/firebase-auth.js";

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

const correo = document.getElementById("correo_registro")
const contraseña = document.getElementById("contrasena")
const form = document.getElementById("formulario_registro")
const textoErrorEmail = document.getElementById("advertenciaEmail")
const textoErrorPassword = document.getElementById("advertenciaPassword")
const botonRegistrar = document.getElementById("boton_registrar")

const esEmailValido = (email) => {
  const expRegular = /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/;
  return expRegular.test(email.toLowerCase());
}
let advertenciaEmail = ""
let advertenciaPassword = ""
textoErrorEmail.innerHTML = ""
textoErrorPassword.innerHTML = ""

form.addEventListener("submit", e=> {
  e.preventDefault()
  if(contraseña.value !== "" && contraseña.value.length > 5 && esEmailValido(correo.value)){
    createUserWithEmailAndPassword(auth, correo.value, contraseña.value)
    .then((userCredential) => {
      const user = userCredential.user;
      console.log(user)
      form.reset()
      alert("Te ha registrado con éxito.")
      location.href = "html/inicioSesion.html"
    })
    .catch((error) => {
      alert("No cumple con los requisitos para registrarse.")
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorCode)
      console.log(errorMessage)
      form.reset()
    });
  }
});

form.addEventListener("keyup", ()=>{
    if(contraseña.value === "" || contraseña.value.length < 5 || !esEmailValido(correo.value)){
      botonRegistrar.disabled = true;
    }else{
      botonRegistrar.disabled = false;
  }
});

form.addEventListener("change", ()=>{
  if (correo.name === "correo_registro") {
    if(correo.value.length > 0 && !esEmailValido(correo.value)){
      advertenciaEmail = `El correo no es valido. <br>`
      textoErrorEmail.innerHTML = advertenciaEmail
    }else{
      textoErrorEmail.innerHTML = ""
    }
  };

  if (contraseña.name === "contrasena") {
    if(contraseña.value.length > 0 && contraseña.value.length < 6){
      advertenciaPassword = `La contraseña debe tener al menos 6 dígitos. <br>`
      textoErrorPassword.innerHTML = advertenciaPassword
    }else{
      textoErrorPassword.innerHTML = ""
    }
  };
});
