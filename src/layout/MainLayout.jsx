import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';
import { Outlet } from 'react-router-dom';
import {
  ListViewComponent,
  SliderComponent,
  FooterComponent,
} from '../components';

const WrapMainLayout = styled.div`
  display: flex;
  width: 100%;
  min-height: 100vh;
  min-width: 245px;
  max-width: 450px;
  margin: 0 auto;
  flex-direction: column;
`;

const WrapContent = styled.div`
  display: flex;
  flex-direction: column;
  background-color: beige;
  flex: 1 1 auto;
  overflow-y: auto;
`;

export default function MainLayout() {
  const contentRef = useRef();
  const [contentHeight, setContentHeight] = useState(0);

  useEffect(() => {
    const contentHeight = contentRef.current.offsetHeight;
    console.log(contentHeight - 145);
    setContentHeight(contentHeight - 145);
  }, []);

  console.log(contentHeight);

  return (
    <WrapMainLayout>
      <ListViewComponent />

      <SliderComponent />

      <WrapContent ref={contentRef}>
        <Outlet height={contentHeight} />
        <FooterComponent />
      </WrapContent>
    </WrapMainLayout>
  );
}
