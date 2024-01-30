import React from "react";
import { Routes, Route } from "react-router-dom";
import Products from "../Products/Products";
import SignUp from "../SignUp/SignUp";
import Cart from "../Cart/Cart";

const AppRoutes = ({
  productItems,
  cartItems,
  handleAddToCart,
  handleRemoveProduct,
  handleCartClearance,
}) => {
  return (
    <div>
      <Routes>
        <Route
          path="/"
          element={
            <Products
              productItems={productItems}
              handleAddToCart={handleAddToCart}
            />
          }
        />
        <Route path="/signup" element={<SignUp />} />
        <Route
          path="/cart"
          element={
            <Cart
              cartItems={cartItems}
              handleAddToCart={handleAddToCart}
              handleRemoveProduct={handleRemoveProduct}
              handleCartClearance={handleCartClearance}
            />
          }
        />
      </Routes>
    </div>
  );
};

export default AppRoutes;
