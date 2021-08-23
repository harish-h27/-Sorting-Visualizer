import { changeColors, changeTextAndColor, pause } from './Helpers'

export default async function SelctionSort(array,speed) {
    let arrayBars = document.getElementsByClassName('array_bar');
    for(var i = 0; i < array.length; i++){
      var min = i;

      changeColors(arrayBars[min], arrayBars[min], '#ef5350 ');
      await pause(speed);
      for(var j = i+1; j < array.length; j++){
        changeColors(arrayBars[j], arrayBars[j], '#66bb6a');
        await pause(speed);  
        if(array[j] < array[min]){
            changeColors(arrayBars[min], arrayBars[min], '#81d4fa');
            min = j;
            changeColors(arrayBars[min], arrayBars[min], '#ef5350 ');
        } else {
            changeColors(arrayBars[j], arrayBars[j], '#81d4fa');
        }
      }
      if (array[min] < array[i]) {
        let val1 = array[min], val2 = array[i];
        changeTextAndColor(arrayBars[min], arrayBars[i], val1, val2, '#81d4fa');
        swap(array, i, min, arrayBars)
      }
      arrayBars[i].style.backgroundColor = '#f57c00';
    }
    return array;
};

async function swap(array, i, j, arrayBars) {
    var temp = array[i];
    array[i] = array[j];
    array[j] = temp;
}
