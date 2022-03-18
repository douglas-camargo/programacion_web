const correo = document.getElementById("correo_login")
const contraseña = document.getElementById("password")
const form = document.getElementById("formularioInicioSesion")
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

form.addEventListener("submit", e=>{
  e.preventDefault()
  if(contraseña.value !== "" && contraseña.value.length > 4 && esEmailValido(correo.value)){
    location.href = "usuario.html"
  }else{
    alert("Autenticación incorrecta.")
  }
});

form.addEventListener("keyup", ()=>{
    if(contraseña.value === "" || contraseña.value.length < 5 || !esEmailValido(correo.value)){
      botonInicioSesion.disabled = true;
    }else{
      botonInicioSesion.disabled = false;
  }
});

form.addEventListener("change", ()=>{
  if (correo.name === "correo_login") {
    if(correo.value.length > 0 && !esEmailValido(correo.value)){
      advertenciaCorreoLogin = `El correo no es valido. <br>`
      textoErrorCorreo.innerHTML = advertenciaCorreoLogin
    }else{
      textoErrorCorreo.innerHTML = ""
    }
  };

  if (contraseña.name === "password") {
    if(contraseña.value.length > 0 && contraseña.value.length < 5){
      advertenciaPasswordLogin = `La contraseña debe tener al menos 5 dígitos. <br>`
      textoErrorPass.innerHTML = advertenciaPasswordLogin
    }else{
      textoErrorPass.innerHTML = ""
    }
  };
});
