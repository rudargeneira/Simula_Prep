 // La funcion llamada 'buscarAmigo' recibe como argumento un array llamado 'amigos' que contiene
  // en cada posición del arreglo un objeto que tiene como propiedades 'nombre' y 'edad'. También
  // recibe un string llamado 'nombre'.
  // Debe devolver el objeto cuya propiedad 'nombre' coincida con el string 'nombre' recibido por argumento.
  // Ej:
  //  var amigos = [{ nombre: 'toni', edad: 33 } , { nombre: 'Emi', edad: 25 }];
  //  buscarAmigo(amigos, 'toni') debe devolver { nombre: 'toni', edad: 33 };

  var amigos=[{nombre:"pedro",edad:35},{ nombre: 'toni', edad: 33 } , { nombre: 'Emi', edad: 25 }];
  var nombre="ped";



 for (const key in amigos) {
            
      if(amigos[key].nombre==nombre){
          console.log("encontrado");
          console.log("---------------este es el valor que solicito mostrar     -------------")
          console.log(amigos[key]);

      }
      else console.log("----NOMBRE NO ESTA REGISTRADO----")
      break;

   
 }

          


  