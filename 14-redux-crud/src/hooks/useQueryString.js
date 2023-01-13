import { useLocation } from "react-router-dom";

const useQueryString = (props) => {
    // 쿼리스트링 문자열 추출
    const { search } = useLocation();

    // 쿼리스트링 문자열을 객체로 변환
    const query = new URLSearchParams(search);

    // 생성된 객체를 JSON으로 변환
    const params = Object.fromEntries(query);

    // 상태값 리턴
    return params;
};

export { useQueryString };
