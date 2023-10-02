// La funcion llamada 'soloNumeros' recibe como argumento un arreglo de enteros y strings llamado 'array'.
  // Debe devolver un arreglo con solo los enteros.
  // Ej: 
  // soloNumeros([1, 'Henry', 2]) debe retornar [1, 2]

var array=[1,"pedro",2,"maria"];
var narray=[];
/*--------------------------------------------------
  for (let i = 0; i < array.length; i++) {
    
    if(typeof array[i]=="number"){
     //narray.push=array[i];
     narray[i]=array[i];
     
    }
   //console.log(narray);
   //console.log(typeof array[i]);
      
  }

  for(var i=0;i<array.length;i++){
    console.log(narray[i]);

  }
---------------------------*/
  ////       contar el numero de caracteres de una cadena 
  var s=["pedro","m","este es un ejemplo"];
       
  var may=0; 
  var q; 
       for(var i=0; i<s.length;i++){
        
          if(s[i].length>may){
            may=s[i].length;
            q=s[i];
           
            

          }


        }
        console.log("Esta es la Cadena mas Larga:////",q,"//////con el numero de caracteres:>>>> ",may);
        
        
       