// Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

// Define a service using a base URL and expected endpoints
export const locationApi = createApi({
  reducerPath: 'locationApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://api.openweathermap.org/geo/1.0'}),
  endpoints: (builder) => ({
    getLocation: builder.query({
      
      query: (city) => `/direct?q=${city}&limit=5&appid=850eda4d63dd53a6dd4d2eb8c26eb586`,
    }),
  }),
})
export const { useGetLocationQuery } = locationApi;

  