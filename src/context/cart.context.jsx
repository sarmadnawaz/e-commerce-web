import React, { createContext } from "react";

export const CartContext = createContext({
  isCartOpen: false,
  products: [],
  totalItems : 0,
  totalAmount : 0,
  setIsCartOpen: () => {},
  addProductToCart: () => {},
  productIncrementor: () => {},
  productDecrementor: () => {},
});

const productsReducer = (state, action) => {
  const existedProduct = state.find(
    ({ id }) => id === action.id || id === action.product.id
  );
  switch (action.type) {
    case "ADD":
      if (existedProduct)
        return state.map((item) =>
          item.id === action.product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      return [...state, { ...action.product, quantity: 1 }];
    case "DEC":
      if (existedProduct.quantity === 1)
        return state.filter((item) => item.id !== action.id);
      return state.map((item) =>
        item.id === action.id ? { ...item, quantity: item.quantity - 1 } : item
      );
    case "REMOVE":
      return state.filter((item) => item.id !== action.id);
    case "INC":
      return state.map((item) =>
        item.id === action.id ? { ...item, quantity: item.quantity + 1 } : item
      );
    default:
      return [...state];
  }
};

const CartProvider = (props) => {
  const [isCartOpen, setIsCartOpen] = React.useState(false);
  const [products, setProducts] = React.useReducer(productsReducer, []);
  const totalItems = products.reduce(
    (previousValue, { quantity }) => previousValue + quantity,
    0
  );
  const totalAmount = products.reduce(
    (previousValue, { price, quantity }) => previousValue + quantity * +price,
    0
  );

  function addProductToCart(product) {
    setProducts({ type: "ADD", product });
  }

  function productIncrementor(id) {
    setProducts({ type: "INC", id });
  }

  function productDecrementor(id) {
    setProducts({ type: "DEC", id });
  }

  function removeProductFromCart(id) {
    setProducts({ type: "REMOVE", id });
  }

  const value = {
    isCartOpen,
    products,
    totalItems,
    totalAmount,
    setIsCartOpen,
    addProductToCart,
    productIncrementor,
    productDecrementor,
    removeProductFromCart,
  };

  return (
    <CartContext.Provider value={value}>{props.children}</CartContext.Provider>
  );
};

export default CartProvider;
