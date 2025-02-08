import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import api from 'utils/api';

export const updatePost = (postId, content) => {
  return api.put(`/post/update-post`, { id: postId, content });
};

export const deletePost = (postId) => {
  return api.delete(`/post/delete-post`, { data: { id: postId } });
};

export const getPost = createAsyncThunk(
  'posts/getPost',
  async (slug, thunkApi) => {
    try {
      return (await api.get(`/posts/${ slug }`)).data;
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

const postSlice = createSlice({
  name: 'post',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getPost.pending, (state) => {
      state.status = 'loading';
    });
    builder.addCase(getPost.fulfilled, (state, { payload }) => {
      state.result = payload;
      state.status = 'success';
      state.error = null;
    });
    builder.addCase(getPost.rejected, (state, action) => {
      if (action.payload) {
        state.error = action.payload;
      } else {
        state.error = action.error.message;
      }
      state.status = 'failed';
    });
  },
});

export default postSlice.reducer;
