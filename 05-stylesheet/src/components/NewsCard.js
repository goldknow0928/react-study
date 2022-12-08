import React from "react";
import styled from "styled-components";
import breakpoints from "styled-components-breakpoints";

/** 반응형 웹 구현 기준 사이즈 정의 */
const sizes = {
    sm: 600,
    md: 768,
    lg: 992,
    xl: 1200,
};

/** 기준 사이즈를 활용하여 미디어쿼리 생성 */
const mq = breakpoints(sizes);

const CardContainer = styled.ul`
    list-style: none;
    padding: 0%;
    margin: 0;
    width: 100%;
    box-sizing: border-box;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-evenly;

    .card-item {
        width: 100%;
        box-sizing: border-box;
        margin: 10px 0;
        padding: 0 5px;

        /** 모바일 퍼스트 */
        // 600~
        ${mq.minWidth("sm")`
            width: 50%;
        `}
        // 768~
        ${mq.minWidth("md")`
            width: 33.3%;
        `}
        // 992~
        ${mq.minWidth("lg")`
            width: 25%;
        `}
        // 1200~
        ${mq.minWidth("xl")`
            width: 20%;
        `}

        .list-item-link {
            border: 1px solid #d5d5d5;
            box-sizing: border-box;
            width: 100%;
            height: 100%;
            display: flex;
            flex-wrap: nowrap;
            flex-direction: column;
            align-items: center;
            text-decoration: none;
            color: #000;
            transition: all 0.1s;

            &:hover {
                background-color: #eeeeee55;
            }

            .thumbnail {
                width: 100%;
                height: 150px;
                display: block;
                object-fit: cover;
                flex: none;
            }

            .content {
                width: 100%;
                box-sizing: border-box;
                display: flex;
                flex-direction: column;
                align-content: flex-start;
                padding: 10px 15px;
                //background-color: #ff01;

                h3 {
                    //background-color: #ff01;
                    box-sizing: border-box;
                    font-size: 18px;
                    font-weight: bold;
                    margin: 0;
                    margin-bottom: 10px;
                    display: -webkit-box;
                    overflow: hidden;
                    text-overflow: ellipsis;
                    -webkit-line-clamp: 2;
                    -webkit-box-orient: vertical;
                }

                p {
                    //background-color: #0601;
                    font-size: 14px;
                    margin: 0;
                    margin-bottom: 8px;
                    display: -webkit-box;
                    overflow: hidden;
                    text-overflow: ellipsis;
                    -webkit-line-clamp: 3;
                    -webkit-box-orient: vertical;
                }

                ul {
                    //background-color: #0601;
                    list-style: none;
                    padding: 0;
                    margin: 0;

                    li {
                        display: inline-block;
                        font-size: 12px;

                        &:first-child:after {
                            content: "|";
                            display: inline-block;
                            color: #d5d5d5;
                            padding: 0 5px;
                        }
                    }
                }
            }
        }
    }
`;

const NewsCard = ({ news }) => {
    return (
        <div>
            <CardContainer>
                {news.map(({ url, image, title, description, author, datetime }, i ) => {
                        return (
                            <li className="card-item" key={i}>
                                <a
                                    href={url}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="list-item-link"
                                >
                                    <img
                                        src={image}
                                        alt={title}
                                        className="thumbnail"
                                    />
                                    <div className="content">
                                        <h3>{title}</h3>
                                        <p>{description}</p>
                                        <ul>
                                            <li>{author}</li>
                                            <li>{new Date( datetime).toLocaleString()}</li>
                                        </ul>
                                    </div>
                                </a>
                            </li>
                        );
                    }
                )}
            </CardContainer>
        </div>
    );
};

export default NewsCard;
