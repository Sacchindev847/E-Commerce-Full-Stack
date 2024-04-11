import react from "react";
import "./ProductCard.css";
const ProductCard = ({ product }) => {
  return (
    <div className="ProductCard w-[15rem] m-3 transition-all cursor-pointer">
      <div className="h-[20rem] w-full h-full object-cover object-left-cover flex">
        <img src={product.imageUrl} alt=""></img>
      </div>
      <div className="textPart bg-white p-3">
        <div>
          <p className="font-bold opacity-60">{product.brand}</p>
          <p>{product.title}</p>
        </div>
        <div className="flex space-x-2 items-center">
          <p className="">₹{product.discountedPrice}</p>
          <p className="line-through opacity-70">₹{product.price}</p>
          <p className="text-green-600 ">{product.discountPersent}% off</p>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
