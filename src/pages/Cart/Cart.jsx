
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import classes from "./Cart.module.css";
import LayOut from "../../components/LayOut/LayOut";
import { DataContext } from "../../components/DataProvider/DataProvider";
import ProductCard from "../../components/Product/ProductCard";
import CurrencyFormat from "../../components/CurrencyFormat/CurrencyFormat";
import { Type } from "../../Utility/action.type";

const Cart = () => {
  const [{ basket, user }, dispatch] = useContext(DataContext);

  const total = basket?.reduce((amount, item) => {
    const quantity = item.amount || 1;
    return item.price * quantity + amount;
  }, 0);

  const increment = (item) => {
    dispatchEvent({
      type: Type.ADD_TO_BASKET,
      item,
    });
  };

  const decrement = (id) => {
    dispatchEvent({
      type: Type.REMOVE_FROM_BASKET,
      id,
    });
  };

  return (
    <LayOut>
      <section className={classes.container}>
        <div className={classes.cartContainer}>
          <h2>Hello, {user?.name || "Guest"}</h2>
          <h3>Your Shopping Basket</h3>
          <hr />

          {basket?.length === 0 ? (
            <p>Oops! No item in your cart.</p>
          ) : (
            basket.map((item, i) => (
              <section className={classes.cart_product} key={item.id}>
                <ProductCard
                  product={item}
                  renderDesc={true}
                  renderAdd={false}
                  flex={true}
                />
                <div className={classes.btn_container}>
                  <button
                    className={classes.btn}
                    onClick={() => increment(item)}
                  >
                    <IoIosArrowUp size={20} />
                  </button>
                  <span>{item.amount || 1}</span>
                  <button
                    className={classes.btn}
                    onClick={() => decrement(item.id)}
                  >
                    <IoIosArrowDown size={20} />
                  </button>
                </div>
              </section>
            ))
          )}
        </div>

        {basket?.length !== 0 && (
          <div className={classes.subtotal}>
            <div>
              <p>
                Subtotal ({basket?.length} item{basket.length > 1 ? "s" : ""}):
              </p>
              <CurrencyFormat amount={total} />
            </div>
            <span>
              <input type="checkbox" id="gift" />
              <label htmlFor="gift">
                <small>This order contains a gift</small>
              </label>
            </span>
            <Link to="/payments" className={classes.checkoutBtn}>
              Continue to Checkout
            </Link>
          </div>
        )}
      </section>
    </LayOut>
  );
};

export default Cart;
