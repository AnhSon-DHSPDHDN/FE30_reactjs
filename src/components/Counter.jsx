import React, { Component, useEffect, useRef, useState } from "react";

// let timer;

//Function Component
function Counter() {
  const [counter, setCounter] = useState(0)
  const counterRef = useRef(null)

  useEffect(() => {
    //Did mount
    const timer = setInterval(() => {
      setCounter(preCounter => preCounter + 1)
      // console.log('Set counter ne: ', counter);
    }, 1000)
    counterRef.current.style.color = 'red'

    //Will Unmount
    return () => {
      clearInterval(timer)
    }
  }, [])

  //Did update
  useEffect(() => {
    // console.log('Did update ne: ', counter);
  }, [counter])// dependency

  return <div ref={counterRef}>{counter}</div>
}


// Class Component
// class Counter extends Component {
//   constructor(props) {
//     super(props);
//     this.props = props;
//     this.state = {
//       counter: 0,
//     };
//   }

//   componentDidMount() {
//     timer = setInterval(() => {
//       this.setState({
//         counter: this.state.counter + 1,
//       });
//       console.log('Set State ne: ', this.state.counter);
//     }, 1000);
//   }

//   componentDidUpdate() {
//     // console.log('Component Update ne!!!');
//   }

//   componentWillUnmount() {
//     console.log("Did Unmount ne");
//     clearInterval(timer)
//   }

//   render() {
//     return <div>{this.state.counter}</div>;
//   }
// }

export default Counter;
