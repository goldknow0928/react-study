import React from "react";
/**
 * /src폴더 하위의 임의의 경로에 종재하는 이미지 파일을 참조
 * - 현재 소스파일을 기준으로 하는 상대경로로 지정
 * - 실행시에는 react에 의해 다른 경로로 복사된다
 */
import sample from "../assets/img/sample.png";

const InlineCss = () => {
    /** CSS속성이름은 바닐라스크립트의 프로퍼티 이름으로 지정해야 함 */
    const myStyle = {
        backgroundColor: "#f60",
        fontSize: "20px",
        fontWeight: "700",
        color: "#fff",
        padding: "10px",
    };

    return (
        <div>
            <h3>변수로 정의된 CSS 참조하기</h3>
            <div style={myStyle}>Hello</div>

            <hr />

            <h3>직접 CSS 넣기</h3>
            <div
                style={{
                    backgroundColor: "pink",
                    fontSize: "20px",
                    fontWeight: "700",
                    color: "#fff",
                    padding: "10px",
                }}
            >
                React
            </div>

            <hr />
            
            <h3>이미지 참조하기</h3>
            {/* 이미지 사용시 alt 속성을 지정 안하면 경고 발생함 */}
            <img src={sample} width='240' height='240' alt='샘플 이미지' />

            {/* public 폴더에 있는 파일들은 단순 절대경로로 참조 가능 */}
            <img src="/logo192.png" width='240' height='240' alt='리액트 이미지' />
        </div>
    );
};

export default InlineCss;
