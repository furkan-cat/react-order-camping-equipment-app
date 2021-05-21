import ProductsItemForm from "./ProductsItemForm";
import classes from "./ProductsItem.module.css";

const ProductsItem = (props) => {
  const price = `$${props.price.toFixed(2)}`;

  return (
    <li className={classes.product}>
      <div>
        <h3>{props.name}</h3>
        <div className={classes.description}>{props.description}</div>
        <div className={classes.price}>{price}</div>
      </div>
      <div>
        <ProductsItemForm />
      </div>
    </li>
  );
};

export default ProductsItem;
