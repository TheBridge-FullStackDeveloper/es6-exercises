const rectangleArea = (largo, ancho) => ancho * largo;

const greet = (nombre) => `Hola, ${nombre}!`;

const mergeArray = (arr1, arr2) => [...arr1, ...arr2];

const ducplicateAndSum = (a, b, ...rest) => {
  const suma = a + b;
  return rest.map((numero) => numero + suma);
};

const setExercise = () => {
  const mySet = new Set([1,2,4,2,3,4,2,5])
  return mySet.size
};

const miMapa = new Map();
miMapa.set("nombre", "Juan");
miMapa.set("edad", 30);
miMapa.set("profesion", "Desarrollador");

const mapExercise = () => {
  miMapa.set("profesion", "Programador");
  miMapa.delete("edad"); 

  return miMapa
};

const countRepeated = (string) => {
  /* Añade tu código aquí */
};
