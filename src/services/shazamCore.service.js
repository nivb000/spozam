import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'




export const shazamCoreApi = createApi({
    reducerPath: 'shazamCoreApi',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://shazam-core.p.rapidapi.com/v1',
        prepareHeaders: (headers) => {
            headers.set('X-RapidAPI-Key', '7f228f4226msh72a8876db3b3cbfp1ff35ejsn48dac69b1b33')
            return headers
        }
    }),
    endpoints: (builder) => ({
        getTopCharts: builder.query({query: () =>  '/charts/world'})
    })
})

export const {
    useGetTopChartsQuery
} = shazamCoreApi