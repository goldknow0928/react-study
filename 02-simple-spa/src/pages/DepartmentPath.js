import React from 'react';

// PATH 파라미터 추출 기능을 갖는 useParams() 함수를 react-router-dom 패키지로부터 참조함
import { useParams } from 'react-router-dom';

const DepartmentPath = () => {
  // 요청 데이터 확인하기
  const params = useParams();
  console.group('useParams()의 리턴값 확인');
  console.debug(params);
  console.groupEnd();

  // 필요한 변수값과 타입 확인
  console.debug('요청된 학과번호 값=%s (%s)', params.id, typeof params.id);
  console.debug('요청된 메시지 내용=%s (%s)', params.msg, typeof params.msg);
  console.groupEnd();

  // 한 페이지에서 GET파라미터에 따라 다르게 표현할 데이터 준비
  // 실전에서는 이 값에 해당하는 JSON을 백엔드로부터 받아와야 한다. ==> AJAX
  const DepartmentList = {
    item: [
      { id: 201, dname: '전자공학과', loc: '3호관' },
      { id: 202, dname: '기계공학과', loc: '3호관' },
    ],
  };

  // 파라미터와 id가 일치하는 항목 찾기
  let DepartmentItem = DepartmentList.item.find(
    (v, i) => v.id === parseInt(params.id)
  );

  // 조회 결과가 없는 경우
  if (!DepartmentItem) {
    return <h2>존재하지 않는 데이터에 대한 요청입니다.</h2>;
  }

  return (
    <div>
      <h2>{DepartmentItem.dname}</h2>
      <ul>
        <li>학과번호: {DepartmentItem.id}</li>
        <li>학과위치: {DepartmentItem.loc}</li>
      </ul>
    </div>
  );
};

export default DepartmentPath;
