import PropTypes from "prop-types";
export default function Mobile({ mobile, addCart }) {
  return (
    <div className="p-2 rounded border-2 border-green-700 text-center">
      <img
        src={mobile.image_url}
        alt="Image"
        className="w-full object-cover h-[200px] rounded"
      />
      <p>Name - {mobile.name}</p>
      <p>Price - ${mobile.price}</p>
      <p>Brand - {mobile.brand}</p>
      <p>Model - {mobile.model}</p>
      <button
        className="bg-black text-white p-2 rounded mt-2"
        onClick={() => addCart(mobile)}
      >
        Add To Cart
      </button>
    </div>
  );
}
Mobile.propTypes = {
  mobile: PropTypes.object.isRequired,
  addCart: PropTypes.func.isRequired,
};
