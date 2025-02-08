import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { API_BASE_URL } from './apiConfig';

export const skillsApiSlice = createApi({
  reducerPath: 'skillsData',
  baseQuery: fetchBaseQuery({ baseUrl: API_BASE_URL }),
  endpoints: (builder) => ({
    getSkillsData: builder.query({
      query: () => '/skills',
    }),
  }),
});

export const { useGetSkillsDataQuery } = skillsApiSlice;
