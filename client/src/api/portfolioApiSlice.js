import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { API_BASE_URL } from './apiConfig';

export const portfolioApiSlice = createApi({
  reducerPath: 'portfolioData',
  baseQuery: fetchBaseQuery({ baseUrl: API_BASE_URL }),
  endpoints: (builder) => ({
    getPortfolioData: builder.query({
      query: () => '/portfolio',
    }),
  }),
});

export const { useGetPortfolioDataQuery } = portfolioApiSlice;
