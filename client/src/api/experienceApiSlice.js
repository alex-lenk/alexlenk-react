import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { API_BASE_URL } from './apiConfig';

export const experienceApiSlice = createApi({
  reducerPath: 'experienceData',
  baseQuery: fetchBaseQuery({ baseUrl: API_BASE_URL }),
  endpoints: (builder) => ({
    getExperienceData: builder.query({
      query: () => '/experience',
    }),
  }),
});

export const { useGetExperienceDataQuery } = experienceApiSlice;
