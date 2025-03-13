import React, { Children } from 'react';
import styled from 'styled-components';

const MainContent = styled.div`
  display: flex;
  /* height: ${(props) => props.height + 'px' || '0px'}; */
  flex-direction: column;
  flex: 1 1 auto;
  gap: 18px;
  padding: 0 15px 15px;
`;

export default function WrapMainContent(props) {
  console.log(props);
  return <MainContent height={props.height}>{props.children}</MainContent>;
}
