import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const articleApi = createApi({
  reducerPath: 'articleApi',
  baseQuery: fetchBaseQuery({ baseUrl: '/api' }), // Add your API base URL here
  endpoints: (builder) => ({
    getSummary: builder.query({
      query: () => 'test', // You can also use params if needed
    }),
  }),
});

export const { useGetSummaryQuery } = articleApi;
