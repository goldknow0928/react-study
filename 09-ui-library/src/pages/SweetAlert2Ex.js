/**
 * SweetAlert2
 * 메시지 팝업창 라이브러리
 *
 * //sweetalert2.github.io/
 *
 * yarn add sweetalert2 sweetalert2-react-content
 */
import React, { memo, useCallback } from "react";
import styled from "styled-components";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import img1 from "../assets/img/img1.png";

const Button = styled.button`
    border: 1px solid #d5d5d5;
    padding: 10px 20px;
    margin: 0 10px;
    font-size: 16px;

    &:first-child {
        margin-left: 0;
    }

    &:hover {
        background-color: #aaa;
    }

    &.active {
        background-color: #ccc;
        transform: scale(0.9, 0.9);
    }
`;

const SweetAlert2Ex = memo(() => {
    const MySwal = withReactContent(Swal);

    // Promise 방식을 사용한 다이얼로그
    const onButton1Click = useCallback(() => {
        MySwal.fire({
            // 불필요한 항목은 삭제 가능
            title: "Promise",
            text: "SweetAlert 활용한 메시지 박스 테스트",
            // 아이콘 종류 --> success, error, warning, info, question
            icon: "warning",
            footer: '<a href="#">SweetAlert2에 대해</a>',
        }).then((result) => {
            console.debug(result);
            if (result.isConfirmed) {
                MySwal.fire("확인 버튼을 눌렀습니다.");
            }
        });
    }, [MySwal]);

    // Async~Await 방식을 사용한 다이얼로그
    const onButton2Click = useCallback(async () => {
        const result = await MySwal.fire({
            // 불필요한 항목은 삭제 가능
            title: "Async Await",
            text: "SweetAlert 활용한 메시지 박스 테스트",
            icon: "success",
            footer: '<a href="#">SweetAlert2에 대해</a>',
        });

        console.debug(result);

        if (result.isConfirmed) {
            MySwal.fire("확인 버튼을 눌렀습니다.");
        }
    }, [MySwal]);

    // 이미지 다이얼로그
    const onButton3Click = useCallback(async () => {
        const result = await MySwal.fire({
            imageUrl: img1,
            imageWidth: "95%",
            imageAlt: "PhotoGraphic",
            title: "Async Await",
            text: "SweetAlert 활용한 메시지 박스 테스트",
        });

        console.debug(result);

        if (result.isConfirmed) {
            MySwal.fire("확인 버튼을 눌렀습니다.");
        }
    }, [MySwal]);

    // 컨펌 다이얼로그
    const onButton4Click = useCallback(async () => {
        const result = await Swal.fire({
            title: "<strong style='color:#fff'>HTML <u>example</u></strong>",
            icon: "info",
            html: "<p style='color:#fff'>You can use <b>bold text</b></p>",
            background: `url(${img1})`,
            showCloseButton: true,
            showCancelButton: true,
            focusConfirm: true,
            confirmButtonText: "Confirm",
            cancelButtonText: "Cancel",
        });

        console.debug(result);

        if (result.isConfirmed) {
            MySwal.fire("확인 버튼을 눌렀습니다.");
        } else if (result.isDismissed && result.dismiss === "cancel") {
            MySwal.fire("취소 버튼을 눌렀습니다.");
        }
    }, [MySwal]);

    // 버튼이 3개 배치된 다이얼로그
    const onButton5Click = useCallback(async () => {
        const result = await Swal.fire({
            icon: "question",
            title: "확인",
            text: "변경사항을 저장하시겠습니까?",
            showDenyButton: true,
            showCancelButton: true,
            confirmButtonText: "확인",
            denyButtonText: "나중에",
            cancelButtonText: "취소",
        });

        console.debug(result);

        if (result.isConfirmed) {
            MySwal.fire("확인 버튼을 눌렀습니다.");
        } else if (result.isDenied) {
            MySwal.fire("나중에 버튼을 눌렀습니다.");
        } else if (result.isDismissed && result.dismiss === "cancel") {
            MySwal.fire("취소 버튼을 눌렀습니다.");
        }
    }, [MySwal]);

    return (
        <div>
            <Button onClick={onButton1Click}>Button1</Button>
            <Button onClick={onButton2Click}>Button2</Button>
            <Button onClick={onButton3Click}>Button3</Button>
            <Button onClick={onButton4Click}>Button4</Button>
            <Button onClick={onButton5Click}>Button5</Button>
        </div>
    );
});

export default SweetAlert2Ex;
