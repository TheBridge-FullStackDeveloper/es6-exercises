const rectangleArea = (largo, ancho) => largo * ancho;

const greet = (nombre) => `Hola, ${nombre}!`;

const mergeArray = (arr1, arr2) => [...arr1, ...arr2];

const ducplicateAndSum = (a, b, ...numeros) => {
  const suma = a + b;
  return numeros.map((numero) => numero + suma);
};

const setExercise = () => {
  /* Añade tu código aquí */
  const miSet = new Set([1, 2, 2, 3, 3, 4, 5]);
  return miSet.size 
};

const miMapa = new Map();
miMapa.set("nombre", "Juan");
miMapa.set("edad", 30);
miMapa.set("profesion", "Desarrollador");

const mapExercise = () => {
  /* Añade tu código aquí */
  miMapa.set("profession", "Ingeniero de Software");
  miMapa.delete("edad");
  return miMapa
};

const countRepeated = (string) => {
  /* Añade tu código aquí */
  const repeat = new Map();
  //for(i=0; i<string.length; i++){}
};
