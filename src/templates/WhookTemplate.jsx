import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSwipeable } from 'react-swipeable';
import {
  ContentComponent,
  WrapMainContent,
  CurationTitle,
} from '../components';
import { getWhookContent } from '../api/contentApi';

export default function WhookTemplate() {
  const [showContent, setShowContent] = useState([]);
  const [page, setPage] = useState(0);
  const [loading, setLoading] = useState(false);
  const observerRef = useRef(null);
  const navigate = useNavigate();

  const handlers = useSwipeable({
    onSwipedLeft: () => navigate('/event'),
    onSwipedRight: () => navigate('/chart'),
    preventScrollOnSwipe: true,
    trackMouse: true,
  });

  const getContent = async (num) => {
    const { content } = await getWhookContent(num);
    if (content.length > 0) {
      setShowContent((prev) => [...prev, ...content]);
      setLoading(false);
    }
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
      <CurationTitle>Whook</CurationTitle>
      <WrapMainContent>
        {Array.isArray(showContent) &&
          showContent.map((val, idx) => (
            <ContentComponent key={idx} value={val} />
          ))}
        <div
          ref={observerRef}
          style={{ height: '20px', background: 'transparent' }}
        />
      </WrapMainContent>
    </div>
  );
}
