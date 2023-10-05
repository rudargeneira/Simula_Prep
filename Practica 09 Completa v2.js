// Escribi una función filtrar en el prototipo de Arrays,
  // que recibe una funcion (callback) que devuelve true o false.
  // filtrar los elementos de ese arreglo en base al resultado de esa funcion
  // comparadora, devolver un nuevo arreglo con los elementos filtrados.
  // NO USAR LA FUNCION FILTER DE LOS ARREGLOS.
  // ej:
  //  productos.filtrar(function(p) {
  //   return p.price >= 50;
  // }) => [{price: 100, name:'tv'}]
  var productos = [{ price: 100, name: 'tv'}, {price: 50,name: 'phone' }, {price: 30,name: 'lamp'}];
  
  var Narray=[];
  
  function filtrar(){
    var r;
    for(var i=0;i<productos.length;i++){
        // console.log(productos[i].price);
          
        if(productos[i].price>=50){
         r="true";
            //console.log(productos[i].price,productos[i].name);
            console.log(productos[i]);
            //console.log(productos[i].name);
     }
 
  }
}
  function PPal(){
        
    if(r="true"){
        filtrar();
     }
 }
 
 PPal();
 