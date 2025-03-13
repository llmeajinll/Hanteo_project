import React from 'react';
import styled from 'styled-components';

const WrapFooter = styled.div`
  box-sizing: border-box;
  height: 80px;
  background-color: white;
  border-top: 0.5px solid lightgray;
  margin-top: auto;
  padding: 10px;
  font-size: 12px;
  color: gray;
  text-align: center;
`;

export default function FooterComponent() {
  return (
    <WrapFooter>
      Copyright ⓒ HANTEO GLOBAL, Inc. All Rights Reserved
      <br />
    </WrapFooter>
  );
}
