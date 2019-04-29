import React, {Component} from 'react'
import ReactDOM from 'react-dom'
// import App from './App'
import './index.css'
import App from './App'

const heading = <div className="App">
                    <h1>Hello I'm a bum</h1>
                </div>

// class App extends Component {
//     render() {
//         return (
//             heading
//             // <div className="App">
//             //     <h1>Hello I'm a bum! </h1>
//             // </div>
//         )
//     }
// }

//Using JSX

// ReactDOM.render(<App />, document.getElementById('root'))

ReactDOM.render(<App />, document.getElementById('root'))