import React from 'react';
import styled from 'styled-components';

const WrapContent = styled.div`
  display: flex;
  height: 40px;
  border-radius: 4px;
  background-color: white;
`;
const ContentTitle = styled.div`
  width: 55px;
  height: 40px;
  border-radius: 4px;
  background-color: lightgray;
`;

export default function ContentComponent(props) {
  const { value } = props;
  return (
    <div>
      <WrapContent>
        <ContentTitle>{value.title}</ContentTitle>
        <>{value.content}</>
      </WrapContent>
    </div>
  );
}
