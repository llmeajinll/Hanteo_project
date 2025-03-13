import React from 'react';
import styled from 'styled-components';

const WrapContent = styled.div`
  height: 40px;
  border-radius: 4px;
  background-color: white;
`;
const ContentTitle = styled.div`
  width: 60px;
  height: 40px;
  border-radius: 4px;
  background-color: gray;
`;

export default function ContentComponent() {
  return (
    <div>
      <WrapContent>
        <ContentTitle />
      </WrapContent>
    </div>
  );
}
