import { changeColors, changeTextAndColor, pause } from './Helpers'

export default async function insertionSort(array, speed) {
    let arrayBars = document.getElementsByClassName('array_bar');

    for (let i = 0; i < array.length; i++) {
        arrayBars[i].style.backgroundColor = '#f57c00';
        await pause(speed);
        let keyIndex = i;
        for (var j = i - 1; j >= 0; j--) {
          if (array[j] > array[keyIndex]) {
            let val1 = array[j], val2 = array[keyIndex]
            changeTextAndColor(arrayBars[j], arrayBars[keyIndex], val2, val1, '#ab47bc');
            await pause(speed);
            swap(array, j, keyIndex);
            changeTextAndColor(arrayBars[j], arrayBars[keyIndex], val1, val2, '#f57c00');
            keyIndex = j;
          } else {
            break;
          }
        }
        arrayBars[i].style.backgroundColor = '#f57c00';
      }
}

function swap(array, i, j) {
	let temp = array[j]
	array[j] = array[i]
	array[i] = temp;
}