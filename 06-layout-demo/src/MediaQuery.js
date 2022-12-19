import breakpoints from 'styled-components-breakpoints';

const sizes = {
    sm: 600,
    md: 768,
    lg: 992,
    xl: 1200
};

// 기준 사이즈를 활용하여 media query 생성
export default breakpoints(sizes);