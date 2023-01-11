import React, { memo, useState, useEffect, useCallback, useMemo } from "react";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import { getList } from "../slices/MovieRankSlice";
import Spinner from "../components/Spinner";
import Table from "../components/Table";
import ErrorView from "../components/ErrorView";
import BarChartView from "../components/BarChartView";
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
    // hook을 통해 slice가 관리하는 상태값 가져오기
    const { data, loading, error } = useSelector((state) => state.MovieRankSlice);

    // dispatch 함수 생성
    const dispatch = useDispatch();

    // 검색을 위해 파라미터로 전달할 날짜값을 관리하는 상태변수
    const [targetDt, setTargetDt] = useState(dayjs().add(-1, "d").format("YYYY-MM-DD"));

    /** 페이지가 열린 직후와 날짜값이 변경된 경우 리덕스 액션함수 디스패치 --> Ajax 호출 */
    useEffect(() => {
        dispatch(
            getList({
                targetDt: targetDt.replaceAll("-", ""),
            })
        );
    }, [dispatch, targetDt]);

    /**드롭다운의 선택이 변경된 경우의 이벤트 */
    const onDateChange = useCallback((e) => {
        e.preventDefault();

        // 선택값으로 상태값을 갱신한다 --> React.useEffect()에 의해 액션함수가 디스패치 된다
        setTargetDt(e.target.value);
    }, []);

    /** data가 변경되었을 때, 사이드 이펙트를 처리하여 그래프에 적용할 데이터를 생성한다 */
    const { movieNm, audiCnt } = useMemo(() => {
        const newData = { movieNm: [], audiCnt: [] };

        if (data) {
            data.boxOfficeResult.dailyBoxOfficeList.forEach((v, i) => {
                newData.movieNm.push(v.movieNm);
                newData.audiCnt.push(v.audiCnt);
            });

            console.log(newData);
        }

        return newData;
    }, [data]);

    return (
        <div>
            <Spinner loading={loading} />

            <form>
                <input type="date" className="form-control" placeholder="날짜 선택" value={targetDt} onChange={onDateChange} />
            </form>

            <hr />

            {error ? (
                <ErrorView error={error} />
            ) : (
                <Container>
                    <div className="flex-item">
                        <BarChartView labels={movieNm} dataset={audiCnt} legend={`${targetDt} 관람객 수`} />
                    </div>
                    <div className="flex-item">
                        <Table>
                            <thead>
                                <tr>
                                    <th>순위</th>
                                    <th>제목</th>
                                    <th>관람객 수</th>
                                    <th>매출액</th>
                                    <th>누적 관람객 수</th>
                                    <th>누적 매출액</th>
                                </tr>
                            </thead>
                            <tbody>
                                {data &&
                                    data.boxOfficeResult.dailyBoxOfficeList.map((v, i) => {
                                        return (
                                            <tr key={i}>
                                                <td>{v.rank}</td>
                                                <td>{v.movieNm}</td>
                                                <td>{Number(v.audiCnt).toLocaleString()}명</td>
                                                <td>{Number(v.salesAmt).toLocaleString()}원</td>
                                                <td>{Number(v.audiAcc).toLocaleString()}명</td>
                                                <td>{Number(v.salesAcc).toLocaleString()}원</td>
                                            </tr>
                                        );
                                    })}
                            </tbody>
                        </Table>
                    </div>
                </Container>
            )}
        </div>
    );
});

export default MovieRank;
