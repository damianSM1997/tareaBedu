# Postwork 
Postwork 1

Equipo numero 

Integrantes:
- Jorge Ivan Gutierrez Yañez
- Diana Yesenia Campos Tenorio
- Daniel Rodríguez López
- Anahi Camas Hernández 
- Damian Susano Martinez 



## Ejercicio 1

```javascript
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


console.log('Test 1:', frequency('cccbbbaaa'))
// {a: 3, b: 3, c: 3}
console.log('Test 2:', frequency('www.bedu.org'))
// {.: 2, b: 1, d: 1, e: 1, g: 1, o: 1, r: 1, u: 1, w: 3}
console.log('Test 3:', frequency('john.doe@domain.com'))
// {.: 2, @: 1, a: 1, c: 1, d: 2, e: 1, h: 1, i: 1, j: 1, m: 2, n: 2, o: 4}
```

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
console.log('Test 1: ' , chunck(data, 1));
console.log('Test 2: ' , chunck(data, 2));
console.log('Test 3: ' , chunck(data, 3));
```

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
      if (arrayOrd[i+1] !== arrayOrd[i]){
          obj [arrayOrd[i]] = contador;
      }
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
