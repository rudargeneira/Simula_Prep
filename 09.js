/* 
  Importante: 
  No modificar ni el nombre ni los argumetos que reciben las funciones, sólo deben escribir
  código dentro de las funciones ya definidas. 
  No comentar la funcion 
*/
function filtrar(funcion) {
  // Escribi una función filtrar en el prototipo de Arrays,
  // que recibe una funcion (callback) que devuelve true o false.
  // filtrar los elementos de ese arreglo en base al resultado de esa funcion
  // comparadora, devolver un nuevo arreglo con los elementos filtrados.
  // NO USAR LA FUNCION FILTER DE LOS ARREGLOS.
  // ej:
  // var productos = [{price: 100,name: 'tv' }, { price: 50, name: 'phone' }, { price: 30, name: 'lamp' }]
  // productos.filtrar(function(p) {
  //   return p.price >= 50;
  // }) => [{price: 100, name:'tv'}]


  function verifica(){
    // aqui inprio todo el arreglo
     //resp=console.log(productos);
    var respuesta;
    var nuevo_arreglo=[];
     // aqui recorro el arreglo 
    for(var i=0;i<productos.length;i++ ){
        // aqui imprimo todos los precios 
       // var imp=console.log(productos[i].price);
            
        if(productos[i].price>=50){
         //console.log("Existe al menos 1 elemento");  
        /* aqui muestro cada producto con su precio igual a mayor a lo requerido
         console.log(productos[i].name);
         console.log(productos[i].price) */
        
         nuevo_arreglo.push(productos[i].price,productos[i].name);
         
        }
    }
    console.log(nuevo_arreglo);
  }

function PPal (verifica){
       
}



console.log(PPal(verifica()));


};

// No modifiques nada debajo de esta linea //

module.exports = filtrar