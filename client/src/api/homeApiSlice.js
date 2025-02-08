import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { API_BASE_URL } from './apiConfig';

export const homeApiSlice = createApi({
  reducerPath: 'homeData',
  baseQuery: fetchBaseQuery({
    baseUrl: API_BASE_URL
  }),
  endpoints: (builder) => ({
    getHomeData: builder.query({
      query: () => '/home',
    }),
  }),
});

export const { useGetHomeDataQuery } = homeApiSlice;
