import React, { useState, useEffect, useRef } from 'react';
import { useNavigate, useOutletContext } from 'react-router-dom';
import { useSwipeable } from 'react-swipeable';
import {
  ContentComponent,
  WrapMainContent,
  CurationTitle,
} from '../components';
import { getEventContent } from '../api/contentApi';

export default function EventTemplate() {
  const [showContent, setShowContent] = useState([]);

  const [page, setPage] = useState(0);
  const [loading, setLoading] = useState(false);
  const observerRef = useRef(null);
  const navigate = useNavigate();
  const height = useOutletContext();

  const handlers = useSwipeable({
    onSwipedLeft: () => navigate('/news'),
    onSwipedRight: () => navigate('/whook'),
    preventScrollOnSwipe: true,
    trackMouse: true,
  });

  const getContent = async (num) => {
    console.log(page);
    const { content } = await getEventContent(num);
    console.log(content);
    setShowContent((prev) => [...prev, ...content]);
    setLoading(false);
  };

  useEffect(() => {
    setLoading(true);
    getContent(page);
  }, [page]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !loading) {
          setPage((prevPage) => prevPage + 8);
        }
      },
      { threshold: 1.0 }
    );

    if (observerRef.current) observer.observe(observerRef.current);

    return () => observer.disconnect();
  }, [loading]);

  return (
    <div {...handlers}>
      <CurationTitle>이벤트</CurationTitle>

      <WrapMainContent height={height}>
        {Array.isArray(showContent) &&
          showContent.map((val, idx) => (
            <ContentComponent key={idx} value={val} />
          ))}
        <div
          ref={observerRef}
          style={{ height: '20px', background: 'transparent' }}
        />
        {loading && <p>🔄 로딩 중...</p>}
      </WrapMainContent>
    </div>
  );
}
