const rectangleArea = (largo, ancho) => largo*ancho;

const greet = (nombre) => `Hola, ${nombre}!`;

const mergeArray = (arr1, arr2) => [...arr1, ...arr2]

const ducplicateAndSum = (a, b, ...numeros) => {
  const suma = a + b;
  return numeros.map((numero) => numero + suma);
}

const setExercise = () => {
  const set = new Set([1,2,3,3,4,4,4,5,5,5]);
  const finalSet = new Set();

  set.array.forEach(element => {
    if (!finalSet.has(element)) {
      finalSet.add(element);
    }
  });

  return finalSet.size;
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
  /* Añade tu código aquí */
};
