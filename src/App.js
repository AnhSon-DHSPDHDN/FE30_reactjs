import { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";
import Card from "./components/Card";

function App() {
  const [animals, setAnimals] = useState([]);
  const [showbiz, setShowbiz] = useState([]);

  useEffect(() => {
    fetchDataAnimals();
    fetchDataShowbiz();
  }, []);

  const fetchDataAnimals = async () => {
    try {
      const response = await axios.get("http://localhost:3000/animals");
      setAnimals(response?.data);
    } catch (error) {
      console.log(error);
    }
  };

  const fetchDataShowbiz = async () => {
    try {
      const response = await axios.get("http://localhost:3000/showbiz");
      setShowbiz(response?.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="App">
      {animals.length > 0 ? (
        animals.map((animal) => {
          return <Card key={animal?.id} data={animal} />;
        })
      ) : (
        <div>Chua co du lieu</div>
      )}
      {showbiz.length > 0 ? (
        showbiz.map((showbiz) => {
          return <Card key={showbiz?.id} data={showbiz} />;
        })
      ) : (
        <div>Chua co du lieu</div>
      )}
    </div>
  );
}

export default App;
