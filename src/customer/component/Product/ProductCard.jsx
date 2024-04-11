import react from "react";
import "./ProductCard.css";
import { useLocation, useNavigate } from "react-router-dom";

const ProductCard = ({ product }) => {
  return (
    <div className="ProductCard w-[15rem]  m-3 transition-all cursor-pointer">
      <div className="h-[20rem]">
        <img
          className="h-full w-full object-cover object-left-top"
          src={product.imageUrl}
          alt=""
        ></img>
      </div>
      <div className="textPart bg-white p-3">
        <div sx={{}}>
          <p className="font-bold opacity-60">{product.brand}</p>
          <p>{product.title}</p>
        </div>
        <div className="flex space-x-2 items-center">
          <p className="">₹{product.discountedPrice}</p>
          <p className="line-through opacity-50">₹{product.price}</p>
          <p className="text-green-600 font-semibold">
            {product.discountPersent}% off
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
