import React from 'react';
import './style.css'
import BubbleSort from '../Algorithms/BubbleSort'
import InsertionSort from '../Algorithms/InsertionSort';
import SelectionSort from '../Algorithms/SelectionSort';

class SortingVisualizer extends React.Component{
    state = {
        array: [],
        buttons: [],
        speed: 100
    };
    componentDidMount() {
        this.resetArray();
        let genrateArrayBtn = document.getElementById('genrate_array');
        let selectionSortBtn = document.getElementById('selection_sort');
        let bubbleSortBtn = document.getElementById('bubble_sort');
        let insertionSortBtn = document.getElementById('insertion_sort');
        let sortBtn = document.getElementById('sort_btn');
        let speedRangeBtn = document.getElementById('changeSize');

        this.setState({ buttons:[
            genrateArrayBtn,
            selectionSortBtn,
            bubbleSortBtn,
            insertionSortBtn,
            speedRangeBtn,
            sortBtn
        ]
        });
    }
    bubbleSort = async (e) => {    
        this.disableButtons();
        await BubbleSort(this.state.array, this.state.speed);
        this.enableButtons();
    }
    disableButtons = (e) => {
        if (this.state.buttons.length > 0) {
            this.state.buttons.forEach( btn => {
                btn.disabled = true;
                btn.style.color = 'red';
            })
        }
    }
    enableButtons = (e) => {
        if (this.state.buttons.length > 0) {
            this.state.buttons.forEach( btn => {
                btn.disabled = false;
                btn.style.color = 'black';
            })
        }
    }
    selectionSort = async () => {
        this.disableButtons();
        await SelectionSort(this.state.array, this.state.speed);
        this.enableButtons();
    }
    insertionSort = async () => {
        this.disableButtons();
        await InsertionSort(this.state.array, this.state.speed);
        this.enableButtons();
    }
    resetArray = () => {
        let array = []
        for (let i = 0; i < 20; i++ ){
            array.push(getRandomInt(15, 650));
        }
        this.setState({array: array});
    }
    onSpeedChange = (e) => {
        this.setState({
            speed: e.target.value
        });
    }
    genrateNewArray = () => {
        this.resetArray();
        let array = Array.from(document.getElementsByClassName('array_bar'));
        array.forEach( ele => {
            ele.style.backgroundColor = '#81d4fa'
        })
    }
    render() {
        return(
            <div id = 'container'>
            <header>
                <div className = 'header_container'>
                    <div className = 'sorts_header'>
                        <div><button onClick = {this.genrateNewArray} id = 'genrate_array'>Genrate new array Sort</button></div>
                        <div className = 'speed_range'>
                            <p> 
                                Sorting Speed: 
                                <input onChange = {this.onSpeedChange}  type="range" min="50" max="1000" id="changeSize" defaultValue = '100'/>
                            </p>
                        </div>
                    </div>
                    <div className = 'sorts_div'>
                        <div><button onClick = {this.selectionSort} id = 'selection_sort'>Selection Sort</button></div>
                        <div><button onClick = {this.bubbleSort} id = 'bubble_sort'>Bubble Sort</button></div>
                        <div><button onClick = {this.insertionSort} id = 'insertion_sort'>Insertion Sort</button></div>
                    </div>
                    <div className = 'sorts_btn'>
                        <div><button id = 'sort_btn'>Sort</button></div>
                    </div>
                </div>
            </header>
            <div className = 'bars_container'>
                <div className = 'array_bars'>
                    {this.state.array.map((arr, idx)  => <div className = 'array_bar' key = {idx} style = {{height: `${arr}px`}}>{arr}</div>)}
                </div>
            </div>
            </div>
        )
    }
}
function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
export default SortingVisualizer;