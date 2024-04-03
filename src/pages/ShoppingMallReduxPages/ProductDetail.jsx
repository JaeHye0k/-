import React, { useEffect, useState } from "react";
import { Col, Container, Row, Button, ButtonGroup } from "react-bootstrap";
import { useParams, useNavigate } from "react-router-dom";
import style from "../../styles/ShoppingMallRedux/ShoppingMallRedux.module.css";
import { productAction } from "../../redux/ShoppingMallRedux/actions/productAction";
import { useDispatch, useSelector } from "react-redux";

const ProductDetail = () => {
  const { id } = useParams();
  const [isMouseHover, setIsMouseHover] = useState(false);
  const [selectedSize, setSelectedSize] = useState(null);
  const [validated, setValidated] = useState(true);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const product = useSelector((state) => state.product.product);

  const showPrice = () => {
    setIsMouseHover(true);
  };
  const unshowPrice = () => {
    setIsMouseHover(false);
  };
  const goToBuy = () => {
    if (selectedSize) {
      setValidated(true);
      navigate("buy", { state: selectedSize });
    } else setValidated(false);
  };
  const selectSize = (size) => {
    setSelectedSize(size);
    setValidated(true);
  };
  useEffect(() => {
    dispatch(productAction.getProductDetail(id));
  }, [selectedSize]);
  return (
    <Container id={style.product_detail}>
      <Row className={style.product_detail_row}>
        <Col className={style.product_detail_col}>
          <img
            src={product?.img}
            alt="상품 디테일"
            className={style.product_detail_img}
          />
        </Col>
        <Col>
          <div className={style.product_detail_title}>{product?.title}</div>
          <div className={style.product_detail_price}>
            ₩{product?.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
          </div>
          <div className={style.product_detail_choice}>
            {product?.choice ? "Conscious Choice" : <br />}
          </div>
          <div>
            <ButtonGroup>
              {product?.size.map((size, key) => (
                <Button
                  key={key}
                  className={`${style.product_detail_size_button} ${
                    selectedSize === size && style.clicked
                  }`}
                  onClick={() => selectSize(size)}
                >
                  {size}
                </Button>
              ))}
            </ButtonGroup>
          </div>
          {!validated && (
            <div className={style.size_validation_label}>
              사이즈를 선택해주세요
            </div>
          )}
          <Button
            className={style.product_detail_buy}
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
