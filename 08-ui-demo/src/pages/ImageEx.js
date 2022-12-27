import React, { memo } from "react";
import styled from "styled-components";

import img01 from "../assets/img/img01.jpg";
import img02 from "../assets/img/img02.jpg";
import img03 from "../assets/img/img03.jpg";
import img04 from "../assets/img/img04.jpg";
import img05 from "../assets/img/img05.jpg";

// 썸네일 리스트에 대한 스타일컴포넌트
const ThumbList = styled.ul`
    display: flex;
    width: 640px;
    margin: 0 auto;
    padding: 0;
    list-style: none;

    li {
        width: 20%;

        a {
            display: block;
            margin: 10px;

            img {
                width: 100%;
            }
        }
    }
`;

// 이미지 뷰어 영역에 대한 스타일컴포넌트
const Viewer = styled.div`
    width: 620px;
    margin: auto;
    padding: 0 10px;

    img {
        width: 100%;
        object-fit: cover;
    }
`;

// 썸네일로 표시할 이미지와 제목에 대한 JSON 배열
const imgList = [
    { img: img01, title: "테스트 이미지 1" },
    { img: img02, title: "테스트 이미지 2" },
    { img: img03, title: "테스트 이미지 3" },
    { img: img04, title: "테스트 이미지 4" },
    { img: img05, title: "테스트 이미지 5" },
];

// React.memo()를 사용하여 함수형 컴포넌트의 리렌더링 성능을 최적화
const ImageEx = memo(() => {
    // 현재 표시중인 이미지의 인덱스 번호를 의미하는 상태값
    const [currentIndex, setCurrentIndex] = React.useState(0);

    // 썸네일 이미지의 링크를 클릭했을 경우 동작할 이벤트 리스너
    const onThumbnailClick = (e) => {
        // 클릭된 링크의 주소값 --> #0, #1, #2, #3, #4
        const href = e.currentTarget.getAttribute("href");
        // 추출한 href로부터 #을 제거하고 숫자만 추출
        const idx = parseInt(href.substring(1));

        // 일반 상태값 갱신 > setCurrentIndex(idx);
        // 콜백함수형 상태값 갱신 > 상태값을 화면에 직접적으로 출력하는 경우는 사용하지 않는다
        setCurrentIndex((currentValue) => {
            console.log(`변경전 상태값 : ${currentValue}`);
            const newValue = idx;
            console.log(`변경후 상태값 : ${newValue}`);
            return newValue;
        });
    };

    // currentIndex값이 변경되었을 때에 대한 후속 처리
    const { img: currentImg, title: currentTitle } = React.useMemo(() => {
        return imgList[currentIndex];
    }, [currentIndex]);

    return (
        <div>
            <h2>ImageEx</h2>

            {/* 썸네일 리스트 표시 */}
            <ThumbList>
                {imgList.map((v, i) => {
                    return (
                        <li key={i}>
                            <a href={`#${i}`} title={v.title} onClick={onThumbnailClick}>
                                <img src={v.img} alt={v.title} />
                            </a>
                        </li>
                    );
                })}
            </ThumbList>

            <Viewer>
                {/* useMemo()를 사용하지 않은 경우 */}
                <img src={imgList[currentIndex].img} alt={imgList[currentIndex].title} />
                {/* useMemo()를 사용하여 currentIndex가 변경되었을 때 반응하는 상태값을 활용한 경우 */}
                <img src={currentImg} alt={currentTitle} />
            </Viewer>
        </div>
    );
});

export default ImageEx;
