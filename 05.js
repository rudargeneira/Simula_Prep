/* 
  Importante: 
  No modificar ni el nombre ni los argumetos que reciben las funciones, sólo deben escribir
  código dentro de las funciones ya definidas. 
  No comentar la funcion 
*/
function pluck(array, propiedad) {
  // La función llamada 'pluck' recibe como argumento un array de objetos llamado 'array' y el nombre de una
  // propiedad.
  // La función debe devolver un nuevo arreglo con solo los valores dentro de la propiedad recibida
  // Ej:
  // var productos = [{ name: 'TV LCD', price: 100}, { name: 'Computadora', price: 500 }]
  // productos.pluck(productos, 'name') debería devolver ['TV LCD', 'Computadora']
  // Pista: es una buena oportunidad para usar map.

  // Tu código acá:
  var narray=[];
  

for(k in productos){
  narray.push(productos[k].name);
 }
  console.log(narray);

 ///-----------Ejemplo con map------------------------------------------------------------------


 var nuevo_arreglo=productos.map(productos=>productos.name);
 nuevo_arreglo.push(propiedad);
 console.log("---------------SALIDA CON LA FUNCION MAP()---------------------------");
 console.log(nuevo_arreglo);


}
// No modifiques nada debajo de esta linea //
module.exports = pluck