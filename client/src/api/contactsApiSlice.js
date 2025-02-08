import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { API_BASE_URL } from './apiConfig';

export const contactsApiSlice = createApi({
  reducerPath: 'contactsData',
  baseQuery: fetchBaseQuery({ baseUrl: API_BASE_URL }),
  endpoints: (builder) => ({
    getContactsData: builder.query({
      query: () => '/contacts',
    }),
  }),
});

export const { useGetContactsDataQuery } = contactsApiSlice;
