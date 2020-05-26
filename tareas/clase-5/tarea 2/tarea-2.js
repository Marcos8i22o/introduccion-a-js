//TAREA: En otro archivo html (no Index) y otro archivo js (no tarea-clase-5.js),
// creá un formulario que capture el primer nombre, segundo nombre, apellido/s y edad del usuario
// también vamos a crear un <h1> que diga Bienvenido!
// vas a crear un botón de acción que una vez que lo apretás, va a
// mostrar toda la información junta en un campo de texto
// Y va a cambiar el <h1> para decir "Bienvenido, nombreDeUsuario"!

/*
Ejemplo form:
  <form id="entrada-bar" onsubmit="return false;">
    <input type="text" placeholder="Ingresá tu nombre" id="nombre-usuario"/>
    <input type="number" placeholder="Ingresá tu edad" id="edad-usuario" />
    <input type="submit" value="Ingresar" id="ingresar"/>
  </form>

  <div id="resultado">Hola</div>
*
* */


const primerNombre = '';
const segundoNombre = '';
const apellido = '';
const edad = '';
const resultado = '';


const $botonResultados = document.querySelector('#resultados');

$botonResultados.onclick = function () {

  document.querySelector('#datos-usuario').textContent = obtenerDatosUsuario(primerNombre, segundoNombre, apellido, edad, resultado);
  
  validarNombre(primerNombre);
  validarNombre(segundoNombre);
  validarNombre(apellido);
  validarEdad(edad);
  
  mostrarCartelBienvenida();

  return false;
}


function obtenerDatosUsuario(primerNombre,segundoNombre,apellido,edad,resultado){
  //Guarda nombre-usuario
  primerNombre = document.querySelector('#primer-nombre').value;
  
  //Si el campo segundo-nombre contiene un valor, se guarda
  
  if (document.querySelector('#segundo-nombre').value != '') {
    segundoNombre = document.querySelector('#segundo-nombre').value;
  } 

  //Guarda apellido-usuario
  apellido = document.querySelector('#apellido').value;
  //Guarda edad-usuario
  edad = Number(document.querySelector('#edad').value);
  

  resultado = `${primerNombre} ${segundoNombre} ${apellido} - ${edad} años`;
  
  return resultado;
}

function mostrarCartelBienvenida() {
  const nombreUsuario = document.querySelector('#primer-nombre').value;
  document.querySelector('h1').className = '';
  document.querySelector('h1').textContent = `Bienvenido, ${nombreUsuario}!`;
  
}

//Validaciones

function validarNombre(nombre) {
  if (nombre.length === 0) {
    return "Este campo debe tener al menos un caracter";
  }

  if (nombre.length >= 50) {
    return "Este campo debe tener menos de cincuenta caracteres";
  }


  return '';
}


function validarEdad(edad) {
  if (edad <= 0) {
    return "Por favor, ingrese un número válido";
  }


  return '';
}