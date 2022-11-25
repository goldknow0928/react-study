### 01. 추가 패키지 설치

react-router-dom : SPA 앱을 만들 때 사용. URL에 따라 실행할 JavaScript를 분기한다.
`yarn add react-router-dom`

<br>
<br>

### 02. Router 적용

**index.js**

import 구문 추가
`import { BrowserRouter } from 'react-router-dom';`

**App.js**

`import { Link, Routes, Route } from 'react-router-dom';`

**프로젝트 실행**

`yarn start`

<br>
<br>

### 03. Single Page Application(SPA)

하나의 HTML 페이지로 다수의 페이지 효과를 내는 구현 방식.
js 파일로 웹 페이지 화면을 변경하는 형태로 구현된다.

**1)Router**

- 분배하는 기능을 수행하는 소프트웨어나 하드웨어
- 대표적인 라우터로는 아이피공유기가 있다.
- React의 router는 URL에 의해 컴포넌트를 분배하는 기능을 한다.
- HTML5에서 Javascript에 추가된 기능중 history객체를 통해 URL을 변하는 기능이 있다.
- React의 Router는 이 기능을 활용하여 현재 페이지의 URL을 다양하게 변조하여 거기에 각각의 컴포넌트를 분배한다.

**2) SPA개발의 장점**

- 페이지 이동 없이 JS에 의해 화면이 갱신되므로 실제로 네트워크 통신이 발생하지 않아 실행 속도가 빠르다

**3) SPA개발의 단점**

- JS코드가 비대해 질 수 있다. 코스 스플리팅 기법으로 해결가능(코드 분할 작성)
- 하나의 HTML이므로 SEO에 취약하다(SSR으로 해결가능 > Next.js)
- 서버사이트렌더링 = React + Node / React + PHP / React + Java(Spring)
