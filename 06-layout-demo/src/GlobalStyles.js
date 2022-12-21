// 패키지 참조
import { createGlobalStyle } from 'styled-components';
// reset.css
import reset from 'styled-reset';

const GlobalStyles = createGlobalStyle`
    ${reset}

    * {
        font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    }

    body {
        margin: 0;
        padding: 0;
    }
`;

export default GlobalStyles;