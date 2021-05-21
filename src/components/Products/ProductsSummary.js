import classes from "./ProductsSummary.module.css";

const ProductsSummary = () => {
  return (
    <section className={classes.summary}>
      <h2>Nature is essential to our lives!</h2>
      <p>
        It’s easy to think nature will always be with us. But even in my
        lifetime, birds like starlings and house sparrows have declined so much
        they’re now listed as endangered. In fact, nature is faring worse in the
        UK than in most other countries. The latest State of Nature report shows
        that over half our wild species – plants, insects, birds, mammals – are
        in decline.
      </p>
      <p>
        First, how was your last holiday? Did you spend any time in nature? Shut
        your eyes and see if you can recall how you feel about the last time you
        spent time in nature.
      </p>
    </section>
  );
};
export default ProductsSummary;
