import React from 'react';
import styled from 'styled-components';
import { useLocation } from 'react-router-dom';
import { Outlet } from 'react-router-dom';
import {
  ListViewComponent,
  SliderComponent,
  FooterComponent,
} from '../components';
import { checkTitle } from '../util';

const WrapMainLayout = styled.div`
  display: flex;
  width: 100%;
  min-width: 245px;
  max-width: 450px;
  margin: 0 auto;
  flex-direction: column;
  flex-basis: 1 1 1 1;
`;

const WrapContentTemplate = styled.div`
  display: flex;
  box-sizing: border-box;
  height: calc(100% - 329px);
  padding: 10px;
  background-color: beige;
  flex-direction: column;
  gap: 12px;
`;

const Curation = styled.div`
  display: flex;
  height: 20px;
  align-items: center;
`;

export default function MainLayout() {
  const path = useLocation().pathname;

  return (
    <WrapMainLayout>
      <ListViewComponent />
      <SliderComponent />
      <WrapContentTemplate>
        <Curation>{checkTitle(path)}</Curation>
        <Outlet />
      </WrapContentTemplate>
      <FooterComponent />
    </WrapMainLayout>
  );
}
