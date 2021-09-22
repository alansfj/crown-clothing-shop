import React from "react";
import { ReactComponent as ShoppingSvg } from "../../assets/shopping-bag.svg";
import "./cart-icon.styles.scss";
import { useDispatch, useSelector } from "react-redux";
import { toggleCartHidden } from "../../redux/cart/cartSlice";

const CartIcon = () => {
  const dispatch = useDispatch();
  const itemCount = useSelector(state =>
    state.cart.cartItems.reduce((accu, cartItem) => accu + cartItem.quantity, 0)
  );

  return (
    <div
      className="cart-icon"
      onClick={() => {
        dispatch(toggleCartHidden());
      }}
    >
      <ShoppingSvg className="shopping-icon" />
      <span className="item-count">{itemCount}</span>
    </div>
  );
};

export default CartIcon;
