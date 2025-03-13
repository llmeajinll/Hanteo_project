# 한터글로벌 코딩테스트 프로젝트

vercel url: https://hanteo-project.vercel.app/

### 결과 페이지

<img src="./public/images/screenshot1.png" width="350" />

## 1. 구현 방법

무한 루프동작 슬라이드
```
import Slider from 'react-slick';
// react-slick의 기본 스타일링
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import '../style/slick-style.css'; // Slider css 커스텀

// Slider 기초 세팅
let settings = {
  arrows: false, // 화살표 유무
  dots: true, // 점 유무
  infinite: true, // 무한 루프 유무
  speed: 500, // 애니메이션 속도
  slidesToShow: 1, // 한번에 보일 슬라이드 수
  slidesToScroll: 1, // 한번에 넘길 슬라이드 수
  centerMode: true, // 슬라이드 중앙 정렬
  centerPadding: '20px', // 슬라이드의 양옆의 패딩
};

return (
  <WrapSlider className='slider-container'>
    <Slider {...settings}>
      ... // 슬라이드 카드 넣기
    </Slider>
  </WrapSlider>
);
```


무한 스크롤
```
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
  <div
    ref={observerRef}
    style={{ height: '20px', background: 'transparent' }}
  />
);
```

슬라이드 터치
```
const handlers = useSwipeable({
    onSwipedLeft: () => navigate(router[pathname].left), // 오른쪽에서 왼쪽으로 슬라이드 시 카테고리 이동
    onSwipedRight: () => navigate(router[pathname].right), // 왼쪽에서 오른쪽으로 슬라이드 시 카테고리 이동
    preventScrollOnSwipe: true, // 스크롤 방지
  });

return (
    <div {...handlers}>
      ... // 내부에서 슬라이드 시 작동
    </div>
)
```


### 사용한 라이브러리

react-slick, slick-carousel : 높은 커스터마이징을 제공하고, 간단한 설정으로 무한 슬라이드 기능을 구현할 수 있어 채택

react-swipeable : 가볍고 직관적인 api로 빠르게 구현할 수 있어 채택

msw : 무한 스크롤 구현시 클라이언트에서 네트워크 요청을 더 사실적으로 테스트하고 싶었고, 클라이언트와 서버의 동작을 동일한 방식으로 mocking할 수 있어 채택

## 2. 실행 방법
```
yarn run dev
```

## 3. 느낀점
항상 페이지네이션만 하다가 처음으로 무한 스크롤을 구현해보았다. 재밌었다.

## 4. 문제 해결
https://velog.io/@llmeajinll/series/%ED%94%84%EB%A1%9C%EC%A0%9D%ED%8A%B8



