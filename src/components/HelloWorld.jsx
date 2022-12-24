// function HelloWorld(props) {
//   console.log(props.someThing2);

//   return <div>
//     Hello {props.helloSomeThing}
//   </div>
// }

// export default HelloWorld;

import { Component } from "react";

class HelloWorld extends Component {
  constructor(props) {
    super(props)
    this.props = props
  }

  render() {
    return <div>
      Hello {this.props.helloSomeThing}
      {this.props.children}
    </div>
  }
}

export default HelloWorld;
