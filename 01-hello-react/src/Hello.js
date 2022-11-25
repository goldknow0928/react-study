// 리액트의 기본을 구성하는 패키지 참조
import React from 'react';

// 함수형 컴포넌트 정의
// 함수 이름은 혼선을 방지하기 위해 소스파일 이름과 동일하게 구성하는 것이 일반적
const Hello = () => {
    // 리턴은 항상 HTML구조를 의미하는 JSX 문법이어야 하고,
    // JSX 구조는 무조건 단 하나의 태그요소만 반환해야 한다.
    // >> 복잡한 구조는 부모 요소 하나에 모두 포함되어야 한다는 의미이다.
    return (
        <h2>
            Hello😄
        </h2>
    );
};

export default Hello;