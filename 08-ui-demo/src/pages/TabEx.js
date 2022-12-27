import React, { memo, useState, useCallback, useMemo } from "react";
import styled from "styled-components";
import classnames from "classnames";

const TabContainer = styled.div`
    .tab-button-group {
        overflow: hidden;
        border: 1px solid #ccc;
        background-color: #f1f1f1;
        display: flex;

        .tab-button {
            display: block;
            background-color: inherit;
            min-width: 100px;
            box-sizing: border-box;
            border: none;
            outline: none;
            padding: 14px 16px;
            font-size: 17px;
            color: #222;
            text-align: center;
            text-decoration: none;
            cursor: pointer;
            transition: 0.3s;

            &:hover {
                background-color: #ddd;
            }

            &.active {
                background-color: #ccc;
            }
        }
    }

    .tab-page {
        padding: 6px 12px;
        border: 1px solid #ccc;
        border-top: none;
    }
`;

// 탭을 표시하기 위한 컨텐츠 데이터
const tabContent = [
    {
        id: "newyork",
        subject: "newyork",
        content: "newyork city",
    },
    {
        id: "london",
        subject: "london",
        content: "london city",
    },
    {
        id: "paris",
        subject: "paris",
        content: "paris city",
    },
    {
        id: "seoul",
        subject: "seoul",
        content: "seoul city",
    },
];

const TabEx = memo(() => {
    // 현재 표시되고 있는 탭의 인덱스 번호
    const [tabIndex, setTabIndex] = useState(0);

    // 버튼에 대한 이벤트 처리 함수
    const onTabButtonClick = useCallback((e) => {
        e.preventDefault();

        const current = e.currentTarget;
        const href = current.getAttribute("href");
        console.log(href);

        // 일반 상태값 갱신
        // setTabIndex(tabIndex => tabContent.findIndex(element => `#${element.id}` === href));

        // 콜백함수형 상태값 갱신 --> 상태값을 화면에 직접적으로 출력하는 경우는 사용하지 않는다
        setTabIndex((currentValue) => {
            console.log(`변경전 상태값 => ${currentValue}`);
            const newValue = tabContent.findIndex((e) => `#${e.id}` === href);
            console.log(`변경후 상태값 => ${newValue}`);
            return newValue;
        }, []);
    });

    // tabIndex 값이 변경된 직후 실행된다
    // 리턴값에 대한 구조분해를 수행한다
    const { subject, content } = useMemo(() => {
        // tabContent의 tabIndex번째 항목을 리턴한다
        return tabContent[tabIndex];
    }, [tabIndex]);

    return (
        <div>
            <h2>TabEx {tabIndex}</h2>
            <TabContainer>
                {/* Tab 버튼 그룹 */}
                <div className="tab-button-group">
                    {tabContent.map((v, i) => {
                        // 조건부 className을 적용하기 위한 객체 생성
                        const cls = classnames({
                            "tab-button": true,
                            active: i === tabIndex,
                        });

                        return (
                            <a key={i} className={cls} href={`#${v.id}`} onClick={onTabButtonClick}>
                                {v.subject}
                            </a>
                        );
                    })}
                </div>

                {/* Tab 페이지 영역 */}
                <div className="tab-page">
                    <h3>{subject}</h3>
                    <p>{content}</p>
                </div>
            </TabContainer>
        </div>
    );
});

export default TabEx;
