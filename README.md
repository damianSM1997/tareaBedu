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
