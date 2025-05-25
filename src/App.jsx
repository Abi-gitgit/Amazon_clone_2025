// import { useState } from "react";
// import "./App.css";
// import Header from "./components/Header/Header.jsx";
// import Carousel from "./components/Carousel/Carousel.jsx";
// import Category from "./components/Category/Category.jsx";
// import Product from "./components/Product/Product.jsx";


// function App() {
//   const [count, setCount] = useState(0);

//   return (
//     <>
//       <div>
//         <Header/>
//         <Carousel/>
//         <Category/>
//         <Product/>
//       </div>
//     </>
//   );
// }

// export default App;



import React from 'react'
import Routing from './Router'


const App = () => {
  return (
    <div>
    
      <Routing />
    </div>
  );
}

export default App