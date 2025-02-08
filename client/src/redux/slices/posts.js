import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import api from 'utils/api';

export const getPosts = createAsyncThunk(
  'posts/getPosts',
  async ({ page, perPage, search }, thunkApi) => {
    try {
      return (
        await api.get('/post/posts', {
          params: {
            page: page,
            perPage: perPage,
            ...(search && { search: search }),
          },
        })
      ).data;
    } catch (error) {
      if (axios.isAxiosError(error)) {
        return thunkApi.rejectWithValue(error.response?.data);
      }
      throw error;
    }
  },
);

const initialState = {
  result: null,
  error: null,
  status: 'idle',
};
const postsSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getPosts.pending, (state) => {
      state.status = 'loading';
    });
    builder.addCase(getPosts.fulfilled, (state, { payload }) => {
      state.result = payload;
      state.status = 'success';
      state.error = null;
    });
    builder.addCase(getPosts.rejected, (state, action) => {
      if (action.payload) {
        state.error = action.payload;
      } else {
        state.error = action.error.message;
      }
      state.status = 'failed';
    });
  },
});

export default postsSlice.reducer;
