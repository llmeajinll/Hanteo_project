import React, { useRef } from 'react';
import styled from 'styled-components';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import '../style/slick-style.css';
// import { motion, useAnimation } from 'framer-motion';

const WrapSlider = styled.div`
  box-sizing: border-box;
  height: 220px;
  background-color: white;
  margin: 49px 0 0;
  padding: 15px 0 0;
  overflow: hidden;
`;

const SliderContent = styled.div`
  width: 370px;
  height: 175px;
  border: 1px solid lightgray;
  border-radius: 10px;
  background-image: url(${(props) => props.backgroundimage || null});
  background-size: 100%;
  background-position: center;
  cursor: pointer;
`;

export default function SliderComponent() {
  let settings = {
    arrows: false,
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: '20px',
  };

  const banner = [
    { img: 'src/assets/Banner1.png', link: 'https://www.naver.com/' },
    { img: 'src/assets/Banner2.png', link: 'https://www.daum.net/' },
    { img: 'src/assets/Banner3.png', link: 'https://www.google.co.kr/?hl=ko' },
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
