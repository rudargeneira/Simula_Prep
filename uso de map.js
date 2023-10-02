// La función llamada 'pluck' recibe como argumento un array de objetos llamado 'array' y el nombre de una
  // propiedad.
  // La función debe devolver un nuevo arreglo con solo los valores dentro de la propiedad recibida
  // Ej:
  // var productos = [{ name: 'TV LCD', price: 100}, { name: 'Computadora', price: 500 }]
  // productos.pluck(productos, 'name') debería devolver ['TV LCD', 'Computadora']
  // Pista: es una buena oportunidad para usar map.

  var productos = [{ name: 'TV LCD', price: 100}, { name: 'Computadora', price: 500 }]
    var propiedad="Computadora";
   // var narray=[];
    var narray=[];
      /* 
      narray.push(1);
      console.log(narray);
       */

      for(k in productos){
      narray.push(productos[k].name);
    }

console.log(narray);

  // ejemplo 1de map-------------------------------------------------------------------------------------------
/*
const numeros = [1, 2, 3, 4, 5];
const numerosDobles = numeros.map(function(numero) {
  return numero * 2;
});
console.log(numerosDobles); // [2, 4, 6, 8, 10]

*/

//ejemplo 2 -------------------------------------------------------------------------------------------------------
/*

var array=["maria","pedro","luis"];

var array1=array.map(function(nombre){
    if(nombre=="luis"){
        return nombre;
        
    }
});
console.log(array1);
--------------------------------------------------------------------------------------------------------------------*/