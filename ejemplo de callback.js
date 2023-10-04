

function funcionPrincipal(funcionCallback) {
    console.log("Ejecutando la función principal");
   
    funcionCallback();
    
  }
  
  function funcionDeCallback() {
     console.log("Ejecutando la función de callback");
      }
  
  funcionPrincipal(funcionDeCallback);
  