let listaContactos = ["JUAN PEREZ", "JULIANA TAMAYO", "ANDRES RESTREPO"];

function agregarNuevoContacto(nombreApellido){
  let nombreApellidoMay =nombreApellido.toUpperCase();
  //console.log(nombreApellido)
  listaContactos.push(nombreApellidoMay);
  
}

function borrarContacto(nombre){
  let nombreMay = nombre.toUpperCase();
  const index = listaContactos.indexOf(nombreMay);
  listaContactos.splice(index,1);
}

function imprimirContactos(){
  console.log(listaContactos)
}