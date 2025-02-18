import React, { useEffect, useState } from "react";
import { Col, Container, Row, Button, ButtonGroup } from "react-bootstrap";
import { useParams, useNavigate } from "react-router-dom";
import "./ProductDetail.style.css";

const ProductDetail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [isMouseHover, setIsMouseHover] = useState(false);
  const [selectedSize, setSelectedSize] = useState(null);
  const navigate = useNavigate();

  const getProductDetail = async () => {
    const url = `https://my-json-server.typicode.com/JaeHye0k/React-study/products/${id}`;
    const response = await fetch(url);
    const data = await response.json();
    setProduct(data);
  };
  const showPrice = () => {
    setIsMouseHover(true);
  };
  const unshowPrice = () => {
    setIsMouseHover(false);
  };
  const goToBuy = () => {
    navigate("buy", { state: selectedSize });
  };
  useEffect(() => {
    getProductDetail();
  }, [selectedSize]);
  return (
    <Container id="product_detail">
      <Row className="product_detail_row">
        <Col className="product_detail_col">
          <img
            src={product?.img}
            alt="상품 디테일"
            className="product_detail_img"
          />
        </Col>
        <Col>
          <div className="product_detail_title">{product?.title}</div>
          <div className="product_detail_price">
            ₩{product?.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
          </div>
          <div className="product_detail_choice">
            {product?.choice ? "Conscious Choice" : <br />}
          </div>
          <div>
            <ButtonGroup>
              {product?.size.map((e) => (
                <Button
                  className="product_detail_size_button"
                  eventKey={e}
                  onClick={() => setSelectedSize(e)}
                >
                  {e}
                </Button>
              ))}
            </ButtonGroup>
          </div>
          <Button
            className="product_detail_buy"
            onMouseOver={() => showPrice()}
            onMouseOut={() => unshowPrice()}
            onClick={() => goToBuy()}
          >
            {isMouseHover
              ? `₩${product?.price
                  .toString()
                  .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}`
              : "구매"}
          </Button>
        </Col>
      </Row>
    </Container>
  );
};

export default ProductDetail;
