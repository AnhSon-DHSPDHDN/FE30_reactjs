import { useCallback, useMemo, useState } from "react";
import "./App.css";
import Content from "./components/Content";
import SideMenu from "./components/SideMenu";

function App() {
  const [isToggle, setIsToggle] = useState(false);
  const data = useMemo(() => {
    return [];
  }, []);

  const handleFetchData = useCallback(() => {}, []);

  return (
    <div className="App">
      <button onClick={() => setIsToggle(true)}>Show</button>
      <SideMenu isOpen={isToggle} setIsOpen={setIsToggle} />
      <Content data={data} handleFetchData={handleFetchData} />
    </div>
  );
}

export default App;
