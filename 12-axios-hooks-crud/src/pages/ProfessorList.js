import React, { memo, useState, useEffect, useCallback } from "react";
import useAxios from "axios-hooks";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import Spinner from "../components/Spinner";
import Table from "../components/Table";

const LinkContainer = styled.div`
    position: sticky;
    top: 0;
    background-color: #fff;
    border-top: 1px solid #eee;
    border-bottom: 1px solid #eee;
    padding: 10px 0;
`;

const TopLink = styled(NavLink)`
    margin-right: 15px;
    display: inline-block;
    font-size: 16px;
    padding: 7px 10px 5px 10px;
    border: 1px solid #ccc;
    background-color: #fff;
    color: #000;
    text-decoration: none;

    &:hover {
        background-color: #06f2;
    }
`;

const ProfessorList = memo(() => {
    /** 리스트 출력 */
    const [professor, setProfessor] = useState([]);
    const [{ data, loading: loading1, error }] = useAxios("/professor", {
        useCache: false,
    });

    useEffect(() => {
        setProfessor(data);
        console.log(data)
    }, [data]);

    /** 삭제 관련 */
    const [{ loading: loading2 }, sendDelete] = useAxios(
        {
            method: "DELETE",
        },
        {
            useCache: false,
            manual: true,
        }
    );

    const onDeleteClick = useCallback((e) => {
        e.preventDefault();

        const current = e.target;

        const id = parseInt(current.dataset.id);
        const name = current.dataset.name;

        if (window.confirm(`정말 ${name}님을 삭제하시겠습니까?`)) {
            (async () => {
                try {
                    await sendDelete({
                        url: `/professor/${id}`,
                    });
                } catch (e) {
                    window.alert(e.message);
                    return;
                }

                setProfessor((currentData) => {
                    const findIndex = currentData.findIndex((v, i) => v.id === id);
                    currentData.splice(findIndex, 1);
                    return currentData;
                });
            })();
        }
    }, []);

    return (
        <>
            <Spinner loading={loading1 || loading2} />

            <LinkContainer>
                <TopLink to="professor/add">교수 추가</TopLink>
            </LinkContainer>

            <Table>
                <thead>
                    <tr>
                        <th>이름</th>
                        <th>직급</th>
                        <th>월급</th>
                        <th>userid</th>
                        <th colSpan="2">수정/삭제</th>
                    </tr>
                </thead>
                <tbody>
                    {professor &&
                        professor.map(({ id, name, position, sal, userid }, i) => {
                            return (
                                <tr key={id}>
                                    <td>{name}</td>
                                    <td>{position}</td>
                                    <td>{sal}</td>
                                    <td>{userid}</td>
                                    <td>
                                        <NavLink to={`edit/${id}`}>수정</NavLink>
                                    </td>
                                    <td>
                                        <a href="#!" data-id={id} data-name={name}>
                                            삭제
                                        </a>
                                    </td>
                                </tr>
                            );
                        })}
                </tbody>
            </Table>
        </>
    );
});

export default ProfessorList;
