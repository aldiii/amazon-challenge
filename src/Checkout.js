import React from "react";
import "./Checkout.css";
import Subtotal from "./Subtotal";
import { useStateValue } from "./StateProvider";
import CheckoutProduct from "./CheckoutProduct";

function Checkout() {
  const [{ basket, user }, dispatch] = useStateValue();

  return (
    <div className="checkout">
      <div className="checkout__left">
        <img
          src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg"
          alt=""
          className="checkout__ad"
        />
        <div>
          <h3>Hello, {user ? user.email : "Guest"}!</h3>
          <h2 className="checkout__title">
            Your shopping basket{" "}
            {!basket.length &&
              "is empty. Please add some product. Have a nice shopping!"}
          </h2>

          {basket.map(({ id, image, title, price, rating }) => (
            <CheckoutProduct
              id={id}
              title={title}
              price={price}
              image={image}
              rating={rating}
            />
          ))}
        </div>
      </div>
      <div className="checkout__right">
        <Subtotal />
      </div>
    </div>
  );
}

export default Checkout;
