# Postwork 
Postwork 1

Equipo numero 20

Integrantes:
- Jorge Ivan Gutierrez Yañez
- Diana Yesenia Campos Tenorio
- Daniel Rodríguez López
- Anahi Camas Hernández 
- Damian Susano Martinez 



## Ejercicio 1

```javascript
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

```
![imgGitHub](https://github.com/damianSM1997/tareaBedu/blob/master/img/ejercicio1.png)

## Ejercicio 2

```javascript
function chunck(array, size){
  var res = [];
  for (let i = 0; i < array.length; i += size) {
    res.push(array.slice(i, i + size));    
  }
  return res;
}

var data = [1,2,3,4,5,6,7,8,9];

console.log('Test 1:', chunk(data, 1)) // [[1], [2], [3], [4], [5], [6], [7], [8]]
console.log('Test 2:', chunk(data, 2)) // [[1, 2], [3, 4], [5, 6], [7, 8]]
console.log('Test 3:', chunk(data, 3)) // [[1, 2, 3], [4, 5, 6], [7, 8]]
```

![imgGitHub](https://github.com/damianSM1997/tareaBedu/blob/master/img/ejercicio2.png)

## Ejercicio 3

opción 1

```javascript

function frequency(string) {
  var obj ={};
  var caracter;
  var contador = 0;
  var array = Array.from(string);
  var arrayOrd = array.sort();
  for (var i = 0; i < arrayOrd.length; i++) {
      caracter = arrayOrd[i];
      for (let j = 0; j < arrayOrd.length; j++) {
        if(arrayOrd[j] === caracter){
          contador ++;
        }
      }
     
      obj [arrayOrd[i]] = contador;
      
      contador = 0;
  }
  return obj;
}

console.log('Test 1:', frequency('cccbbbaaa'))
// {a: 3, b: 3, c: 3}
console.log('Test 2:', frequency('www.bedu.org'))
// {.: 2, b: 1, d: 1, e: 1, g: 1, o: 1, r: 1, u: 1, w: 3}
console.log('Test 3:', frequency('john.doe@domain.com'))
// {.: 2, @: 1, a: 1, c: 1, d: 2, e: 1, h: 1, i: 1, j: 1, m: 2, n: 2, o: 4}
```

![imgGitHub](https://github.com/damianSM1997/tareaBedu/blob/master/img/ejercicio3.png)


opción 2
```javascript
function frequency(string) {
  var cadena = [];
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
    if(arrayOrd[i+1] !== arrayOrd[i]){      
      cadena.push(arrayOrd[i], contador)
    }
    contador = 0;
  }  
  return cadena;
}

console.log('Test 1:', frequency('cccbbbaaa'))
// {a: 3, b: 3, c: 3}
console.log('Test 2:', frequency('www.bedu.org'))
// {.: 2, b: 1, d: 1, e: 1, g: 1, o: 1, r: 1, u: 1, w: 3}
console.log('Test 3:', frequency('john.doe@domain.com'))
// {.: 2, @: 1, a: 1, c: 1, d: 2, e: 1, h: 1, i: 1, j: 1, m: 2, n: 2, o: 4}
```
