public class ClaseDeArregloDeObjetos {
    private Objeto[] arreglo;

    public ClaseDeArregloDeObjetos(int longitud) {
        arreglo = new Objeto[longitud];
    }

    public void guardarEnArreglo(int indice, Objeto objeto) {
        arreglo[indice] = objeto;
    }
}

// Creamos una instancia de la clase
ClaseDeArregloDeObjetos miClaseDeArregloDeObjetos = new ClaseDeArregloDeObjetos(3);

// Creamos un objeto para guardar en el arreglo
Objeto miObjeto = new Objeto("Mi objeto");

// Llamamos al método para guardar el objeto en el arreglo
miClaseDeArregloDeObjetos.guardarEnArreglo(1, miObjeto);
