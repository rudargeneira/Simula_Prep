// La función llamada 'pluck' recibe como argumento un array de objetos llamado 'array' y el nombre de una
  // propiedad.
  // La función debe devolver un nuevo arreglo con solo los valores dentro de la propiedad recibida
  // Ej:
  // var productos = [{ name: 'TV LCD', price: 100}, { name: 'Computadora', price: 500 }]
  // productos.pluck(productos, 'name') debería devolver ['TV LCD', 'Computadora']
  // Pista: es una buena oportunidad para usar map.

  var productos = [{ name: 'TV LCD', price: 100}, { name: 'Computadora', price: 500 }]
   var propiedad="NUEVA PROPIEDAD";
    var narray=[];
      
      for(k in productos){
      narray.push(productos[k].name);
    }
// EJEMPLO HECHO CON ASIGNACION DE EL VALOR A LA POSICION DEL NUEVO ARRAY
console.log("EJEMPLO CONVENCIONAL---------------------------------------");
console.log(narray);

 ///-----------Ejemplo con map------------------------------------------------------------------


 var nuevo_arreglo=productos.map(productos=>productos.name);
 nuevo_arreglo.push(propiedad);
 console.log("---------------SALIDA CON LA FUNCION MAP()---------------------------");
 console.log(nuevo_arreglo);