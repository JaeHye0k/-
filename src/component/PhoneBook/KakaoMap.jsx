import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import "../../styles/PhoneBook/PhoneBook.css";

const { kakao } = window;

const KakaoMap = () => {
  const dispatch = useDispatch();
  const contactList = useSelector((state) => state.contactList);
  const REST_API_KEY = "d146c69a13c3c1dab7c5d7a2a4de2e25";
  // 현재 위치 구하기
  const showKakaoMap = () => {
    navigator.geolocation.getCurrentPosition((position) => {
      let lat = position.coords.latitude;
      let lon = position.coords.longitude;
      const container = document.getElementById("map");
      const options = {
        center: new kakao.maps.LatLng(lat, lon), // 지도의 중심 좌표
        level: 4, // 지도 확대 축소 정도
      };
      const map = new kakao.maps.Map(container, options); // 지도 생성 및 객체 리턴

      // 지도 영역 이동 이벤트
      kakao.maps.event.addListener(map, "dragend", () => {
        // 지도 중심 좌표를 얻음
        const latlng = map.getCenter();

        // 중심 좌표 재설정
        lat = latlng.getLat();
        lon = latlng.getLng();
        searchByCartegory();
      });
      const searchByCartegory = async () => {
        console.log(lat, lon);
        const url = `https://dapi.kakao.com/v2/local/search/category.json?category_group_code=FD6&x=${lon}&y=${lat}&radius=20000`;
        const response = await fetch(url, {
          headers: {
            Authorization: `KakaoAK ${REST_API_KEY}`,
          },
        });
        const data = await response.json();
        console.log(data);
        data.documents.forEach(({ x, y, place_name, phone, place_url }) => {
          // 마커가 표시될 위치
          let markerPosition = new kakao.maps.LatLng(y, x);

          // 마커 객체 생성
          const marker = new kakao.maps.Marker({
            position: markerPosition,
            clickable: true, // 마커를 클릭했을 때 지도의 클릭 이벤트가 발생하지 않도록 설정
          });

          // 마커 객체에 프로퍼티 추가
          marker.place_name = place_name;
          marker.phone = phone;

          // 마커에 클릭 이벤트 추가
          kakao.maps.event.addListener(marker, "click", () => {
            dispatch({
              type: "ADD_CONTACT",
              payload: { name: place_name, tel: phone },
            });
          });

          const infoWindow = new kakao.maps.InfoWindow({
            position: new kakao.maps.LatLng(lat, lon),
            content: `<div style="padding:5px;">
              <a href="${place_url}" style="color:blue; text-decoration:none" target="_blank">${place_name}</a>
              <br>${phone}</div>`,
          });

          // 마커에 hover 이벤트 추가
          kakao.maps.event.addListener(marker, "mouseover", () => {
            // 마커 위에 인포윈도우 표시
            infoWindow.open(map, marker);
          });

          kakao.maps.event.addListener(marker, "mouseout", () => {
            setTimeout(() => {
              // 인포윈도우 닫기
              infoWindow.close();
            }, 800);
          });

          // 마커를 지도에 표시
          marker.setMap(map);
        });
      };
      searchByCartegory();
    });
  };

  useEffect(() => {
    showKakaoMap();
  }, []);
  return <div id="map"></div>;
};

export default KakaoMap;
