import { configureStore } from '@reduxjs/toolkit'
// Or from '@reduxjs/toolkit/query/react'
import { weatherApi } from '../features/weatherApi'
import { locationApi } from '../features/locationApi'

export const store = configureStore({
  reducer: {
    // Add the generated reducer as a specific top-level slice
    [weatherApi.reducerPath]: weatherApi.reducer,
    [locationApi.reducerPath]: locationApi.reducer,
  },
  // Adding the api middleware enables caching, invalidation, polling,
  // and other useful features of `rtk-query`.
  middleware: (getDefaultMiddleware) =>
  getDefaultMiddleware().concat(weatherApi.middleware, locationApi.middleware),
})

