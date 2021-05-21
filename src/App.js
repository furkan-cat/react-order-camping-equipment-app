import { Fragment, useState } from "react"; // Generally you should add "React, ..."

import Header from "./components/Layout/Header";
import Products from "./components/Products/Products";
import Cart from "./components/Cart/Cart";
function App() {
  const [cartIsShown, setCartIsShown] = useState(false);

  const showCartHandler = () => {
    setCartIsShown(true);
  };

  const hideCartHandler = () => {
    setCartIsShown(false);
  };

  return (
    <Fragment>
      {cartIsShown && <Cart onClose={hideCartHandler} />}
      <Header onShowCart={showCartHandler} />
      <main>
        <Products />
      </main>
    </Fragment>
  );
}

export default App;
