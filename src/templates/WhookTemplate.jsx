import React from 'react';
import { ContentComponent } from '../components';
// import list from '../util/data';

export default function WhookTemplate() {
  const list = [
    { title: '1', content: 'test1' },
    { title: '2', content: 'test2' },
    { title: '3', content: 'test3' },
    { title: '4', content: 'test4' },
    { title: '5', content: 'test5' },
    { title: '6', content: 'test6' },
    { title: '7', content: 'test7' },
    { title: '8', content: 'test8' },
  ];
  return (
    <>
      {list.map((val, idx) => (
        <ContentComponent key={idx} />
      ))}
    </>
  );
}
