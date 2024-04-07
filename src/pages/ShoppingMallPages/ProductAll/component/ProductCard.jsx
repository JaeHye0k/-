import React from "react";
import { useNavigate } from "react-router-dom";
import "./ProductCard.style.css";

const ProductCard = ({ item }) => {
  const navigate = useNavigate();

  const showDetail = () => {
    navigate(`products/${item.id}`, { state: String(item.id) });
  };

  return (
    <div className="product_card" onClick={() => showDetail()}>
      <div className="product_card_image_box">
        <img src={item?.img} alt="product"></img>
      </div>
      <div className="product_card_information">
        <div>{item?.choice ? "conscious choice" : <br />}</div>
        <div>{item?.title}</div>
        <div>
          ₩{item?.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
        </div>
        {item?.new && <div className="product_card_new">New!</div>}
      </div>
    </div>
  );
};

export default ProductCard;
