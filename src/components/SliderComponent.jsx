import React, { useRef } from 'react';
import styled, { keyframes } from 'styled-components';
// import { motion, useAnimation } from 'framer-motion';

const WrapSlider = styled.div`
  height: 200px;
  background-color: skyblue;
`;

// const slideAnimation = keyframes`
//   from { transform: translateX(0); }
//   to { transform: translateX(-100%); }
// `;

// const SliderContainer = styled.div`
//   overflow: hidden;
//   width: 100%;
//   display: flex;
//   align-items: center;
//   position: relative;
// `;

// const SlideTrack = styled(motion.div)`
//   display: flex;
//   width: max-content;
//   animation: ${slideAnimation} 10s linear infinite;
// `;

// const Slide = styled.div`
//   min-width: 200px;
//   height: 150px;
//   margin: 0 10px;
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   background: #3498db;
//   color: white;
//   font-size: 1.5rem;
//   border-radius: 10px;
// `;

// const WrapSlider = styled.div`
//   height: 170px;
//   overflow: hidden;
//   background-color: lightblue;
// `;

export default function SliderComponent() {
  //   const controls = useAnimation();
  //   const trackRef = useRef(null);

  return (
    // <SliderContainer
    //   onMouseEnter={() => controls.stop()}
    //   onMouseLeave={() => controls.start({ x: 0 })}
    // >
    //   <SlideTrack ref={trackRef} animate={controls}>
    //     {[...Array(10).keys()].map((i) => (
    //       <Slide key={i}>Slide {i + 1}</Slide>
    //     ))}
    //     {[...Array(10).keys()].map((i) => (
    //       <Slide key={i + 10}>Slide {i + 1}</Slide>
    //     ))}
    //   </SlideTrack>
    // </SliderContainer>
    <WrapSlider></WrapSlider>
  );

  //   return <WrapSlider>SliderComponent</WrapSlider>;
}
