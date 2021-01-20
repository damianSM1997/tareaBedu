
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
  //se compara la longitud a y b y si es distinto retorna false
   if(Object.keys(a).length !== Object.keys(b).length){ 
     return false;
   }
   //checa si a y b son objetos
   if(typeof(a) === typeof(b)){
    //se hace un ciclo para poder interar en los balores de a o en en la posision key1
   for( const key1 in a){  
        if(a[key1] !== b[key1]){
          return false;
        }
     }
   }
   // si pasa los dos filtros quiere desir que son iguales
   return true;
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


/**
 * 
 * chuck
 */
function chunck(array, size){
  // se crea una variable tipo objeto para cuardar el resultado
  var res = [];
  /**
   * el ciclo dice que mientras i sea menor a la longitud del areglo entonces seguira,
   *  "i" aumentara su valor actual mas lo grande que desea ser el areglo
   * */ 
  for (let i = 0; i < array.length; i += size) {
    /**
     * se agrega a el areglo el valor que hay en el areglo original("array") de dicho areglo se
     * le aplica la funcion slice que genera un nuevo areglo sin afectar el areglo original
     * slice toma dos parametros, (inicio, fin) entonces toma el valor que contenga i en ese momento
     * como inicio y el final como el valor que tenga i en ese momento + lo grande del areglo
     * 
     * "i += size" se aplica porque asi la siguiente interacion no sera el valor de i + 1
     * la nueva interacion es definida entonces por elvalor de lo grande que quieras que sea
     * cada areglo determinada por el parametro "size"
     */
    res.push(array.slice(i, i + size));    
  }
  //retorna como respuesta lo que tenga dentro del arrar res
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
  var array = Array.from(string);
  var arrayOrd = array.sort();
  for (let i = 0; i < arrayOrd.length; i++) {
      caracter = arrayOrd[i];
      for (let j = 0; j < arrayOrd.length; j++) {
        if(arrayOrd[j] === caracter){
          contador ++;
        }
      }
      if (arrayOrd[i+1] !== arrayOrd[i]){
          obj [arrayOrd[i]] = contador;
      }
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

 

