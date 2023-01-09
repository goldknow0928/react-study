import React, { memo, useState, useEffect, useCallback } from "react";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import { getList } from "../slices/MovieRankSlice";
import Spinner from "../components/Spinner";
import Table from "../components/Table";
import ErrorView from "../components/ErrorView";
import dayjs from "dayjs";
import mq from "../MediaQuery";

// 그래프와 표를 배치하기 위한 flex-box
const Container = styled.div`
    ${mq.minWidth("md")`
        display: flex;
        flex-direction: row;
        flex-wrap: nowrap;

        .flex-item {
            width: 50%;
            box-sizing: border-box;
            padding: 10px;
        }
    `}
`;

const MovieRank = memo(() => {
    return (
        <div>
            <h1></h1>
        </div>
    );
});

export default MovieRank;
