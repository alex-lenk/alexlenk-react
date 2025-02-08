import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { API_BASE_URL } from './apiConfig';

export const projectsApiSlice = createApi({
  reducerPath: 'projectsData',
  baseQuery: fetchBaseQuery({ baseUrl: API_BASE_URL }),
  endpoints: (builder) => ({
    getProjectsData: builder.query({
      query: () => '/projects',
    }),
  }),
});

export const { useGetProjectsDataQuery } = projectsApiSlice;
