// 패키지 참조
import { createGlobalStyle } from 'styled-components';
// reset.css
import reset from 'styled-reset';

const GlobalStyles = createGlobalStyle`
    ${reset}

    html,
    body { 
        font-family: 'Montserrat', 'NotoSansKR', sans-serif;
        font-weight: 400;
        -webkit-font-smoothing: antialiased;
        color: #222;
    }
`;

export default GlobalStyles;