import React from "react";
import temp from "../assets/img/temp.png";


/**
 * effect
 * - 렌더링 이후 실행할 힘수(리액트는 이 함수를 기억했다가 DOM 업데이트 후 불러낸다)
 * - effect 함수에서 함수를 return 할 경우 그 함수가 컴포넌트가 Unmount 될 때 정리의 개념으로 한 번 실행된다
 * 
 * - 배열의 형태로, 특정한 값이 변경될 때 effect 함수를 실행 하고 싶을 경우 배열 안에 그 값을 넣어준다
 * - 빈 배열을 입력할 경우 컴포넌트가 Mount 될 때에만 실행된다
 * 
 * cleanup
 * - useEffect 안에서 return 할 때 실행된다(useEffect 뒷정리)
 * - 만약 컴포넌트가 마운트 될 때 이벤트 리스너를 통해 이벤트를 추가하였다면 컴포넌트가 언마운트 될 때 이벤트를 삭제해줘야 한다
 *   > 그렇지 않으면 컴포넌트가 리렌더링 될 때마다 새로운 이벤트 리스너가 핸들러에 바인딘 된다. 
 *   > 이는 자주 리렌더링 될 경우 메모리 누수가 발생할 수 있다
 */

const MyEffect = () => {
    // 이미지의 밝기를 위한 상태값
    const [myBrightness, setBrightness] = React.useState(100);

    // 브라우저의 넓이를 의미하는 상태값
    const [myWidth, setMyWidth] = React.useState(window.innerWidth);

    // 사용자 정의 함수
    const onMyResize = () => {
        console.log(`창 사이즈 변경 >> ${window.innerWidth}`);
        setMyWidth(window.innerWidth);
    };

    // 이 컴포넌트가 화면에 막 등장함과 동시에 1회 실행됨
    React.useEffect(() => {
        console.clear();
        console.log("[MyEffect1] %s ::: 화면에 컴포넌트가 로드될 때 처리되어야 할 기능", new Date());

        window.addEventListener("resize", onMyResize);
        return () => {
            console.log("화면에서 벗어남");
            window.removeEventListener("resize", onMyResize);
        };
    }, []);

    // 이 컴포넌트가 화면에 막 등장할 때와 state, props값이 변경될 때마다 실행됨
    React.useEffect(() => {
        console.log("[MyEffect2] %s ::: 화면에 컴포넌트가 처음 로드되거나 state, props 중 하나라도 변경될 경우 호출", new Date());
    });

    // 이 컴포넌트가 화면에 막 등장할 때와 특정 state, props값이 변경될 때만 실행됨
    React.useEffect(() => {
        console.log("[MyEffect4] %s ::: myBrightness값이 변경됨", new Date());
    }, [myBrightness]);

    // state값이 변경되어 화면이 다시 렌더링되거나 화면 이동 등의 이유로 이 컴포넌트가 사라질 때 실행됨
    React.useEffect(() => {
        return () => {
            console.log("[MyEffect3] %s ::: 이 컴포넌트가 화면에서 사라지기 직전에 처리되어야 할 기능", new Date());
        };
    });

    return (
        <div>
            <h2>MyEffect</h2>
            <h3>Window Width: {myWidth}</h3>

            <div>
                <input
                    type="range"
                    min="0"
                    max="200"
                    step="1"
                    value={myBrightness}
                    onChange={(e) => {
                        setBrightness(e.currentTarget.value);
                    }}
                />
            </div>

            <img src={temp} alt="Hello React" width='480' style={{filter: `brightness( ${myBrightness}% )`}} />
        </div>
    );
};

export default MyEffect;
