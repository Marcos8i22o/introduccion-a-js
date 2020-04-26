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


const $botonResultados = document.querySelector('#resultados');

$botonResultados.onclick = function(){
 
  document.querySelector('#datos-usuario').value = obtenerDatosUsuario();
  
  mostrarCartelBienvenida();
  
  return false;
}


function obtenerDatosUsuario(){
  //Guarda nombre-usuario
  const primerNombre = document.querySelector('#primer-nombre').value;
  
  //Si el campo segundo-nombre contiene un valor, se guarda
  let segundoNombre = '';
  if (document.querySelector('#segundo-nombre').value != '') {
    segundoNombre = document.querySelector('#segundo-nombre').value;
  } 

  //Guarda apellido-usuario
  const apellido = document.querySelector('#apellido').value;
  //Guarda edad-usuario
  const edad = Number(document.querySelector('#edad').value);

  const resultado = `${primerNombre} ${segundoNombre} ${apellido} - ${edad} años`;
  
  return resultado;
}

function mostrarCartelBienvenida() {
  const nombreUsuario = document.querySelector('#primer-nombre').value;
  document.querySelector('h1').className = '';
  document.querySelector('h1').textContent = `Bienvenido, ${nombreUsuario}!`;
  
}