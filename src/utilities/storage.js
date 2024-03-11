const getStoredCart = () => {
  const storedCartString = localStorage.getItem("cart");
  if (storedCartString) {
    return JSON.parse(storedCartString);
  }
  return [];
};
const addToLocalStorage = (id) => {
  const cart = getStoredCart();
  cart.push(id);
  const cartStringified = JSON.stringify(cart);
  localStorage.setItem("cart", cartStringified);
};
const removeFromLocalStorage = (id) => {
  const cart = getStoredCart();
  const remaining = cart.filter((item) => item !== id);
  const cartStringified = JSON.stringify(remaining);
  localStorage.setItem("cart", cartStringified);
};
export { addToLocalStorage, getStoredCart, removeFromLocalStorage };
