const arr = [
  "Frodo",
  "Sam",
  "Merry",
  "Pippin",
  "Gandalf",
  "Aragorn",
  "Legolas",
  "Gimli",
];
console.log(arr);

//push - adicionar no final do array
let tamanho = arr.push("Boromir");
console.log(arr);
console.log(tamanho);

//unshift - adicionar elementos no começo
tamanho = arr.unshift("Boromir");
console.log(arr);
console.log(tamanho);

//pop - remover elementos no final do array
let ultimoElemento = arr.pop();
console.log(arr);
console.log(ultimoElemento);

//shift - remover elementos no começo

ultimoElemento = arr.shift();
console.log(arr);
console.log(ultimoElemento);

//includes - pesquisar elementos
const inclui = arr.includes("Gandalf");
console.log(inclui);

// indexOf - identificar o índice do elemento

const indice = arr.indexOf("Gandalf");
console.log(indice);

//slice - criar cópia de uma parte do array e salvasse em um novo
const hobbits = arr.slice(0, 4);
const outros = arr.slice(-4);
console.log(arr);
console.log(hobbits);
console.log(outros);

//concat - concatenar arrays

const sociedade = hobbits.concat(outros, "Boromir");
console.log(sociedade);

//splice - remove um grupo de elementos e substitui por outros
const elementosRemovidos = sociedade.splice(indice, 1, "Harry Potter o maior");
console.log(sociedade);
console.log(elementosRemovidos);

// iterar sobre os elementos
for (let indice = 0; indice < sociedade.length; indice++) {
  //length - comprimento do array
  const elemento = sociedade[indice];
  console.log(elemento + "se encontra na posição " + indice);
}
