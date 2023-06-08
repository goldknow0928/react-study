import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { pending, fulfilled, rejected } from "../helper/ReduxHelper";

/** 다중행 데이터 조회를 위한 비동기 함수 */
export const getList = createAsyncThunk("DepartmentSlice/getList", async (payload, { rejectWithValue }) => {
    let result = null;
    const URL = process.env.REACT_APP_API_DEPARTMENT_LIST;

    // `/pages/DepartmentList.js`에서 검색어를 {keyword: 검색어값} 형태로 전달하면 payload객체를 통해 넘어온다
    // --> payload.keyword
    // 여기서는 그 값을 학과명 검색어로 활용
    let params = null;

    // payload객체가 null이나 undefined가 아니고, 그 안의 keyword 값이 존재한다면?
    /**
     * 특정 객체(payload)에 "keyword" 프로퍼티가 있는지 확인하는 코드이다
     * '?' 는 Optional Chaining 연산자로, 프로퍼티가 존재하지 않는 경우 undefined를 반환한다
     * 즉, payload 객체에 keyword 프로퍼티가 있으면 그 프로퍼티의 값을, 없으면 undefined를 반환한다
     */
    if (payload?.keyword) {
        // axios에 설정할 querystring 데이터 구성
        params = {
            dname: payload.keyword
        }
    }

    try {
        const response = await axios.get(URL, {
            params: params
        });
        result = response.data;
    } catch (err) {
        console.log(`에러다! ----- ${err}`);
        result = rejectWithValue(err.response);
    }

    return result;
});

/** 단일행 데이터 조회를 위한 비동기 함수 */
export const getItem = createAsyncThunk("DepartmentSlice/getItem", async (payload, { rejectWithValue }) => {
    let result = null;
    // 환경설정 파일에 정의된 URL에서 ':id' 부분을 찾아 payload를 통해 전달된 일련번호로 치환
    const URL = process.env.REACT_APP_API_DEPARTMENT_ITEM.replace(":id", payload.id);

    try {
        const response = await axios.get(URL);
        result = response.data;
    } catch (err) {
        console.log(`에러다! ${err}`);
        result = rejectWithValue(err.response);
    }

    return result;
});

/** 데이터 저장을 위한 비동기 함수 */
export const postItem = createAsyncThunk("DepartmentSlice/postItem", async (payload, { rejectWithValue }) => {
    let result = null;
    const URL = process.env.REACT_APP_API_DEPARTMENT_LIST;

    try {
        const response = await axios.post(URL, {
            dname: payload.dname,
            loc: payload.loc,
        });
        result = response.data;
    } catch (err) {
        console.log(`에러다! ${err}`);
        result = rejectWithValue(err.response);
    }

    return result;
});

/** 데이터 수정을 위한 비동기 함수 */
export const putItem = createAsyncThunk("DepartmentSlice/putItem", async (payload, { rejectWithValue }) => {
    let result = null;
    // 환경설정 파일에 정의된 URL에서 ':id' 부분을 찾아 payload를 통해 전달된 일련번호로 치환
    const URL = process.env.REACT_APP_API_DEPARTMENT_ITEM.replace(":id", payload.id);

    try {
        const response = await axios.put(URL, {
            dname: payload.dname,
            loc: payload.loc,
        });
        result = response.data;
    } catch (err) {
        console.log(`에러다! ${err}`);
        result = rejectWithValue(err.response);
    }

    return result;
});

/** 데이터 삭제를 위한 비동기 함수 */
export const deleteItem = createAsyncThunk("DepartmentSlice/deleteItem", async (payload, { rejectWithValue }) => {
    let result = null;
    // 환경설정 파일에 정의된 URL에서 ':id' 부분을 찾아 payload를 통해 전달된 일련번호로 치환
    const URL = process.env.REACT_APP_API_DEPARTMENT_ITEM.replace(":id", payload.id);

    try {
        const response = await axios.delete(URL);
        result = response.data;
    } catch (err) {
        console.log(`에러다! ${err}`);
        result = rejectWithValue(err.response);
    }

    return result;
});

const DepartmentSlice = createSlice({
    name: "DepartmentSlice",
    initialState: {
        data: null,
        loading: false,
        error: null,
    },
    extraReducers: {
        /** 다중행 데이터 조회를 위한 액션 함수 */
        [getList.pending]: pending,
        [getList.fulfilled]: fulfilled,
        [getList.rejected]: rejected,

        /** 단일행 데이터 조회를 위한 액션 함수 */
        [getItem.pending]: pending,
        [getItem.fulfilled]: fulfilled,
        [getItem.rejected]: rejected,

        /** 데이터 저장을 위한 액션 함수 */
        [postItem.pending]: pending,
        [postItem.fulfilled]: fulfilled,
        [postItem.rejected]: rejected,

        /** 데이터 수정을 위한 액션 함수 */
        [putItem.pending]: pending,
        [putItem.fulfilled]: fulfilled,
        [putItem.rejected]: rejected,

        /** 데이터 삭제를 위한 액션 함수 */
        [deleteItem.pending]: pending,
        [deleteItem.fulfilled]: fulfilled,
        [deleteItem.rejected]: rejected,
    },
});

export default DepartmentSlice.reducer;
