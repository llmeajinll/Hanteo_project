import React from 'react';
import styled from 'styled-components';

const MainContent = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1 1 auto;
  gap: 18px;
  padding: 0 15px 15px;
`;

export default function WrapMainContent(props) {
  return (
    <>
      <MainContent>{props.children}</MainContent>
    </>
  );
}
