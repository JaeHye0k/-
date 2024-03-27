import React, { useEffect, useState } from "react";
import ProductCard from "../../component/ShoppingMallComponent/ProductCard";
import { Container, Row, Col } from "react-bootstrap";
import style from "../../styles/ShoppingMall.module.css";

const ProductAll = () => {
  const [productList, setProductList] = useState([]);

  const getProducts = async () => {
    // const url = "http://localhost:5000/products";
    const url =
      "https://my-json-server.typicode.com/JaeHye0k/React-study/products";
    const response = await fetch(url);
    const data = await response.json();
    setProductList(data);
  };

  useEffect(() => {
    getProducts();
  }, []);
  return (
    <Container id={style.product_all_container}>
      <Row className={style.product_all_row}>
        {productList.map((product) => (
          <Col lg={3} className={style.product_col}>
            <ProductCard item={product} />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default ProductAll;
