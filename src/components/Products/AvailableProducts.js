import { useEffect, useState } from "react";

import Card from "../UI/Card";
import ProductsItem from "./ProductsItem/ProductsItem";
import classes from "./AvailableProducts.module.css";

const AvailableProducts = () => {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [httpError, setHttpError] = useState();

  useEffect(() => {
    const fetchProducts = async () => {
      const response = await fetch(
        "https://react-http-fff0d-default-rtdb.europe-west1.firebasedatabase.app/meals.json"
      );

      if (!response.ok) {
        throw new Error("Something went wrong");
      }

      const responseData = await response.json();
      const loadedProducts = [];

      for (const key in responseData) {
        loadedProducts.push({
          id: key,
          name: <responseData key="" className="name"></responseData>,
          description: responseData[key].description,
          price: responseData[key].price,
        });
      }
      setProducts(loadedProducts);
      setIsLoading(false);
    };

    fetchProducts().catch((error) => {
      setIsLoading(false);
      setHttpError(error.message);
    });
  }, []);

  if (isLoading) {
    return (
      <section className={classes.ProductsLoading}>
        <p>Loading...</p>
      </section>
    );
  }

  if (httpError) {
    return (
      <section className={classes.ProductsError}>
        <p>{httpError}</p>
      </section>
    );
  }
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
