/**
 * 타이타닉 탑승자 명단 조회
 */
import React, { memo, useState, useCallback, useEffect } from "react";
import styled from "styled-components";
import Spinner from "../components/Spinner";
import Table from "../components/Table";
import { SexLabel, EmbarkedLabel, SurvivedLabel } from "../components/Labels";

// Axios 기능 제공 hook
import useAxios from "axios-hooks";

/** 드롭다운을 배치하기 위한 박스 */
const SelectContainer = styled.div`
    position: sticky;
    top: 0%;
    background-color: #fff;
    border-top: 1px solid #eee;
    border-bottom: 1px solid #eee;
    padding: 10px 0;
    margin: 0;

    select {
        margin-right: 15px;
        font-size: 16px;
        padding: 5px 10px;
    }
`;

const Titanic = memo(() => {
    // 탑승객 명단 목록을 Ajax로 가져온다
    // --> 기본적으로 컴포넌트의 마운트와 동시에 자동 실행되어 응답 결과를 data에 저장한다
    const [{ data, loading, error }, refetch] = useAxios("/titanic");

    // 각 드롭다운의 선택 상자를 저장하기 위한 상태변수
    const [state, setState] = React.useState({
        sex: "",
        embarked: "",
        survived: "",
    });

    /** 드롭다운 선택 변경시 호출되는 이벤트 */
    const onSelectChange = useCallback((e) => {
            e.preventDefault();

            // 드롭다운의 입력값 취득
            const current = e.target;
            const key = current.name;
            const value = current[current.selectedIndex].value;

            // 기존의 상태값을 그대로 복사한 상태에서
            // 드롭다운의 name 속성과 일치하는 key에 대한 value를 수정
            const newState = { ...state, [key]: value };

            // 상태값 갱신
            setState(newState);

            // 갱신된 상태값 확인
            console.log(newState);
        },
        [state]
    );

    /** state 상태값이 변경되었을 때 실행될 hook */
    React.useEffect(() => {
        // 상태값 중에서 빈값이 아닌 항목들을 옮겨담는다.
        const params = {};

        for (const key in state) {
            if (state[key]) {
                params[key] = state[key];
            }
        }

        // Ajax 재요청
        refetch({
            params: params,
        });
    }, [refetch, state]);

    /** 에러 발생시 표시될 메세지 */
    if (error) {
        console.error(error);

        // 컴포넌트 자체가 함수이고, 함수가 실행도중 리턴을 하므로
        // 이 내용을 화면에 표시하고 컴포넌트의 실행은 중단된다
        return (
            <div>
                <h1>Oops~!! {error.code} Error.</h1>
                <hr />
                <p>{error.message}</p>
            </div>
        );
    }

    return (
        <div>
            {/* 로딩바 */}
            <Spinner loading={loading} />

            {/* 검새 조건 드롭다운 박스 */}
            <SelectContainer>
                <select name="sex" onChange={onSelectChange}>
                    <option value="">-- 성별 선택 --</option>
                    <option value="male">남자</option>
                    <option value="female">여자</option>
                </select>

                <select name="embarked" onChange={onSelectChange}>
                    <option value="">-- 탑승지 선택 --</option>
                    <option value="C">세르브루</option>
                    <option value="Q">퀸즈타운</option>
                    <option value="S">사우샘프턴</option>
                </select>

                <select name="survived" onChange={onSelectChange}>
                    <option value="">-- 생존여부 선택 --</option>
                    <option value="true">생존</option>
                    <option value="false">사망</option>
                </select>
            </SelectContainer>

            {/* 테이블 */}
            <Table>
                <thead>
                    <tr>
                        <th>승객번호</th>
                        <th>승객이름</th>
                        <th>성별</th>
                        <th>나이</th>
                        <th>동승자 수</th>
                        <th>객실등급</th>
                        <th>방 호수</th>
                        <th>티켓번호</th>
                        <th>요금</th>
                        <th>탑승지</th>
                        <th>생존여부</th>
                    </tr>
                </thead>
                <tbody>
                    {data &&
                        data.map(({ id, name, survived, pclass, sex, age, sibsp, parch, ticket, fare, cabin, embarked }, i) => {
                            return (
                                <tr key={id}>
                                    <td>{id}</td>
                                    <td>{name}</td>
                                    <td>
                                        <SexLabel sex={sex} />
                                    </td>
                                    <td>{age}</td>
                                    <td>{sibsp + parch}</td>
                                    <td>{pclass}등석</td>
                                    <td>{cabin}</td>
                                    <td>{ticket}</td>
                                    <td>{fare}</td>
                                    <td>
                                        <EmbarkedLabel embarked={embarked} />
                                    </td>
                                    <td>
                                        <SurvivedLabel survived={survived} />
                                    </td>
                                </tr>
                            );
                        })}
                </tbody>
            </Table>
        </div>
    );
});

export default Titanic;
