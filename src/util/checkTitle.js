import React from 'react';

export default function checkTitle(path) {
  console.log(path);
  switch (path) {
    case '/chart':
      return '차트';
    case '/whook':
      return 'Whook';
    case '/event':
      return '이벤트';
    case '/news':
      return '뉴스';
    case '/store':
      return '스토어';
    case '/charge':
      return '충전소';
    case '/whosfan':
      return 'WhosFan';
    case '/awards':
      return '어워즈';
  }
}
