import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { API_BASE_URL } from './apiConfig'

export const blogApiSlice = createApi({
  reducerPath: 'blogData',
  baseQuery: fetchBaseQuery({
    baseUrl: API_BASE_URL
  }),
  endpoints: (builder) => ({
    getBlogData: builder.query({
      query: () => './blog'
    }),
    getCategoryData: builder.query({
      query: slug => `/category/${slug}`,
    }),
    getAllCategoryData: builder.query({
      query: () => `/category/`,
    }),
    getPostsByCategory: builder.query({
      query: ({ slug, page }) => `/posts/category/${ slug }?page=${ page }`,
    }),
    getPostsData: builder.query({
      query: ({ page }) => `/posts?page=${ page }`,
    }),
    getSinglePostData: builder.query({
      query: slug => `/posts/${ slug }`,
    }),
  })
})

export const {
  useGetBlogDataQuery,
  useGetCategoryDataQuery,
  useGetAllCategoryDataQuery,
  useGetPostsByCategoryQuery,
  useGetPostsDataQuery,
  useGetSinglePostDataQuery
} = blogApiSlice
