import NotFound from "@/components/notFound/NotFound";
import Products from "@/components/products/Products";
import React, { useEffect } from "react";

const Cart = ({ state, dispatch }) => {
  useEffect(() => {
    window.scroll(0, 0);
  }, []);
  return (
    <section className="wrapper my-8">
      {state.cart.length > 0 ? (
        <>
          <h1 className="text-3xl text-center text-green-500">Your Cart</h1>
          <Products
            data={state.cart}
            wishlist={state.wishlist}
            dispatch={dispatch}
            cart={state.cart}
          />
        </>
      ) : (
        <NotFound
          title={"Your Cart is Empty"}
          img={"https://cdn-icons-png.flaticon.com/512/11329/11329060.png"}
        />
      )}
    </section>
  );
};

export default Cart;
