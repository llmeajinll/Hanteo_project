import React, { useState, useEffect } from 'react';
import { useNavigate, useOutletContext } from 'react-router-dom';
import styled from 'styled-components';
import { useSwipeable } from 'react-swipeable';
import { ContentComponent, WrapMainContent } from '../components';
// import list from '../util/data';

const Curation = styled.div`
  display: flex;
  height: 20px;
  padding: 15px;
  align-items: center;
  font-size: 18px;
`;

export default function ChartTemplate() {
  const navigate = useNavigate();
  const height = useOutletContext();
  console.log(height);

  const list = [
    { title: '1', content: 'test1' },
    { title: '2', content: 'test2' },
    { title: '3', content: 'test3' },
    { title: '4', content: 'test4' },
    { title: '5', content: 'test5' },
    { title: '6', content: 'test6' },
    { title: '7', content: 'test7' },
    { title: '8', content: 'test8' },

    { title: '9', content: 'test9' },
    { title: '10', content: 'test10' },
    { title: '11', content: 'test11' },
    { title: '12', content: 'test12' },
    { title: '13', content: 'test13' },
    { title: '14', content: 'test14' },
    { title: '15', content: 'test15' },
    { title: '16', content: 'test16' },
  ];

  const [showContent, setShowContent] = useState(list.slice(0, 8));

  const handlers = useSwipeable({
    onSwipedLeft: () => navigate('/whook'),

    onSwipedRight: () => navigate('/awards'),
    preventScrollOnSwipe: true,
    trackMouse: true,
  });

  useEffect(() => {}, []);
  return (
    <div {...handlers}>
      <Curation>차트</Curation>
      <WrapMainContent height={height}>
        {showContent.map((val, idx) => (
          <ContentComponent key={idx} />
        ))}
      </WrapMainContent>
    </div>
  );
}
