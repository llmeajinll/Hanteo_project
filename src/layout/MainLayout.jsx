import React from 'react';
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
  border-top: 0.5px solid lightgray;
  flex-direction: column;
  background-color: #f1f1f1;
  flex: 1 1 auto;
  overflow-y: auto;
`;

export default function MainLayout() {
  return (
    <WrapMainLayout>
      <ListViewComponent />

      <SliderComponent />

      <WrapContent>
        <Outlet />
      </WrapContent>
      <FooterComponent />
    </WrapMainLayout>
  );
}
