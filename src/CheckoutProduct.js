import React, { forwardRef } from "react";
import "./CheckoutProduct.css";
import { useStateValue } from "./StateProvider";
import nextId from "react-id-generator";

const CheckoutProduct = forwardRef(
  ({ id, image, title, price, rating }, ref) => {
    const htmlId = nextId();

    const [{ basket }, dispatch] = useStateValue();
    const removeFromBasket = () => {
      dispatch({
        type: "REMOVE_FROM_BASKET",
        id: id,
      });
    };
    return (
      <div className="checkoutProduct" key={htmlId} ref={ref}>
        <img className="checkoutProduct__image" src={image} alt={title} />
        <div className="checkoutProduct__info">
          <p className="checkoutProduct__title">{title}</p>
          <p className="checkoutProduct__price">
            <small>$</small>
            <strong>{price}</strong>
          </p>
          <div className="checkoutProduct__rating">
            {Array(rating)
              .fill()
              .map((_, i) => (
                <span role="img" aria-label="star">
                  ⭐
                </span>
              ))}
          </div>
          <button onClick={removeFromBasket}>Remove from Basket</button>
        </div>
      </div>
    );
  }
);

export default CheckoutProduct;
