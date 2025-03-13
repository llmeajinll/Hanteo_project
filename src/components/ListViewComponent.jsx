import React, { useRef, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const ListContent = styled.button`
  color: ${(props) => (props.status === 'true' ? 'white' : 'black')};
  font-weight: 600;
  padding: 5px 10px;
  border: none;
  font-size: 16px;
  background-color: transparent;
  cursor: pointer;
`;

const ScrollContainer = styled.div`
  position: fixed;
  display: flex;
  width: 100%;
  white-space: nowrap;
  background-color: pink;
  padding: 10px 0;
  overflow-x: auto;
  align-items: center;
  top: 0;
  z-index: 99;

  scrollbar-width: none;
  -ms-overflow-style: none;

  &::-webkit-scrollbar {
    display: none;
  }
`;

const ScrollContent = styled.div`
  display: flex;
  align-items: center;
`;

export default function ListViewComponent() {
  const navigate = useNavigate();
  const location = useLocation();
  const path = location.pathname;
  const list = [
    { name: '차트', location: '/chart' },
    { name: 'Whook', location: '/whook' },
    { name: '이벤트', location: '/event' },
    { name: '뉴스', location: '/news' },
    { name: '스토어', location: '/store' },
    { name: '충전소', location: '/charge' },
    { name: 'WhosFan', location: '/whosfan' },
    { name: '어워즈', location: '/awards' },
  ];

  const scrollRef = useRef(null);

  useEffect(() => {
    const scrollContainer = scrollRef.current;

    if (!scrollContainer) return;

    const scrollWidth = scrollContainer.scrollWidth / 3;
    scrollContainer.scrollLeft = scrollWidth;

    const handleScroll = () => {
      if (scrollContainer.scrollLeft <= 0) {
        scrollContainer.scrollLeft = scrollWidth;
      } else if (scrollContainer.scrollLeft >= scrollWidth * 2) {
        scrollContainer.scrollLeft = scrollWidth;
      }
    };

    scrollContainer.addEventListener('scroll', handleScroll);
    return () => scrollContainer.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <ScrollContainer ref={scrollRef}>
      <ScrollContent>
        {[...list, ...list, ...list].map((val, idx) => (
          <ListContent
            key={idx}
            status={path === val.location ? 'true' : 'false'}
            onClick={() => navigate(val.location)}
          >
            {val.name}
          </ListContent>
        ))}
      </ScrollContent>
    </ScrollContainer>
  );
}
