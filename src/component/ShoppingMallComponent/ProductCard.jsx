import React from "react";
import { useNavigate } from "react-router-dom";
import style from "../../styles/ShoppingMall.module.css";

const ProductCard = ({ item }) => {
  const navigate = useNavigate();

  const showDetail = () => {
    navigate(`products/${item.id}`, { state: String(item.id) });
  };

  return (
    <div className={style.product_card} onClick={() => showDetail()}>
      <img width={250} src={item?.img} alt="product"></img>
      <div className={style.product_card_information}>
        <div>{item?.choice ? "conscious choice" : <br />}</div>
        <div>{item?.title}</div>
        <div>
          ₩{item?.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
        </div>
        {item?.new && <div className={style.product_card_new}>신제품</div>}
      </div>
    </div>
  );
};

export default ProductCard;
