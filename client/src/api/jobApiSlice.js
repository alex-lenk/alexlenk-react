import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { API_BASE_URL } from './apiConfig';

export const jobApiSlice = createApi({
  reducerPath: 'jobData',
  baseQuery: fetchBaseQuery({ baseUrl: API_BASE_URL }),
  endpoints: (builder) => ({
    getJobData: builder.query({
      query: () => '/jobHistories',
    }),
  }),
});

export const { useGetJobDataQuery } = jobApiSlice;
