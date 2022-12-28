/**
 * React Simple Image Slider
 *
 * //github.com/kimcoder/react-simple-image-slider#readme
 *
 * yarn add react-simple-image-slider
 */
import React, { memo } from "react";
import ImageSlider from "react-simple-image-slider";
import Slide1 from "../assets/img/slide1.jpg";
import Slide2 from "../assets/img/slide2.jpg";
import Slide3 from "../assets/img/slide3.jpg";
import Slide4 from "../assets/img/slide4.jpg";

const Slider = memo(() => {
    const images = [{ url: Slide1 }, { url: Slide2 }, { url: Slide3 }, { url: Slide4 }];

    return (
        <div>
            <ImageSlider
                width="100%"
                height={480}
                images={images}
                showBullets={true}
                showNavs={true}
                autoPlay={true}
                autoPlayDelay={2.0}
                loop={true}
                style={{ margin: "auto" }}
            />
        </div>
    );
});

export default Slider;
