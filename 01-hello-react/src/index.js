// 리액트의 기본을 구성하는 패키지 참조
import React from 'react';
// 리액트가 DOM을 구성하기 위한 기능을 참조
import ReactDOM from 'react-dom/client';
// 이 소스파일과 동일한 위치의 App.js를 App이라는 이름으로 가져온다.
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <App />
);