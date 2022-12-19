// 패키지 참조
import { createGlobalStyle } from 'styled-components';
// reset.css
import reset from 'styled-reset';

const GlobalStyles = createGlobalStyle`
    ${reset}

    * {
        font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    }
`;

export default GlobalStyles;