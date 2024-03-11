import { useEffect, useState } from "react";
import {
  addToLocalStorage,
  getStoredCart,
  removeFromLocalStorage,
} from "../utilities/storage";
import Mobile from "./Mobile";

export default function Mobiles() {
  const [mobiles, setMobiles] = useState([]);
  useEffect(() => {
    fetch("../../public/mobile.json")
      .then((response) => response.json())
      .then((data) => setMobiles(data));
  }, []);
  useEffect(() => {
    if (mobiles.length > 0) {
      const storedCart = getStoredCart();
      const savedCart = [];
      for (const id of storedCart) {
        const mobile = mobiles.find((mobile) => mobile.id === id);
        if (mobile) {
          savedCart.push(mobile);
        }
      }
      setAddMobiles(savedCart);
    }
  }, [mobiles]);
  const handleRemoveFromCart = (id) => {
    const remainingCart = addMobiles.filter((mobile) => mobile.id !== id);
    setAddMobiles(remainingCart);
    removeFromLocalStorage(id);
  };
  const [addMobiles, setAddMobiles] = useState([]);
  const addCart = (mobile) => {
    const newAddMobiles = [...addMobiles, mobile];
    setAddMobiles(newAddMobiles);
    addToLocalStorage(mobile.id);
  };
  return (
    <div>
      <p className="mb-3">Cart - {addMobiles.length}</p>
      {addMobiles.map((mobile) => (
        <div
          className="mb-2 rounded p-2 border-2 border-red-700 w-[300px] text-center"
          key={mobile.id}
        >
          <img
            src={mobile.image_url}
            className="h-[100px] w-[100%] object-cover"
          />
          <p>{mobile.name}</p>
          <p>{mobile.model}</p>
          <p>{mobile.price}</p>
          <button
            className="mt-2 bg-red-700 text-white rounded p-2"
            onClick={() => handleRemoveFromCart(mobile.id)}
          >
            Remove
          </button>
        </div>
      ))}
      <div className="grid grid-cols-3 gap-6">
        {mobiles.map((mobile) => (
          <Mobile mobile={mobile} key={mobile.id} addCart={addCart} />
        ))}
      </div>
    </div>
  );
}
