// import { useEffect, useState } from "react";

// import axios from "axios";

// const useGetProducts = (API) => {
//   const [products, setProducts] = useState([]);
//   const [isLoading, setIsLoading] = useState(true);

//   useEffect(async () => {
//     const response = await axios(API);
//     setProducts(response.data);
//     setIsLoading(false);
//   }, []);

//   // return  {products, isLoading};
//   return products;
// };

// export default useGetProducts;

import { useEffect, useState } from 'react';
import axios from 'axios';
const useGetProducts = (API) => {
  const [products, setProducts] = useState([]);
  useEffect(async () => {
    const response = await axios(API);
    setProducts(response.data);
  }, []);
  return products;
};
export default useGetProducts;
