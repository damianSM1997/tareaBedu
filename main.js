
/**
 * deepEqual
 */
function deepEqual(a,b) {  
   if(Object.keys(a).length !== Object.keys(b).length){ 
     return false;
   }
   if(typeof(a) === typeof(b)){
   for( const key1 in a){  
        if(a[key1] !== b[key1]){
          return false;
        }
     }
   }

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
  var res = [];
  for (let i = 0; i < array.length; i += size) {
    res.push(array.slice(i, i + size));    
  }
  return res;
}

let data = [1,2,3,4,5,6,7,8,9];
console.log('Test 1: ' , chunck(data, 1));
console.log('Test 2: ' , chunck(data, 2));
console.log('Test 3: ' , chunck(data, 3));


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

 

