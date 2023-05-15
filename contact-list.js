let listaContactos = [];

function agregarNuevoContacto(nombres,apellidos, telefono, ciudad, direccion){
  let nombresMay = nombres.toUpperCase();
  let apellidosMay = apellidos.toUpperCase();
  let objeto = { id: new Date().getTime(),
                 nombres: nombresMay,
                 apellidos: apellidosMay,
                 telefono: telefono,
                 ubicacion: {ciudad: ciudad,
                             direccion: direccion
                            }
                }

  listaContactos.push(objeto);
  
}

function borrarContacto(id){
  const index = listaContactos.findIndex(listaC => listaC.id === id);
  listaContactos.splice(index,1);
}

function imprimirContactos(){
  console.log(listaContactos)
}