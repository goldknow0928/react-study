import React, { memo, useCallback } from "react";
import noimg from "../assets/img/noImg.png";

const ImageView = memo(({ src, alt }) => {
    const onImgError = useCallback((e) => {
        e.currentTarget.src = noimg;
    }, []);

    return <img src={src || noimg} alt={alt} onError={onImgError} />;
});

export default ImageView;
