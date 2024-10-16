// 1. Función flecha para calcular el área de un rectángulo
const rectangleArea = (length, width) => length * width;
console.log(rectangleArea(5, 3)); 

// 2. Función flecha para devolver un saludo personalizado
const greet = (nombre) => `Hola, ${nombre}!`;
console.log(greet("Carlos")); 

// 3. Función flecha para combinar dos arreglos utilizando el operador spread
const mergeArray = (arr1, arr2) => [...arr1, ...arr2];
console.log(mergeArray([1, 2], [3, 4])); 

// 4. Función flecha para sumar dos números y agregar el resultado a los elementos adicionales
const ducplicateAndSum = (a, b, ...numeros) => {
  const suma = a + b; 
  return numeros.map((numero) => numero + suma); 
};
console.log(ducplicateAndSum(2, 3, 4, 5, 6)); 

// 5. Función para crear un Set con números únicos y devolver su tamaño
const setExercise = () => {
  const numeros = new Set([1, 2, 2, 3, 4, 4, 5]); 
  return numeros.size; 
};
console.log(setExercise()); 

// 6. Modificar y eliminar entradas en un Map
const miMapa = new Map();
miMapa.set("nombre", "Juan");
miMapa.set("edad", 30);
miMapa.set("profesion", "Desarrollador");

const mapExercise = () => {
  miMapa.set("profesion", "Ingeniero de Software"); 
  miMapa.delete("edad"); 
  
  return miMapa; 
};


// 7. Función para contar la frecuencia de caracteres en una cadena usando un Map
const countRepeated = (string) => {
  const count = new Map();

  for (let i = 0; i < string.length; i++) {
    const item = string[i];
    let counter = 0;

    if (count.has(item)) {
      counter = count.get(item) + 1
    } else {
      counter = 1;
    }

    count.set(item, counter);
  }
  return count;
};