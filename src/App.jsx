import { useState } from "react";
import "./App.css";
import Header from "./components/Header/Header.jsx";
import Carousel from "./components/Carousel/Carousel.jsx";


function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <Header />
        <Carousel/>
      </div>
    </>
  );
}

export default App;
