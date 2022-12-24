import './App.css';
import HelloWorld from './components/HelloWorld';

function App() {
  return (
    <div className="App">
      <HelloWorld helloSomeThing={"Son"} someThing2={"Son ne"} abc={13}>
        <div>Day la children ne!!</div>
      </HelloWorld>
    </div>
  );
}

export default App;
