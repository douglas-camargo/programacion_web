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

form.addEventListener("submit", e=>{
  e.preventDefault()
  if(contraseña.value !== "" && contraseña.value.length > 4 && esEmailValido(correo.value)){
    location.href = "html/inicioSesion.html"
    alert("Te ha registrado con éxito.")
    form.reset()
  }else{
    alert("No cumple con los requisitos para registrarse.")
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
    if(contraseña.value.length > 0 && contraseña.value.length < 5){
      advertenciaPassword = `La contraseña debe tener al menos 5 dígitos. <br>`
      textoErrorPassword.innerHTML = advertenciaPassword
    }else{
      textoErrorPassword.innerHTML = ""
    }
  };
});
