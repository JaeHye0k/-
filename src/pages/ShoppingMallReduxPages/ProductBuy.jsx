import React, { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import { useDaumPostcodePopup } from "react-daum-postcode";
import { postcodeScriptUrl } from "react-daum-postcode/lib/loadPostcode";
import useWindowDimensions from "../../hooks/useWindowDimensions";
import { Button } from "react-bootstrap";
import style from "../../styles/ShoppingMallRedux/ShoppingMallRedux.module.css";
import { useSelector, useDispatch } from "react-redux";
import { productActions } from "../../redux/ShoppingMallRedux/actions/productActions";

const deliveryRequest = [
  "부재 시 경비실에 맡겨주세요",
  "부재 시 택배함에 넣어주세요",
  "부재 시 집 앞에 놔주세요",
  "배송 전 연락 바랍니다",
  "파손의 위험이 있는 상품입니다. 배송 시 주의해 주세요.",
];

const ProductBuy = () => {
  const location = useLocation();
  const { id } = useParams();
  const product = useSelector((state) => state.product.product);
  const open = useDaumPostcodePopup(postcodeScriptUrl);
  const [address, setAddress] = useState();
  const { height, width } = useWindowDimensions();
  const dispatch = useDispatch();

  const handleComplete = (data) => {
    const zonecode = data.zonecode;
    const address = data.address;
    const buildingName = data.buildingName;
    setAddress(`(${zonecode}) ${address} (${buildingName})`);
  };

  const searchAddress = () => {
    open({ onComplete: handleComplete });
  };
  useEffect(() => {
    dispatch(productActions.getProductDetail(id));
  }, [width]);

  return (
    <div id={style.product_buy}>
      <div className={style.delivery_info}>
        <div className={style.delivery_info_title}>배송 정보</div>
        <ul>
          <li>
            <span>배송지</span>
            <div>
              <button className={style.select_adress} onClick={searchAddress}>
                배송지 선택
              </button>
            </div>
          </li>
          <li>
            <span>닉네임</span>
            <div>{localStorage.getItem("id")}</div>
          </li>
          <li>
            <span>주소</span>
            <div>{address ? address : ""}</div>
          </li>
          <li className={style.delivery_request}>
            {width >= 500 ? <span>배송 요청사항</span> : ""}

            <div>
              {width < 500 ? <span>배송 요청사항</span> : ""}
              <select className={style.select_request} defaultValue="default">
                <option value="default">배송 시 요청사항을 선택해주세요</option>
                {deliveryRequest.map((request, key) => (
                  <option value={request} key={key}>
                    {request}
                  </option>
                ))}
                <option value="etc">직접입력</option>
              </select>
            </div>
          </li>
        </ul>
      </div>
      <div className={style.product_info}>
        <div className={style.product_info_title}>상품 정보</div>
        <table border={1}>
          <colgroup>
            <col />
            <col width={70} />
            <col width={70} />
            <col width={70} />
            <col width={100} />
          </colgroup>
          <thead>
            <tr>
              <th>상품 정보</th>
              <th>신상품</th>
              <th>수량</th>
              <th>사이즈</th>
              <th>주문 금액</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className={style.product_table_info}>
                <img
                  src={product?.img}
                  alt="product"
                  className={style.product_img}
                />
                <span>{product?.title}</span>
              </td>
              <td>{product?.new ? "Y" : "N"}</td>
              <td>1개</td>
              <td>{location.state ? location.state : ""}</td>
              <td>
                ₩
                {product?.price
                  .toString()
                  .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                원
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <Button className={style.pay_button}>결제</Button>
    </div>
  );
};

export default ProductBuy;
