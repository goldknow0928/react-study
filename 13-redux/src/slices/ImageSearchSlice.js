import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios';

const URL = "";

export const getList = createAsyncThunk("ImageSearchSlice/getList", async (payload, { rejectWithValue }) => {
    let result = null;

    try {
        const response = await axios.get(URL);
        result = response.data;
    } catch (err) {
        result = rejectWithValue(err.response);
    }

    return result;
});

const ImageSearchSlice = createSlice({
    name: 'ImageSearchSlice',
    initialState: {
        data: null,
        loading: false,
        error: null
    },
    extraReducers: {
        [getList.pending]: (state, { payload }) => {
            return { ...state, loading: true }
        },
        [getList.fulfilled]: (state, { payload }) => {
            return {
                data: payload, 
                loading: false,
                error: null
            }
        },
        [getList.rejected]: (state, { payload }) => {
            return {
                ...state, 
                loading: false,
                error: {
                    code: payload.status ? payload.status : 500,
                    message: payload.statusText ? payload.statusText : 'Server Error'
                }
            }
        }
    },
});

export default ImageSearchSlice.reducer;