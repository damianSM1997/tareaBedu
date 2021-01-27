
/**
 * Damian Susano Martinez
 * Jorge Ivan Gutierrez Yañez
 * Diana Yesenia Campos Tenorio
 * Daniel Rodríguez López
 * Anahi Camas Hernández
 */

/**
 * deepEqual
 */
function deepEqual(a,b) {
  //Comparamos si a y b son iguales
  if(a === b){
    return true
  }  

  //Comparamos si a y b son de tipo object
  if(typeof(a) && typeof(b) === 'object'){
    a = changeValue(a)
    b = changeValue(b)

    keys1 = Object.keys(a);
    keys2 = Object.keys(b);

    //Comparamos la longitud de las variables a y b, si la longitud es distinta, retorna false.
    if(keys1.length !== keys2.length){
      return false
    }
    //Se realiza un ciclo para poder interar en los valores de a y compara si los valores coinciden en cada posición
    // con los valores de b.
    for(var key of keys1){
      if( deepEqual(a[key],b[key])){
          return true
      } else {
          return false
      }
    }
  }
  
  //Comparamos si a y b son distintos
   if( a !== b){
    return false
  }
 }

 //Se crea una funcion para cambiar el valor al elemento
 function changeValue(element){
   // Si el valor del elemento es undefined regresa un string
  if (element == undefined){
      return 'undefined'
  }
  // Si el valor del elemento es null o un objeto vacio regresaremos su valor en string 
  else if(element == null || Object.keys(element).length === 0){
      return JSON.stringify(element)
  }
  // Si ninguna de las condiciones anteriores se cumple no realizara ningun cambio a dicho elemento
  else {
      return element
  }
}

var john = {
  firstName: 'John',
  lastName: 'Doe'
}

console.log('Test 1:', deepEqual(1, 1)) // true
console.log('Test 2:', deepEqual(1, '1')) // false
console.log('Test 3:', deepEqual(john, john)) // true
console.log('Test 4:', deepEqual(john, { firstName: 'John', lastName: 'Doe' })) // true
console.log('Test 5:', deepEqual(john, { firstName: 'John' })) // false
console.log('Test 6:', deepEqual(1, {})) // false
console.log('Test 7:', deepEqual(null, {})) // false



/**
 * 
 * chuck
 */
function chunck(array, size){
  // Se crea una variable de tipo objeto para guardar el resultado. 
  var res = [];
  /**
   * Creamos un ciclo en el cual mientras i sea menor a la longitud del arreglo seguira iterando,
   *  "i" aumentando su valor actual más el tamaño del arreglo.
   * 
   * "i += size" se aplica porque asi la siguiente iteración no sera el valor de i + 1
   * la nueva iteración es definida entonces por el valor de lo grande que quieras que sea
   * cada arreglo determinada por el parametro "size".
   * */ 
  for (let i = 0; i < array.length; i += size) {
    /**
     * Se agrega a el arreglo res el valor que hay en el arreglo original("array") y
     * se aplica la funcion slice que genera un nuevo arreglo sin afectar el arreglo original
     * slice toma dos parametros, (inicio, fin) entonces toma el valor que contenga i en ese momento
     * como inicio y el final como "i + size".
     */
    res.push(array.slice(i, i + size));    
  }
  //Retorna como respuesta lo que tenga dentro del arreglo res.
  return res;
}

let data = [1,2,3,4,5,6,7,8,9];
console.log('Test 1: ' , chunck(data, 1));
console.log('Test 2: ' , chunck(data, 2));
console.log('Test 3: ' , chunck(data, 3));


/**
 * frequency
 */
function frequency(string) {
  var obj ={};
  var caracter;
  var contador = 0;
  // Se convierte cada caracter del string en un elemento del arreglo
  var array = Array.from(string);
  // Se ordena el arreglo alfabeticamente
  var arrayOrd = array.sort();
  for (let i = 0; i < arrayOrd.length; i++) {
      caracter = arrayOrd[i];
      for (let j = 0; j < arrayOrd.length; j++) {
        if(arrayOrd[j] === caracter){
          contador ++;
        }
      }
    /* Se asigna como propiedad del objeto el caracter que se está evaluando
       y se le asigna como valor la frecuencia del caracter dentro del arreglo */ 
      obj [arrayOrd[i]] = contador;
      contador = 0;
  }
  return obj;
}


// function frequency(string) {
//   var cadena = [];
//   var caracter;
//   var contador = 0;
//   var array = Array.from(string);
//   var arrayOrd = array.sort();
//   for (let i = 0; i < arrayOrd.length; i++) {
//       caracter = arrayOrd[i];
//       for (let j = 0; j < arrayOrd.length; j++) {
//         if(arrayOrd[j] === caracter){
//           contador ++;
//         }
//       }          
//     if(arrayOrd[i+1] !== arrayOrd[i]){      
//       cadena.push(arrayOrd[i], contador)
//     }
//     contador = 0;
//   }  
//   return cadena;
// }
// cadenaOrdenada = chunck(frequency('john.doe@domain.com'), 2);
// console.log(Object.fromEntries(cadenaOrdenada));

 
 //frequency('john.doe@domain.com')
 //frequency('www.bedu.org')
 //console.log('Test 1:', frequency('cccbbbaaa'));

 

