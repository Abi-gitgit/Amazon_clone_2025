import { useState } from "react";
import "./App.css";
import Header from "./components/Header/Header.jsx";
import LowerHeader from "./components/LowerHeader.jsx";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <Header />
        {/* <LowerHeader /> */}
      </div>
    </>
  );
}

export default App;
