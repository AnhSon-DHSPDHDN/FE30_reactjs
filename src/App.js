import './App.css';
import Main from './components/Main';

function App() {
  //   const cardTitle = "Iphone 14 promax";
  //   const cardPrice = "40 củ";
  //   const cardDes = "ĐT Xịn nhất từ apple";
  const obj = {
    cardTitle: "Iphone 14 promax",
    cardPrice: "40 củ",
    cardDes: "ĐT Xịn nhất từ apple",
  }

  const buyPhone = (dataPhone) => {
    alert('Bạn đã mua: ' + dataPhone)
  }

  return (
    <div className="App">
      <Main
        {...obj}
        handleBuyPhone={buyPhone}
      />
    </div>
  );
}

export default App;
