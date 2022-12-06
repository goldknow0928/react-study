import React from 'react';
import { useParams } from 'react-router-dom';
import GradeItem2 from '../components/GradeItem2';
import Meta from '../Meta';
import GradeData2 from '../GradeData2';

const GradeTable2 = () => {

    // URL을 통해 전달된 path 파라미터 추출
    const { level } = useParams();

    // 파라미터를 활용하여 JSON의 key이름 조합
    const key = `${level}학년`;

    console.log({ level });

    // JSON에서 필요한 데이터 추출
    const currentData = GradeData2[key];

    return (
        <div>
            {/* Route처리를 적용 받는 페이지에서 이 컴포넌트를 중복 사용시 App.js에서의 설정을 덮어쓰게 된다. */}
            <Meta title='연습문제' description="성적표 구현 예제" author="코알라"/>

            <h2>{key}</h2>
            <table border="1" cellPadding="7">
                <thead>
                    <tr align="center">
                        <th>이름</th>
                        <th>성별</th>
                        <th>국어</th>
                        <th>영어</th>
                        <th>수학</th>
                        <th>과학</th>
                        <th>총점</th>
                        <th>평균</th>
                    </tr>
                </thead>
                <tbody>
                    {currentData.map((v,i) => {
                        return (<GradeItem2 
                            key={i}
                            name={v.이름}
                            sex={v.성별}
                            kor={v.국어}
                            eng={v.영어}
                            math={v.수학}
                            sinc={v.과학}
                            sum={v.sum}
                            avg={v.avg} />)
                    })}
                </tbody>
            </table>
        </div>
    );
};

export default GradeTable2;