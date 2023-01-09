import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getList = createAsyncThunk("MovieRankSlice/getList", async (payload, { rejectWithValue }) => {
    let result = null;

    try {
        const response = await axios.get(process.env.REACT_APP_KOBIS_API_URL, {
            params: {
                key: process.env.REACT_APP_KOBIS_API_KEY,
                // 컨트롤러에서 전달하는 파라미터는 payload로 전달된다
                // --> 단일 값인 경우 payload 자체가 그 값, JSON인 경우 payload가 JSON이 된다
                targetDt: payload.targetDt,
            },
        });
        result = response.data;

        // 영화진흥위원회 API는 에러가 발생하더라도 HTTP상태코드는 200으로 응답이 오기 때문에 catch문이 동작하지 않는다
        // 그러므로 직접 에러를 감지해야 한다
        if (result.faultInfo !== undefined) {
            const err = new Error();
            err.response = { status: 500, statusText: result.faultInfo.message };
            throw err;
        }
    } catch (err) {
        result = rejectWithValue(err.response);
    }

    return result;
});

const MovieRankSlice = createSlice({
    name: "MovieRankSlice",
    initialState: {
        data: null,
        loading: false,
        error: null,
    },
    extraReducers: {
        [getList.pending]: (state, { payload }) => {
            return { ...state, loading: true };
        },
        [getList.fulfilled]: (state, { payload }) => {
            return {
                data: payload,
                loading: false,
                error: null,
            };
        },
        [getList.rejected]: (state, { payload }) => {
            return {
                ...state,
                loading: false,
                error: {
                    code: payload.status ? payload.status : 500,
                    message: payload.statusText ? payload.statusText : "Server Error",
                },
            };
        },
    },
});

export default MovieRankSlice.reducer;
