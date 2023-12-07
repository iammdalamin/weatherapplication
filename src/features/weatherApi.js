// Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

// Define a service using a base URL and expected endpoints
export const weatherApi = createApi({
  reducerPath: 'weatherApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://api.openweathermap.org/data/2.5'}),
  endpoints: (builder) => ({
    getWeatherInfo: builder.query({
      
      query: (city) => `/weather?q=${city}&units=metric&appid=850eda4d63dd53a6dd4d2eb8c26eb586
      `,
    }),
  }),
})
export const { useGetWeatherInfoQuery } = weatherApi;

