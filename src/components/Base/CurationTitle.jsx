import React from 'react';
import styled from 'styled-components';

const Curation = styled.div`
  display: flex;
  height: 20px;
  padding: 15px;
  align-items: center;
  font-size: 18px;
`;

export default function CurationTitle(props) {
  return (
    <>
      <Curation>{props.children}</Curation>
    </>
  );
}
