import React from 'react';
import styled from 'styled-components';
import Slider from 'react-slick';
// react-slick의 기본 스타일링
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import '../style/slick-style.css'; // Slider css 커스텀

const WrapSlider = styled.div`
  box-sizing: border-box;
  height: 220px;
  background-color: white;
  margin: 49px 0 0;
  padding: 15px 0 0;
  overflow: hidden;
  z-index: 0;
`;

const SliderContent = styled.div`
  width: 370px;
  height: 175px;
  border: 1px solid lightgray;
  border-radius: 10px;
  background-image: url(${(props) => props.backgroundimage || null});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  cursor: pointer;
`;

export default function SliderComponent() {
  // Slider 기초 세팅
  let settings = {
    arrows: false, // 화살표 유무
    dots: true, // 점 유무
    infinite: true, // 무한 루프 유무
    speed: 500, // 애니메이션 속도
    slidesToShow: 1, // 한번에 보일 슬라이드 수
    slidesToScroll: 1, // 한번에 넘길 슬라이드 수
    centerMode: true, // 슬라이드 중앙 정렬
    centerPadding: '20px', // 슬라이드의 양옆의 패딩
  };

  const banner = [
    { img: '/images/Banner1.webp', link: 'https://www.naver.com/' },
    { img: '/images/Banner2.webp', link: 'https://www.daum.net/' },
    { img: '/images/Banner3.webp', link: 'https://www.google.co.kr/?hl=ko' },
  ];

  return (
    <WrapSlider className='slider-container'>
      <Slider {...settings}>
        {banner.map((val, idx) => (
          <SliderContent
            key={idx}
            backgroundimage={val.img}
            onClick={() => window.open(val.link, '_blank')}
          />
        ))}
      </Slider>
    </WrapSlider>
  );
}
