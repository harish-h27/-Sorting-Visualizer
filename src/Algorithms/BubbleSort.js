
import { changeColors, changeTextAndColor, pause } from './Helpers'

export default async function(array, speed) {
    let len = array.length - 1;
    for(var i = 0; i < array.length; i++){
        let arrayBars = document.getElementsByClassName('array_bar');
        for(var j = 0; j < ( array.length - i -1 ); j++){
            changeColors(arrayBars[j], arrayBars[j + 1], '#66bb6a');
            await pause(speed);
            if (array[j] > array[j+1]) {
                var temp = array[j], val1 = array[j], val2 = array[j + 1];
                changeTextAndColor(arrayBars[j], arrayBars[j + 1], val2, val1, '#ab47bc');
                await pause(speed);
                array[j] = array[j + 1]
                array[j+1] = temp
                changeTextAndColor(arrayBars[j], arrayBars[j + 1], val1, val2, '#ab47bc ');
            }
            changeColors(arrayBars[j], arrayBars[j + 1], '#81d4fa');
        }
        arrayBars[len].style.backgroundColor = '#f57c00';
        len--;
      }
      console.log(array);
}


