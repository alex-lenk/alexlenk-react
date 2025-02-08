import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import api from 'utils/api';
import { removeFromStorage, saveToStorage } from 'utils/storage';

export const logoutUser = createAsyncThunk('auth/logoutUser', () => {
  removeFromStorage('token');
  return true;
});

export const getUserByToken = createAsyncThunk(
  'auth/getUserByToken',
  async (_, thunkApi) => {
    const token = localStorage.token;
    if (!token) {
      throw new Error();
    }
    try {
      const result = await api.get(`/auth/getuser`);
      return result.data;
    } catch (error) {
      if (axios.isAxiosError(error)) {
        if (localStorage.token) {
          removeFromStorage('token');
        }
        return thunkApi.rejectWithValue(error.response?.data);
      }
      throw error;
    }
  },
);

export const loginUser = createAsyncThunk(
  'auth/loginUser',
  async (profile, thunkApi) => {
    try {
      const result = await api.post(`/auth/login`, profile);
      if (result.status === 200) {
        saveToStorage('token', result.data.token);
      }
      return result.data;
    } catch (error) {
      if (axios.isAxiosError(error)) {
        return thunkApi.rejectWithValue(error.response?.data);
      }
      throw error;
    }
  },
);

const initialState = {
  result: {
    username: '',
    fullName: '',
    email: '',
    id: '',
    imageURL: '',
  },
  error: null,
  token: '',
  status: 'idle',
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getUserByToken.pending, (state) => {
      state.status = 'loading';
    });
    builder.addCase(getUserByToken.fulfilled, (state, { payload }) => {
      state.result = payload;
      state.error = null;
      state.status = 'success';
    });
    builder.addCase(getUserByToken.rejected, (state, action) => {
      if (action.payload) {
        state.error = action.payload;
      } else {
        state.error = action.error.message;
      }
      state.status = 'failed';
    });
    builder.addCase(loginUser.pending, (state) => {
      state.status = 'loading';
    });
    builder.addCase(loginUser.fulfilled, (state, { payload }) => {
      state.result = payload;
      state.token = payload.token;
      state.status = 'success';
      state.error = null;
    });
    builder.addCase(loginUser.rejected, (state, action) => {
      if (action.payload) {
        state.error = action.payload;
      } else {
        state.error = action.error.message;
      }
      state.status = 'failed';
    });
    builder.addCase(logoutUser.pending, (state) => {
      state.status = 'loading';
    });
    builder.addCase(logoutUser.fulfilled, (state) => {
      state.result = {
        username: '',
        fullName: '',
        email: '',
        id: '',
        imageURL: '',
      };
      state.error = null;
      state.token = '';
      state.status = 'failed';
    });
  },
});

export default userSlice.reducer;
