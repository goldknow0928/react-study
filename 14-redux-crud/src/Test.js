import React, { memo, useEffect } from "react";

import { useSelector, useDispatch } from "react-redux";
import { getList, getItem, postItem, putItem, deleteItem } from "./slices/DepartmentSlice";

/** 단위 테스트 */
const Test = memo(() => {
    const dispatch = useDispatch();
    const { data, loading, error } = useSelector((state) => state.DepartmentSlice);

    useEffect(() => {
        dispatch(getList());

        // dispatch(getItem({id: 101}));

        // dispatch(postItem({id:203, dname: '수정', loc: '1406호'}));

        // dispatch(deleteItem({id: 203}))
    }, [dispatch]);

    return loading ? "loading..." : error ? JSON.stringify(error) : <>{JSON.stringify(data)}</>;
});

export default Test;
