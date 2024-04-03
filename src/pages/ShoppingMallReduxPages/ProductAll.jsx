import React, { useEffect } from "react";
import ProductCard from "../../component/ShoppingMallReduxComponent/ProductCard";
import { useSearchParams } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import style from "../../styles/ShoppingMallRedux/ShoppingMallRedux.module.css";
// import { productAction } from "../../redux/ShoppingMallRedux/actions/productAction";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../../redux/ShoppingMallRedux/reducers/productSlice";
import { Spinner } from "react-bootstrap";

const ProductAll = () => {
  const productList = useSelector((state) => state.product.productList);
  const [query, setQuery] = useSearchParams();
  const dispatch = useDispatch();
  const isLoading = useSelector((state) => state.product.isLoading);

  const getProducts = async () => {
    let selectQuery = query.get("q") || "";
    dispatch(fetchProducts(selectQuery));
  };

  useEffect(() => {
    getProducts();
  }, [query]);
  return (
    <Container id={style.product_all_container}>
      {isLoading ? (
        <Spinner animation="border"></Spinner>
      ) : (
        <>
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
            {productList.map((product, key) => (
              <Col
                key={key}
                lg={3}
                className={`${style.product_col} col-xl-3 col-md-4 col-6`}
              >
                <ProductCard item={product} key={key} />
              </Col>
            ))}
          </Row>
        </>
      )}
    </Container>
  );
};

export default ProductAll;
