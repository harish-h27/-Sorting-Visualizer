import React from 'react'
import ReactDOM from 'react-dom'
import SortingVisualizer from './SortingVisualizer/index'

function App() { 

    return(
        <>
           <SortingVisualizer/>
        </>
    )
}

ReactDOM.render(<App/>, document.getElementById('root'));