import { useState } from "react";
import "./App.css";
import Header from "./components/Header/Header.jsx";
import Carousel from "./components/Carousel/Carousel.jsx";
import Category from "./components/Category/Category.jsx";


function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <Header />
        <Carousel/>
        <Category/>
      </div>
    </>
  );
}

export default App;
