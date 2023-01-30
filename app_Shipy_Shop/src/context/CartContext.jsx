import { createContext, useState } from "react";

export const CartContext = createContext();

const CartContextProvider = ({ children }) => {
  const [cartList, setCartList] = useState([]);
  const [qty, setQty] = useState(0)

  const isInCart = (id) => {
    cartList.find((prod) => {
      prod.id === id;
    });
  };
  // setear biien la cantidad para que se modifique su estado
  const addToCart = (item, qty) => {
    if (isInCart(item.id)) {
      const newCart = cartList.map((prod) => {
        if (prod.id === item.id) {
          const newQty = setQty(prod.qty + qty)
          return { ...prod, qty: newQty };
        } else {
          return prod;
        }
      });
      setCartList(newCart);
    } else {
      const newProduct = { ...item, qty: setQty(qty) };
      setCartList([...cartList, newProduct]);
    }
  };
  const removeList = () => setCartList([]);

  const deleteItem = (id) => {
    setCartList(
      cartList.filter((prod) => {
        prod.id != id;
      })
    );
  };

  return (
    <CartContext.Provider
      value={{ cartList, addToCart, removeList, deleteItem }}
    >
      {children}
    </CartContext.Provider>
  );
};
export default CartContextProvider;
