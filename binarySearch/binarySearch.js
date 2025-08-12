//Algoritmo de busqueda usando busqueda binaria

const find_item = (arr, target) => {
  let low = 0;
  let max = arr.length - 1;

  while (low < max) {
    let mid = Math.floor((low + max) / 2);
    if (arr[mid] === target) {
      return mid;
    } else if (arr[mid] < target) {
      low = mid + 1;
    } else {
      max = mid - 1;
    }
  }
  return -1;
};

//Ejemplo de uso
const array = [1, 2, 3, 4, 5, 6]
const target = 5
console.log(find_item(array, target)) // Salida: 4

