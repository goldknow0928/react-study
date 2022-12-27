import React from "react";

const MyMemo = () => {
    const [myNumber, setMyNumber] = React.useState(0);

    // useMemo는 특정 상태변수가 변경되었을 때 그 변경된 값을 가지고 처리할 후속 작업을 구현한다
    // 변경여부를 감지하기 위한 상태변수를 useMemo()의 두 번째 파라미터 배열에 명시한다
    // useMemo의 콜백함수에서 리턴하는 값은 useMemo 자체의 리턴값이 된다
    // --> 즉 myNumber값이 변경되면 그 즉시 자동으로 실행되는 콜백함수를 통해 myResult값을 반환받음
    const myResult = React.useMemo(() => {
        return myNumber * 10000;
    }, [myNumber]);

    const onMyNumberChange = (e) => {
        const inputValue = e.currentTarget.value;
        const inputNumber = isNaN(inputValue) ? 0 : parseInt(inputValue);
        setMyNumber(inputNumber);
    };

    return (
        <div>
            <h2>MyMemo</h2>
            <p>
                <input type="text" value={myNumber} onChange={onMyNumberChange} /> * 10000 = {myResult}
            </p>
        </div>
    );
};

export default MyMemo;
