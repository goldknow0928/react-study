/**
 * 텍스트에 대한 색상 강조 효과를 지정하기 위한 스타일컴포넌트
 */
import styled from "styled-components";

/** 성별을 표시하기 위한 텍스트 라벨 */
const SexLabel = styled.span`
    &:before {
        color: ${({ sex }) => (sex === "male" ? "#06f" : "#c0c")};
        content: "${({ sex }) => (sex === "male" ? "남자" : "여자")}";
        font-weight: 600;
    }
`;

/** 탑승지를 표시하기 위한 텍스트 라벨 */
const EmbarkedLabel = styled.span`
    &:before {
        color: ${({ embraked }) => (embraked === "C" ? "#f60" : embraked === "Q" ? "#00f" : "#990")};
        content: "${({ embraked }) => (embraked === "C" ? "세르부르" : embraked === "Q" ? "퀸즈타운" : "사우샘프턴")}";
        font-weight: 600;
    }
`;

/** 생존여부를 표시하기 위한 텍스트 라벨 */
const SurvivedLabel = styled.span`
    &:before {
        background-color: ${({ survived }) => (survived ? "#090" : "#e00")};
        content: "${({ survived }) => (survived ? "생존" : "사망")}";
        color: #fff;
        padding: 3px 10px;
    }
`;

export { SexLabel, EmbarkedLabel, SurvivedLabel };
