import React, { memo } from "react";
import styled from "styled-components";
import Table from "../components/Table";
import Spinner from "../components/Spinner";

// Ajax 처리 기능 참조
import useAxios from "axios-hooks";
// 페이지 강제 이동을 처리하기 위한 기능 참조
import { useNavigate } from "react-router-dom";

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

const GradeAdd = memo(() => {
    /** 저장 완료 후 목록으로 되돌아가기 위한 페이지 강제 이동 함수 생성 */
    const navigate = useNavigate();

    /** 백엔드에 데이터 저장을 위한 Ajax 요청 객체 생성 - 메뉴얼 전송 모드 */
    const [{ loading }, refetch] = useAxios(
        {
            url: "/grade",
            method: "POST",
        },
        {
            manual: true,
        }
    );

    /** form의 submit 버튼이 눌러졌을 때 호출될 이벤트 핸들러 */
    const onSubmit = React.useCallback(
        (e) => {
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

            let json = null;

            // 입력, 수정, 삭제 처리는 async ~ await 문법을 사용해야 한다
            (async () => {
                try {
                    const response = await refetch({
                        data: {
                            name: name,
                            level: level,
                            sex: sex,
                            kor: parseInt(kor),
                            eng: parseInt(eng),
                            math: parseInt(math),
                            sin: parseInt(sin),
                        },
                    });

                    json = response.data;

                    console.group("저장된 데이터 확인");
                    console.log(json);
                    console.groupEnd();
                } catch (e) {
                    console.error(e);
                    window.alert([`${e.response.status} ${e.response.statusText}\n${e.message}`]);
                    return;
                }

                // 정상적으로 저장되어 응답을 받았다면?
                window.alert("저장되었습니다.");
                // 페이지 강제 이동(window.location.href = URL 기능과 동일)
                navigate("/");

                // 상세 페이지가 존재한다면 아래와 같이 생성된 id값을 활용해야 한다
                // navigate(`/read/${json.id}`);
                // 혹은
                // navigate(`/read/?contentId=${json.id}`);
            })();
        },
        [refetch, navigate]
    );

    return (
        <>
            <Spinner loading={loading} />
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
                                <input type="text" className="field" name="name" placeholder="이름을 입력해주세요" />
                            </td>
                        </tr>
                        <tr>
                            <th>학년</th>
                            <td className="inputWrapper">
                                <select name="level" className="field">
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
                                    <input type="radio" name="sex" value="남자" />
                                    남자
                                </label>
                                <label>
                                    <input type="radio" name="sex" value="여자" />
                                    여자
                                </label>
                            </td>
                        </tr>
                        <tr>
                            <th>국어</th>
                            <td className="inputWrapper">
                                <input type="number" className="field" name="kor" min="0" max="100" placeholder="숫자만 입력해주세요 (0 ~ 100)" />
                            </td>
                        </tr>
                        <tr>
                            <th>영어</th>
                            <td className="inputWrapper">
                                <input type="number" className="field" name="eng" min="0" max="100" placeholder="숫자만 입력해주세요 (0 ~ 100)" />
                            </td>
                        </tr>
                        <tr>
                            <th>수학</th>
                            <td className="inputWrapper">
                                <input type="number" className="field" name="math" min="0" max="100" placeholder="숫자만 입력해주세요 (0 ~ 100)" />
                            </td>
                        </tr>
                        <tr>
                            <th>과학</th>
                            <td className="inputWrapper">
                                <input type="number" className="field" name="sin" min="0" max="100" placeholder="숫자만 입력해주세요 (0 ~ 100)" />
                            </td>
                        </tr>
                    </tbody>
                </TableEx>

                <div style={{ textAlign: "center" }}>
                    <button type="submit">저장하기</button>
                </div>
            </form>
        </>
    );
});

export default GradeAdd;
