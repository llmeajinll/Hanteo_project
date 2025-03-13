import React, { useState, useEffect } from 'react';
import { useNavigate, useOutletContext } from 'react-router-dom';
import styled from 'styled-components';
import { useSwipeable } from 'react-swipeable';
import { ContentComponent, WrapMainContent } from '../components';
import { list } from '../util/data';

const Curation = styled.div`
  display: flex;
  height: 20px;
  padding: 15px;
  align-items: center;
  font-size: 18px;
`;

export default function WhosfanTemplate() {
  const navigate = useNavigate();
  const height = useOutletContext();
  console.log(height);

  const [showContent, setShowContent] = useState(list.slice(0, 8));

  const handlers = useSwipeable({
    onSwipedLeft: () => navigate('/awards'),

    onSwipedRight: () => navigate('/charge'),
    preventScrollOnSwipe: true,
    trackMouse: true,
  });

  useEffect(() => {}, []);
  return (
    <div {...handlers}>
      <Curation>WhosFan</Curation>
      <WrapMainContent height={height}>
        {showContent.map((val, idx) => (
          <ContentComponent key={idx} />
        ))}
      </WrapMainContent>
    </div>
  );
}
