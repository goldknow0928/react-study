// 리액트 패키지 참조(모든 js 파일의 최 상단에서 필수명시)
import React from 'react';
// 직접 작성한 컴포넌트 참조
import Hello from './Hello';
import World from './World';

// App이라는 이름의 함수형 컴포넌트(재사용 가능한 HTML 조각단위)
// 프로젝트에서 컴포넌트를 렌더링하면 함수에서 반환하고 있는 내용이 브라우저에 나타남
// 반환되는 HTML 코드는 JSX 문법을 사용
// JSX : XML과 비슷한 React 전용 JavaScript 확장 문법
function App() {
  return (
    <div className="App">
      <h1>Hello REACT😊</h1>
      <Hello />
      <World />
    </div>
  );
}

export default App;
