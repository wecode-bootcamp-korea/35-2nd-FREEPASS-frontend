import React, { useEffect, useRef } from 'react';
import './CustomOverlay.css';

const RightCont = ({ mapInfo }) => {
  const mapRef = useRef();
  const { kakao } = window;

  useEffect(() => {
    const container = document.getElementById('jejuMap');
    const options = {
      center: new kakao.maps.LatLng(36.4185, 128.1557),
      level: 13,
    };
    mapRef.current = new kakao.maps.Map(container, options);

    const overlayInfos = mapInfo?.map(info => {
      return {
        title: info.name,
        lat: info.latitude,
        lng: info.longtitude,
        img: info.image_url,
        price: info.price,
        region: info.region,
        desc: info.description,
      };
    });

    overlayInfos.forEach(data => {
      let content = `<div class="overlayAirBox"><div class="imgBox"><img class="overlayAirImg" src=${
        data.img
      }/></div><div class="AirInfoWrap"><h2 class="AirName">${
        data.title
      }</h2><span class="AirRegion">${
        data.region
      }</span></span><strong class="AirPrice">${Number(
        data.price
      ).toLocaleString()}</strong></div><div class="Arrow"></div></div><div class="btView">`;

      let position = new kakao.maps.LatLng(data.lat, data.lng);

      let customOverlay = new kakao.maps.CustomOverlay({
        position: position,
        content: content,
      });

      customOverlay.setMap(mapRef.current);

      // 지도 마커입니다. 예비용으로 두겠습니다.
      // let markerPosition = new kakao.maps.LatLng(data.lat, data.lng);
      // let marker = new kakao.maps.Marker({
      //   position: markerPosition,
      // });
      // marker.setMap(mapRef.current);

      <span class="AirDesc">${data.desc}</span>;
    });
  }, [kakao.maps.CustomOverlay, kakao.maps.LatLng, kakao.maps.Map, mapInfo]);

  const isData = mapInfo.length !== 0;

  return !isData ? (
    <h2>로딩중입니다....</h2>
  ) : (
    <div
      id="jejuMap"
      style={{
        width: '100%',
        height: '100%',
      }}
    />
  );
};

export default RightCont;
