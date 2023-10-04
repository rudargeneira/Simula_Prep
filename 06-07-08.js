/* 
  Importante: 
  No modificar ni el nombre ni los argumetos que reciben las funciones, sólo deben escribir
  código dentro de las funciones ya definidas. 
  No comentar la funcion 
*/
function crearClasePersona() {
  class Persona {
    constructor(nombre, edad, hobbies, amigos) {
      // El constructor de la clase Persona recibe nombre (string), edad (integer), hobbies (array de strings), amigos (array de objetos)
      // Inicializar las propiedades de la persona con los valores recibidos como argumento

      // Tu código aca:
      // Tu código aca:
      this.nombre=nombre;
      this.edad=edad;
      this.hobbies=[];
      this.amigos=[];
    }
  // FUNCION QUE GUARDA EN UNA PROPIEDAD DE ARREGLOS  
  guardah(valor){
    this.hobbies.push(valor);
  }

// FUNCION PARA AGREGAR ELEMENTOS AL OBJETO
elemOb(ele){
  this.amigos.push(ele);
 
}
}

// --------------------creo mi instancia de clase------------------------------------------
var miClaseDeArreglos=new Persona("pedro",45);
// llamo mi funcion para ingresar en la propiedad arreglos
miClaseDeArreglos.guardah("Soccer");
miClaseDeArreglos.guardah("golf");  

// lleno mi arreglo de objetos
var o1={Nombre:"Juan",Telf:0414758774};
miClaseDeArreglos.elemOb(o1);
console.log(miClaseDeArreglos);

}

    addFriend(nombre, edad) {
      // El método 'addFriend' recibe un string 'nombre' y un entero 'edad' y debe agregar un objeto:
      // { nombre: nombre, edad: edad} al arreglo de amigos de la persona.
      // No debe retornar nada.

      // Tu código aca:
      var a1={Nombre:nombre,Edad:edad};
         miClaseDeArreglos.elemOb(a1);

    }

    addHobby(hobby) {
      // El método 'addHobby' recibe un string 'hobby' y debe agregarlo al arreglo de hobbies de la persona.
      // No debe retornar nada.

      // Tu código aca:
      miClaseDeArreglos.guardah(hobby);

    }
    getFriends() {
      // El método 'getFriends' debe retornar un arreglo con sólo los nombres del arreglo de amigos
      // de la persona.
      // Ej:
      // Suponiendo que la persona tiene estos amigos: [{nombre: 'martin', edad: 31},{nombre: 'toni', edad: 33}]
      // persona.getFriends() debería devolver ['martin', 'toni']

      // Tu código aca:
      miClaseDeArreglos.amigos.forEach(amigos => console.log(amigos.Nombre));

    }

    getHobbies() {
      // El método 'getHobbies' debe retornar un arreglo con los hobbies de la persona
      // Ej:
      // persona.getHobbies() debe devolver ['correr', 'dormir', 'nadar']

      // Tu código aca:
      miClaseDeArreglos.hobbies.forEach(hobbies=>console.log(hobbies));

    }

    getPromedioEdad() {
      // El método 'getPromedioEdad' debe retornar el promedio de edad de los amigos de una persona
      // Ej:
      // Si la persona tuviera estos amigos:
      // {
      //   amigos: [{
      //     nombre: 'toni',
      //     edad: 33,
      //   }, {
      //     nombre: 'Emi',
      //     edad: 25
      //   }]
      // }
      // persona.getPromedioEdad() debería devolver 29 ya que (33 + 25) / 2 = 29

      // Tu código aca:

    
    var ae=0;
    miClaseDeArreglos.amigos.forEach(amigos=>ae=(ae+amigos.Edad)/2);
    
    
    console.log("imprime El Promedio de Edad---->>",ae);
    console.log("--------------------------------------------")
    
          

  return Persona;

    }
// No modifiques nada debajo de esta linea //

module.exports = crearClasePersona