/* EEJEMPOLO DE FUNCION BASICA 
var array=[];

function v(a){
     array.push(a);

}

var w=v("pedro");
var w=v("pe");
var w=v("dro");
console.log(array);

*/

/*  EJEMPLO DE GUARDAR ELEMENTO EN UNA PROPIEDAD DE ARREGLOS DE UNA CLASE
class ClaseDeArreglos {
  constructor() {
    this.arreglo = [];
  }

  guardarEnArreglo(valor) {
    this.arreglo.push(valor);
  }
}

// Creamos una instancia de la clase
const miClaseDeArreglos = new ClaseDeArreglos();

// Llamamos al método para guardar un valor en el arreglo
miClaseDeArreglos.guardarEnArreglo("Mi valor");

// Podemos imprimir el arreglo en la consola para verificar que se guardó correctamente
console.log(miClaseDeArreglos.arreglo);
*/





//------------------------VOY AQUI ---------------
class Persona {
    constructor(nombre, edad, hobbies, amigos) {
      // El constructor de la clase Persona recibe nombre (string), edad (integer), hobbies (array de strings), 
       // amigos (array de objetos)
      // Inicializar las propiedades de la persona con los valores recibidos como argumento

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
var o1={Nombre:"Juan",Edad:25};
miClaseDeArreglos.elemOb(o1);
//console.log(miClaseDeArreglos);

// El método 'addFriend' recibe un string 'nombre' y un entero 'edad' y debe agregar un objeto:
      // { nombre: nombre, edad: edad} al arreglo de amigos de la persona.
      // No debe retornar nada.


      var nombre="alix";
      var edad=50;
      var hobby="polo";
      var a1={Nombre:nombre,Edad:edad};
      miClaseDeArreglos.elemOb(a1);


      // El método 'addHobby' recibe un string 'hobby' y debe agregarlo al arreglo de hobbies de la persona.
      // No debe retornar nada.
      // Tu código aca:

      miClaseDeArreglos.guardah(hobby);
      console.log(miClaseDeArreglos);

      // El método 'getFriends' debe retornar un arreglo con sólo los nombres del arreglo de amigos
      // de la persona.
      // Suponiendo que la persona tiene estos amigos: [{nombre: 'martin', edad: 31},{nombre: 'toni', edad: 33}]
      // persona.getFriends() debería devolver ['martin', 'toni']

    
      //console.log(miClaseDeArreglos);

      
        // console.log(miClaseDeArreglos.nombre);
       //  console.log(miClaseDeArreglos.amigos);
         

        // Imprimir solo el valor "nombre" de cada objeto dentro del arreglo
        console.log("Imprimir solo el valor nombre de cada objeto dentro del arreglo");
        miClaseDeArreglos.amigos.forEach(amigos => console.log(amigos.Nombre));

      
      // El método 'getHobbies' debe retornar un arreglo con los hobbies de la persona
    
      // persona.getHobbies() debe devolver ['correr', 'dormir', 'nadar']
      console.log("Imprimir solo el valor hobbies de cada objeto dentro del arreglo");
      miClaseDeArreglos.hobbies.forEach(hobbies=>console.log(hobbies));



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
//      var nuevaInstanciaPersona=new Persona("Alberina",25);
console.log("--------IMPRIME EL PROMEDIO DE EDAD DE LOS AMIGOS-------------")    ;
miClaseDeArreglos.amigos.forEach(amigos=>console.log(amigos.Edad));
var ae=0;
miClaseDeArreglos.amigos.forEach(amigos=>ae=(ae+amigos.Edad)/2);


console.log("imprime El Promedio de Edad---->>",ae);
console.log("--------------------------------------------")

      
    