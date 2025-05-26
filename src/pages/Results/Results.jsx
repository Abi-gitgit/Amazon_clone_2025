
import React, { useState, useEffect } from "react";
import classes from "./Results.module.css";
import LayOut from "../../components/LayOut/LayOut";
import { useParams } from "react-router-dom";
import axios from "axios";
import { productUrl } from "../../Api/endPoints";
import ProductCard from "../../components/Product/ProductCard";
import Loader from "../../components/Loader/Loader";

const Results = () => {
  const [results, setResults] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const { categoryName } = useParams();

  useEffect(() => {
    setIsLoading(true);
    axios
      .get(`${productUrl}/products/category/${categoryName}`)
      .then((res) => {
        setResults(res.data);
        setIsLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setIsLoading(false);
      });
  }, []);

  return (
    <LayOut>
      <section>
        <h1 style={{ padding: "30px" }}>Results</h1>
        <p style={{ padding: "30px" }}>category / {categoryName}</p>
        <hr />

        {/* {isLoading ? (
          <Loader />
        ) : ( */}
          <div className={classes.product_container}>
            {results?.map((product) => (
              <ProductCard key={product.id} product={product} renderDesc={false} renderAdd={true} />
            ))}
          </div>
        {/* )} */}
      </section>
    </LayOut>
  );
};

export default Results;


// import React, { useState, useEffect } from "react";
// import { useParams } from "react-router-dom";
// import axios from "axios";

// import classes from "./Results.module.css";
// import LayOut from "../../components/LayOut/LayOut";
// import { productUrl } from "../../Api/endPoints";
// import ProductCard from "../../components/Product/ProductCard";
// import Loader from "../../components/Loader/Loader";

// const Results = () => {
//   const [results, setResults] = useState([]);
//   const [isLoading, setIsLoading] = useState(false);
//   const [error, setError] = useState("");
//   const { categoryName } = useParams();

//   useEffect(() => {
//     const fetchResults = async () => {
//       setIsLoading(true);
//       setError("");
//       try {
//         const res = await axios.get(
//           `${productUrl}/products/category/${categoryName}`
//         );
//         setResults(res.data);
//       } catch (err) {
//         console.error(err);
//         setError("Failed to load products. Please try again later.");
//       } finally {
//         setIsLoading(false);
//       }
//     };

//     fetchResults();
//   }, [categoryName]);

//   return (
//     <LayOut>
//       <section className={classes.container}>
//         <h1 className={classes.heading}>Results</h1>
//         <p className={classes.subheading}>
//           Category / {decodeURIComponent(categoryName)}
//         </p>
//         <hr />

//         {isLoading ? (
//           <Loader />
//         ) : error ? (
//           <div className={classes.error}>{error}</div>
//         ) : (
//           <div className={classes.product_container}>
//             {results.length > 0 ? (
//               results.map((product) => (
//                 <ProductCard
//                   key={product.id}
//                   product={product}
//                   renderDesc={false}
//                   renderAdd={true}
//                 />
//               ))
//             ) : (
//               <p>No products found in this category.</p>
//             )}
//           </div>
//         )}
//       </section>
//     </LayOut>
//   );
// };

// export default Results;
