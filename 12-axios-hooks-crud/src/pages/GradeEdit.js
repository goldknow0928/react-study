import React, { memo, useCallback } from "react";
import styled from "styled-components";
import Table from "../components/Table";
import Spinner from "../components/Spinner";

// Ajax 처리 기능 참조
import useAxios from "axios-hooks";
// Path 파라미터를 처리하기 위한 기능과 페이지 상세 이동을 처리하기 위한 기능 참조
import { useParams, useNavigate } from "react-router-dom";

/** 테이블 컴포넌트의 CSS를 확장한 컴포넌트 */
const TableEx = styled(Table)`
    margin: 50px 0 15px;

    .inputWrapper {
        padding: 0;
        position: relative;
        text-align: left;

        .field {
            box-sizing: border-box;
            display: block;
            position: absolute;
            left: 0;
            top: 0;
            width: 100%;
            height: 100%;
            border: 0;
            padding: 0 10px;
            outline: none;
            font-size: 14px;
        }

        label {
            margin: 0 10px 0 7px;

            input {
                margin-right: 10px;
            }
        }
    }
`;

const GradeEdit = memo(() => {
    // Path 파라미터로 전달될 일련번호
    const { id } = useParams();

    // 데이터 수정 후 목록 페이지로 강제 이동하기 위한 함수 생성
    const navigate = useNavigate();

    // 수정할 대상을 백엔드로부터 로드한다 --> 자동실행 모드
    const [{ data, loading, error }, refetch] = useAxios(`/grade/${id}`);

    /** form의 submit 버튼이 눌러졌을 때 호출될 이벤트 핸들러 */
    const onSubmit = useCallback((e) => {
        e.preventDefault();

        // 이벤트가 발생한 폼 객체
        const current = e.target;

        // 입력값에 대한 유효성 검사

        // 입력받은 값 취득하기
        const name = current.name.value;
        const level = current.level.value;
        const sex = current.sex.value;
        const kor = current.kor.value;
        const eng = current.eng.value;
        const math = current.math.value;
        const sin = current.sin.value;

        // 입력, 수정, 삭제 처리는 async ~ await 문법을 사용해야 한다
        (async () => {
            let json = null;

            try {
                const response = await refetch({
                    method: "PUT",
                    data: {
                        name: name,
                        level: parseInt(level),
                        sex: sex,
                        kor: parseInt(kor),
                        eng: parseInt(eng),
                        math: parseInt(math),
                        sin: parseInt(sin),
                    },
                });

                json = response.data;
                console.group("수정된 데이터 확인");
                console.log(json);
                console.groupEnd();
            } catch (e) {
                console.error(e);
                window.alert(`${e.response.status} ${e.response.statusText}\n${e.message}`);
                return;
            }

            // 정상적으로 저장되어 응답을 받았다면 페이지 강제 이동
            window.alert("수정되었습니다.");
            navigate("/");
        })();
    }, [navigate, refetch]);

    return (
        <>
            <Spinner loading={loading} />

            {error ? (
                <div>
                    <h1>Oops~! {error.code} Error.</h1>
                    <hr />
                    <p>{error.message}</p>
                </div>
            ) : (
                // Ajax를 통해 조회한 결과가 존재할 때만 데이터 표시함
                data && (
                    <form onSubmit={onSubmit}>
                        <TableEx>
                            <colgroup>
                                <col width="120" />
                                <col />
                            </colgroup>
                            <tbody>
                                <tr>
                                    <th>이름</th>
                                    <td className="inputWrapper">
                                        <input type="text" className="field" name="name" placeholder="이름을 입력해주세요" defaultValue={data.name} />
                                    </td>
                                </tr>
                                <tr>
                                    <th>학년</th>
                                    <td className="inputWrapper">
                                        <select name="level" className="field" defaultValue={data.level}>
                                            <option value="">-- 선택하세요 --</option>
                                            <option value="1">1학년</option>
                                            <option value="2">2학년</option>
                                            <option value="3">3학년</option>
                                            <option value="4">4학년</option>
                                        </select>
                                    </td>
                                </tr>
                                <tr>
                                    <th>성별</th>
                                    <td className="inputWrapper">
                                        <label>
                                            <input type="radio" name="sex" value="남자" defaultChecked={data.sex === "남자"} />
                                            남자
                                        </label>
                                        <label>
                                            <input type="radio" name="sex" value="여자" defaultChecked={data.sex === "여자"} />
                                            여자
                                        </label>
                                    </td>
                                </tr>
                                <tr>
                                    <th>국어</th>
                                    <td className="inputWrapper">
                                        <input
                                            type="number"
                                            className="field"
                                            name="kor"
                                            min="0"
                                            max="100"
                                            placeholder="숫자만 입력해주세요 (0 ~ 100)"
                                            defaultValue={data.kor}
                                        />
                                    </td>
                                </tr>
                                <tr>
                                    <th>영어</th>
                                    <td className="inputWrapper">
                                        <input
                                            type="number"
                                            className="field"
                                            name="eng"
                                            min="0"
                                            max="100"
                                            placeholder="숫자만 입력해주세요 (0 ~ 100)"
                                            defaultValue={data.eng}
                                        />
                                    </td>
                                </tr>
                                <tr>
                                    <th>수학</th>
                                    <td className="inputWrapper">
                                        <input
                                            type="number"
                                            className="field"
                                            name="math"
                                            min="0"
                                            max="100"
                                            placeholder="숫자만 입력해주세요 (0 ~ 100)"
                                            defaultValue={data.math}
                                        />
                                    </td>
                                </tr>
                                <tr>
                                    <th>과학</th>
                                    <td className="inputWrapper">
                                        <input
                                            type="number"
                                            className="field"
                                            name="sin"
                                            min="0"
                                            max="100"
                                            placeholder="숫자만 입력해주세요 (0 ~ 100)"
                                            defaultValue={data.sin}
                                        />
                                    </td>
                                </tr>
                            </tbody>
                        </TableEx>

                        <div style={{ textAlign: "center" }}>
                            <button type="submit">저장하기</button>
                        </div>
                    </form>
                )
            )}
        </>
    );
});

export default GradeEdit;
