export const initialState = JSON.parse(localStorage.getItem("mainData")) || {
  wishlist: [],
  cart: [],
  token: localStorage.getItem("userTokent") || null,
  userData: "",
  carousel: [
    {
      title: `Fresh Vegetables Big discount`,
      subTitle: "Save up to 50% off on your first order",
    },
    {
      title: `Fresh Vegetables Big discount`,
      subTitle: "Save up to 50% off on your first order",
    },
    {
      title: `Fresh Vegetables Big discount`,
      subTitle: "Save up to 50% off on your first order",
    },
  ],
  featuredCategories: [
    "Cake & Milk",
    "Coffes & Teas",
    "Pet foods",
    "Vegetables",
  ],
  featuredCategoriesItems: [
    {
      title: "Cake & Milk",
      quantity: 26,
      bg: "#F2FCE4",
    },
    {
      title: "Organic Kiwi",
      quantity: 28,
      bg: "#FFFCEB",
    },
    {
      title: "Peach",
      quantity: 24,
      bg: "#ECFFEC",
    },
    {
      title: "Red Apple",
      quantity: 54,
      bg: "#FEEFEA",
    },
    {
      title: "Snack",
      quantity: 56,
      bg: "#FFF3EB",
    },
    {
      title: "Vegetables",
      quantity: 72,
      bg: "#FFF3FF",
    },
    {
      title: "Strawberry",
      quantity: 36,
      bg: "#F2FCE4",
    },
    {
      title: "Black Plum",
      quantity: 123,
      bg: "#FEEFEA",
    },
    {
      title: "Custard Apple",
      quantity: 34,
      bg: "#FFFCEB",
    },
    {
      title: "Coffee & Tea",
      quantity: 89,
      bg: "#FEEFEA",
    },
  ],
  services: [
    {
      id: 1,
      title: "Best prices & offers",
      description: "Orders $50 or more",
    },
    {
      id: 2,
      title: "Free delivery",
      description: "24/7 amazing services",
    },
    {
      id: 3,
      title: "Great daily deal",
      description: "When you sign up",
    },
    {
      id: 4,
      title: "Wide assortment",
      description: "Mega Discounts",
    },
    {
      id: 5,
      title: "Easy returns",
      description: "Within 30 days",
    },
  ],
};

export const reducer = (state, action) => {
  let res = "";
  switch (action.type) {
    case "TOGGLE_WISHLIST_ITEM":
      if (state.wishlist.findIndex((x) => x.id == action.product.id) < 0) {
        res = { ...state, wishlist: [...state.wishlist, action.product] };
        saveLocalStorage(res);
        return res;
      }

      res = {
        ...state,
        wishlist: state.wishlist.filter(
          (item) => item.id !== action.product.id
        ),
      };
      saveLocalStorage(res);
      return res;
    case "TOGGLE_CART_ITEM":
      if (state.cart.findIndex((x) => x.id == action.product.id) < 0) {
        res = { ...state, cart: [...state.cart, action.product] };
        saveLocalStorage(res);
        return res;
      }
      res = {
        ...state,
        cart: state.cart.filter((item) => item.id !== action.product.id),
      };
      saveLocalStorage(res);
      return res;
    case "ADD_TOKEN":
      res = { ...state, token: action.token };
      saveLocalStorage(res);
      return res;
    case "SAVE_USER":
      res = { ...state, userData: action.payload };
      saveLocalStorage(res);
      return res;
    default:
      break;
  }
};

function saveLocalStorage(data) {
  localStorage.setItem("mainData", JSON.stringify(data));
}
