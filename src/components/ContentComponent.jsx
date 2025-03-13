import React from 'react';
import styled from 'styled-components';

const WrapContent = styled.div`
  display: flex;
  height: 40px;
  border-radius: 4px;
  background-color: white;
  color: grey;
  align-items: center;
`;
const ContentTitle = styled.div`
  display: flex;
  width: 55px;
  height: 40px;
  border-radius: 4px;
  background-color: lightgray;
  align-items: center;
  justify-content: center;
  font-size: 12px;
`;

const Content = styled.div`
  padding: 0 0 0 8px;
  font-size: 14px;
`;

export default function ContentComponent(props) {
  const { value } = props;
  return (
    <div>
      <WrapContent>
        <ContentTitle>{value.title}</ContentTitle>
        <Content>{value.content}</Content>
      </WrapContent>
    </div>
  );
}
