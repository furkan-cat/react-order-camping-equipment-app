import { useEffect, useState } from "react";

import Card from "../UI/Card";
import ProductsItem from "./ProductsItem/ProductsItem";
import classes from "./AvailableProducts.module.css";

const AvailableProducts = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const response = await fetch(
        "https://react-http-fff0d-default-rtdb.europe-west1.firebasedatabase.app/meals.json"
      );
      const responseData = await response.json();
      const loadedProducts = [];

      for (const key in responseData) {
        loadedProducts.push({
          id: key,
          name: responseData[key].name,
          description: responseData[key].description,
          price: responseData[key].price,
        });
      }
      setProducts(loadedProducts);
    };
    fetchProducts();
  }, []);
  const productList = products.map((product) => (
    <ProductsItem
      id={product.id}
      key={product.id}
      product={product}
      name={product.name}
      description={product.description}
      price={product.price}
    />
  ));
  return (
    <section className={classes.products}>
      <Card>
        <ul>{productList}</ul>
      </Card>
    </section>
  );
};

export default AvailableProducts;
