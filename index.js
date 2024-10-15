const rectangleArea = (largo, ancho) => {
  return largo * ancho;
};

const greet = (nombre) => {
  return `Hola, ${nombre}!`
};

const mergeArray = (arr1, arr2) => {
  return arr1 = [...arr1, ...arr2];
};

const ducplicateAndSum = (a, b, ...numeros) => {
  const suma = a + b;
  return numeros.map((numero) => numero + suma);
};

const setExercise = () => {
  const numbers = new Set([1,1,2,3,4,4,5,5]);
   return numbers.size;

};

const miMapa = new Map();
miMapa.set("nombre", "Juan");
miMapa.set("edad", 30);
miMapa.set("profesion", "Desarrollador");


const mapExercise = () => {
  miMapa.set("profesion", "Ingeniero de Software");
  miMapa.delete("edad");
  return miMapa;
};



const countRepeated = (string) => {
  const charCountMap = new Map();

  for (let char of string) {
    if (charCountMap.has(char)) {
      charCountMap.set(char, charCountMap.get(char) + 1)
    } else {
      charCountMap.set(char, 1);
    }
  }

  return charCountMap;
};
