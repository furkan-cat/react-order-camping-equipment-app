import Card from "../UI/Card";
import ProductsItem from "./ProductsItem/ProductsItem";
import classes from "./AvailableProducts.module.css";

const DUMMY_MEALS = [
  {
    id: "m1",
    name: "Binocular",
    description:
      "Nikon's Aculon T02 binoculars are compact, lightweight and available in multiple colours.",
    price: 149.49,
  },
  {
    id: "m2",
    name: "Coleman 6-Person Skydome",
    description:
      "Coleman’s Skydome series improves upon its classic dome tent by adding steeper walls to raise the headroom to six feet, in the case of the six-person model.",
    price: 129.99,
  },
  {
    id: "m3",
    name: "Kelty Tuck 40",
    description:
      "The spacious shape allowed us to sleep in a variety of positions and still stay warm.",
    price: 69.95,
  },
  {
    id: "m4",
    name: "Hults Bruk Tarnaby",
    description:
      "The 15-inch curved hickory shaft on the Tarnaby offers leverage for light-duty campground tasks, like making kindling and driving tent stakes into the ground.",
    price: 99.11,
  },
];

const AvailableProducts = () => {
  const productList = DUMMY_MEALS.map((product) => (
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
