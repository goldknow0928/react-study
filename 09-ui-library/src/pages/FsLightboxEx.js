/**
 * FsLightBoxEx
 * 어떤 요소(img, button, a 등)을 클릭했을 때 지정된 이미지, 영상 등을 모달 팝업으로 표시하는 기능
 *
 * https://fslightbox.com
 *
 * yarn add fslightbox-react
 */

import React, { memo, useState } from "react";
import styled from "styled-components";
import FsLightbox from "fslightbox-react";

import img1 from "../assets/img/img1.png";
import img2 from "../assets/img/img2.png";
import img3 from "../assets/img/img3.png";
import img4 from "../assets/img/img4.png";
import img5 from "../assets/img/img5.png";

const Button = styled.button`
    border: 0;
    outline: none;
    cursor: pointer;
    padding: 0;
    margin: 0 5px;
`;

const FsLightboxEx = memo(() => {
    // 단일 이미지를 사용할 경우 모달창 표시 여부에 대한 상태값
    const [singleToggler, setSingleToggler] = useState(false);
    // 복수 이미지를 사용할 경우 모달창 표시 여부와 몇 번째 이미지를 표시할지에 대한 상태값
    const [multiToggler, setMultiToggler] = useState({
        open: false,
        index: 1,
    });

    // 단일 Youtube 영상을 사용할 경우 모달창 표시 여부에 대한 상태값
    const [youtubeToggler, setYoutubeToggler] = useState(false);
    // 복수 Youtube 영상을 사용할 경우 모달창 표시 여부와 몇 번째 영상을 표시할지에 대한 상태값
    const [youtubeMultiToggler, setYoutubeMultiToggler] = useState({
        open: false,
        index: 1,
    });

    return (
        <div>
            <h2>FsLightBoxEx</h2>
            <hr />

            <h3>Single Gallery</h3>
            <div>
                <Button onClick={(e) => setSingleToggler(!singleToggler)}>
                    <img src={img1} width="150" alt="img1" />
                </Button>
                <FsLightbox sources={[img1]} toggler={singleToggler} />
            </div>
            <hr />

            <h3>Multi Gallery</h3>
            <div>
                <Button onClick={(e) => setMultiToggler({ open: !multiToggler.open, index: 1 })}>
                    <img src={img1} width="150" alt="img1" />
                </Button>
                <Button onClick={(e) => setMultiToggler({ open: !multiToggler.open, index: 2 })}>
                    <img src={img2} width="150" alt="img2" />
                </Button>
                <Button onClick={(e) => setMultiToggler({ open: !multiToggler.open, index: 3 })}>
                    <img src={img3} width="150" alt="img3" />
                </Button>
                <Button onClick={(e) => setMultiToggler({ open: !multiToggler.open, index: 4 })}>
                    <img src={img4} width="150" alt="img4" />
                </Button>
                <Button onClick={(e) => setMultiToggler({ open: !multiToggler.open, index: 5 })}>
                    <img src={img5} width="150" alt="img5" />
                </Button>
                <FsLightbox sources={[img1, img2, img3, img4, img5]} toggler={multiToggler.open} slide={multiToggler.index} />
            </div>
            <hr />

            <h3>Youtube Single Link</h3>
            <div>
                <Button onClick={(e) => setYoutubeToggler(!youtubeToggler)}>
                    <img src="//img.youtube.com/vi/yXFiTDfhSXo/maxresdefault.jpg" width="150" alt="video1" />
                </Button>
                <FsLightbox sources={["//www.youtube.com/watch?v=yXFiTDfhSXo"]} toggler={youtubeToggler} />
            </div>
            <h3>Youtube Multi Link</h3>
            <div>
                <Button onClick={(e) => setYoutubeMultiToggler({ open: !youtubeMultiToggler.open, index: 1 })}>
                    <img src="//img.youtube.com/vi/yXFiTDfhSXo/maxresdefault.jpg" width="150" alt="video1" />
                </Button>
                <Button onClick={(e) => setYoutubeMultiToggler({ open: !youtubeMultiToggler.open, index: 2 })}>
                    <img src="//img.youtube.com/vi/yXFiTDfhSXo/maxresdefault.jpg" width="150" alt="video2" />
                </Button>
                <Button onClick={(e) => setYoutubeMultiToggler({ open: !youtubeMultiToggler.open, index: 3 })}>
                    <img src="//img.youtube.com/vi/yXFiTDfhSXo/maxresdefault.jpg" width="150" alt="video3" />
                </Button>
                <FsLightbox
                    sources={["//www.youtube.com/watch?v=yXFiTDfhSXo", "//www.youtube.com/watch?v=yXFiTDfhSXo", "//www.youtube.com/watch?v=yXFiTDfhSXo"]}
                    toggler={youtubeMultiToggler.open}
                    slide={youtubeMultiToggler.index}
                />
            </div>
        </div>
    );
});

export default FsLightboxEx;
