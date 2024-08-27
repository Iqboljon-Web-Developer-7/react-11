import NotFound from "@/components/notFound/NotFound";
import Products from "@/components/products/Products";
import { useStateValue } from "@/context";
import React, { useEffect } from "react";

const Wishlist = ({ state, dispatch }) => {
  useEffect(() => {
    window.scroll(0, 0);
  }, []);

  return (
    <section className="wishlist wrapper my-10">
      <div className="wishlist__info">
        {state?.wishlist.length == 0 ? (
          <NotFound
            img={
              "https://i.pinimg.com/originals/f6/e4/64/f6e464230662e7fa4c6a4afb92631aed.png"
            }
          />
        ) : (
          <>
            <h2 className="text-center text-3xl text-red-500">Your Wishlist</h2>
            <Products
              dispatch={dispatch}
              data={state.wishlist}
              wishlist={state.wishlist}
              cart={state.cart}
            />
          </>
        )}
      </div>
    </section>
  );
};

export default Wishlist;
