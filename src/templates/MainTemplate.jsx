import React, { useState, useEffect, useRef } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useSwipeable } from 'react-swipeable';
import {
  ContentComponent,
  WrapMainContent,
  CurationTitle,
} from '../components';
import {
  getChartContent,
  getEventContent,
  getStoreContent,
  getChargeContent,
  getWhosFanContent,
  getAwardsContent,
  getNewsContent,
  getWhookContent,
} from '../api/contentApi';
import checkTitle from '../util/checkTitle';

export default function MainTemplate() {
  const navigate = useNavigate();
  const pathname = useLocation().pathname;

  const apiMap = {
    '/chart': getChartContent,
    '/event': getEventContent,
    '/store': getStoreContent,
    '/charge': getChargeContent,
    '/awards': getAwardsContent,
    '/whosfan': getWhosFanContent,
    '/news': getNewsContent,
    '/whook': getWhookContent,
  };

  const router = {
    '/chart': { left: '/whook', right: '/awards' },
    '/event': { left: '/news', right: '/whook' },
    '/store': { left: '/charge', right: '/news' },
    '/charge': { left: '/whosfan', right: '/store' },
    '/awards': { left: '/chart', right: '/whosfan' },
    '/whosfan': { left: '/awards', right: '/charge' },
    '/news': { left: '/store', right: '/event' },
    '/whook': { left: '/event', right: '/chart' },
  };

  const [showContent, setShowContent] = useState([]);
  const [page, setPage] = useState(0);

  const [loading, setLoading] = useState(false);
  const observerRef = useRef(null);

  // 현재 라우터에 따라 슬라이드로 이동하는 카테고리가 다름
  const handlers = useSwipeable({
    onSwipedLeft: () => navigate(router[pathname].left), // 오른쪽에서 왼쪽으로 슬라이드 시 카테고리 이동
    onSwipedRight: () => navigate(router[pathname].right), // 왼쪽에서 오른쪽으로 슬라이드 시 카테고리 이동
    preventScrollOnSwipe: true, // 스크롤 방지
  });

  const getContent = async (num) => {
    const fetchApi = apiMap[pathname];
    const { content } = await fetchApi(num);
    if (content.length > 0) {
      setShowContent((prev) => [...prev, ...content]);
      setLoading(false);
    }
  };

  useEffect(() => {
    setPage(() => 0);
    setShowContent([]);
  }, [pathname]);

  useEffect(() => {
    setLoading(true);
    getContent(page);
  }, [page]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !loading) {
          setPage((prev) => prev + 8);
        }
      },
      { threshold: 1.0 }
    );

    if (observerRef.current) observer.observe(observerRef.current);

    return () => observer.disconnect();
  }, [loading]);

  return (
    <div {...handlers}>
      <CurationTitle>{checkTitle(pathname)}</CurationTitle>

      <WrapMainContent>
        {Array.isArray(showContent) &&
          showContent.map((val) => (
            <ContentComponent key={val.id} value={val} />
          ))}
        <div
          ref={observerRef}
          style={{ height: '20px', background: 'transparent' }}
        />
      </WrapMainContent>
    </div>
  );
}
