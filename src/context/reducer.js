export const initialState = {
  wishlist: [],
  cart: [],
  token: null,
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
  switch (action.type) {
    case "ADD_WISH_ITEM":
      if (state.wishlist.findIndex((x) => x.id == action.product.id) < 0) {
        return { ...state, wishlist: [...state.wishlist, action.product] };
      }
      return {
        ...state,
        wishlist: state.wishlist.filter(
          (item) => item.id !== action.product.id
        ),
      };

    default:
      break;
  }
};
