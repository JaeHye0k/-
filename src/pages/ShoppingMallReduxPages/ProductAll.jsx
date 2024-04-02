import React, { useEffect, useState } from "react";
import ProductCard from "../../component/ShoppingMallReduxComponent/ProductCard";
import { useSearchParams } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import style from "../../styles/ShoppingMallRedux/ShoppingMallRedux.module.css";

const ProductAll = () => {
  const [productList, setProductList] = useState([]);
  const [query, setQuery] = useSearchParams();

  const getProducts = async () => {
    let selectQuery = query.get("q") || "";
    const url = `https://my-json-server.typicode.com/JaeHye0k/React-study/products?q=${selectQuery}`;
    const response = await fetch(url);
    const data = await response.json();
    setProductList(data);
  };

  useEffect(() => {
    getProducts();
  }, [query]);
  return (
    <Container id={style.product_all_container}>
      <Row className={style.main_banner}>
        <img
          className={style.main_banner_model}
          src="/assets/images/shoppingmall/model.jpg"
          alt="main banner"
        />
        <img
          className={style.main_banner_logo}
          src="/assets/images/shoppingmall/logo.png"
          alt="banner logo"
        />
      </Row>
      <Row className={style.product_all_row}>
        {productList.map((product) => (
          <Col
            lg={3}
            className={`${style.product_col} col-xl-3 col-md-4 col-6`}
          >
            <ProductCard item={product} />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default ProductAll;
