import React from "react";
import "./checkout.styles.scss";
import { useSelector } from "react-redux";
import CheckoutItem from "../../components/checkout-item/checkout-item.component";
import StripeCheckoutButton from "../../components/stripe-button/stripe-button.component";
import { Link } from "react-router-dom";
import {
  selectCartItems,
  selectCartTotal,
} from "../../redux/cart/cart.selectors";

const Checkout = () => {
  const cartItems = useSelector(selectCartItems);

  const cartTotal = useSelector(selectCartTotal);

  return (
    <div className="checkout-page">
      <div className="checkout-header">
        <div className="header-block">
          <span>Product</span>
        </div>
        <div className="header-block">
          <span>Description</span>
        </div>
        <div className="header-block">
          <span>Quantity</span>
        </div>
        <div className="header-block">
          <span>Price</span>
        </div>
        <div className="header-block">
          <span>Remove</span>
        </div>
      </div>
      {cartItems.map(cartItem => (
        <CheckoutItem key={cartItem.id} cartItem={cartItem} />
      ))}
      <div className="total">
        <span>TOTAL: ${cartTotal}</span>
      </div>
      {cartTotal ? (
        <StripeCheckoutButton price={cartTotal} />
      ) : (
        <Link to="/shop">Add something to cart</Link>
      )}
    </div>
  );
};

export default Checkout;
