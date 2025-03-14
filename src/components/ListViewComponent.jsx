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
  width: 450px;
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

    // scrollWidth를 scrollContainer의 1/3로 설정하여 초기 위치 설정
    const scrollWidth = scrollContainer.scrollWidth / 3;
    scrollContainer.scrollLeft = scrollWidth;

    const handleScroll = () => {
      // 왼쪽 끝에 도달하면 scrollLeft를 scrollWidth로 설정하여 순환
      if (scrollContainer.scrollLeft <= 0) {
        scrollContainer.scrollLeft = scrollWidth;
        // 오른쪽 끝에 도달하면 scrollLeft를 scrollWidth * 2로 설정하여 순환
      } else if (scrollContainer.scrollLeft >= scrollWidth * 2) {
        scrollContainer.scrollLeft = scrollWidth;
      }
    };
    // 이벤트 리스너 추가
    scrollContainer.addEventListener('scroll', handleScroll);
    // 컴포넌트가 언마운트될 때 이벤트 리스너 제거
    return () => scrollContainer.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <ScrollContainer ref={scrollRef}>
      {/* 스크롤이 양끝에 도착하면 다시 처음으로 돌아가게 하기 위해 카테고리 list를 3번 반복 */}
      {[...list, ...list, ...list].map((val, idx) => (
        <ListContent
          key={idx}
          status={path === val.location ? 'true' : 'false'}
          onClick={() => navigate(val.location)}
        >
          {val.name}
        </ListContent>
      ))}
    </ScrollContainer>
  );
}
