// api/exampleApi.ts
import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';

export const authApi = createApi({
  baseQuery: fetchBaseQuery({baseUrl: 'https://api.example.com'}),
  endpoints: builder => ({
    login: builder.mutation({
      query: (body: {email: string; password: string}) => ({
        url: `login`,
        method: 'POST',
        body,
      }),
    }),
  }),
});

// Auto-generated hooks
export const {useLoginMutation} = authApi;
export const {endpoints, reducerPath, reducer, middleware} = authApi;

// reducerPath, reducer, middleware are only used in store configuration
// endpoints will have:
// endpoints.login.initiate(), endpoints.login.select(), endpoints.login.useQuery()
// see `createApi` overview for _all exports_
