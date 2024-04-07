import React, { useEffect, useState } from "react";
import ProductCard from "./component/ProductCard";
import { useSearchParams } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import "./ProductAll.style.css";

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
    <Container id="product_all_container">
      <Row className="main_banner">
        <img
          className="main_banner_model"
          src="/assets/images/shoppingmall/model.jpg"
          alt="main banner"
        />
        <img
          className="main_banner_logo"
          src="/assets/images/shoppingmall/logo.png"
          alt="banner logo"
        />
      </Row>
      <Row className="product_all_row">
        {productList.map((product) => (
          <Col lg={3} className="product_col col-xl-3 col-md-4 col-6">
            <ProductCard item={product} />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default ProductAll;
