import React, { useState } from 'react';
import './App.css';

const listStudents = [
  'Tien',
  'Gia',
  'Tuyen',
  'Thanh',
  'Sang',
  'Bon',
  'Bin',
  'Duc',
  'Lop 4',
]

function App() {
  const [counter, setCounter] = useState(0)

  // Xử lí tăng dần
  const handleIncrement = () => {
    setCounter(counter + 1)
  }

  // Xử lí giảm dần
  const handleDecrement = () => {
    setCounter(counter - 1)``
  }

  // const renderListStudents = (list) => {
  //   const result = [];
  //   for (let i = 0; i < list.length; i++) {
  //     const element = <li>{list[i]}</li>
  //     result.push(element)
  //   }

  //   return result
  // }

  return (
    <div className="App">
      <div className='counter-container'>
        <button className='btn' onClick={handleDecrement}>-</button>
        <span className='counter-content'>{counter}</span>
        <button className='btn' onClick={handleIncrement}>+</button>
      </div>
      <div>
        <ul>
          {listStudents.map((student, index) => {
            return <li key={index}>{student}</li>
          })}
        </ul>
      </div>
    </div>
  );
}

// class App extends React.Component {
//   constructor(props) {
//     super(props)`

//     this.state = {
//       counter: 0
//     }

//     this.handleDecrement = this.handleDecrement.bind(this)
//     this.handleIncrement = this.handleIncrement.bind(this)
//   }

//   handleDecrement() {
//     this.setState({
//       counter: this.state.counter - 1
//     })
//   }

//   handleIncrement() {
//     this.setState({
//       counter: this.state.counter + 1
//     })
//   }

//   render() {
//     return <div className="App">
//       <div className='counter-container'>
//         <button className='btn' onClick={this.handleDecrement}>-</button>
//         <span className='counter-content'>{this.state.counter}</span>
//         <button className='btn' onClick={this.handleIncrement}>+</button>
//       </div>
//     </div>
//   }
// }

export default App;
