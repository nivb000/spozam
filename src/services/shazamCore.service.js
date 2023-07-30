import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'




export const shazamCoreApi = createApi({
    reducerPath: 'shazamCoreApi',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://shazam.p.rapidapi.com',
        prepareHeaders: (headers) => {
            headers.set('X-RapidAPI-Key', import.meta.env.VITE_SHAZAM_KEY)
            headers.set('X-RapidAPI-Host', 'shazam.p.rapidapi.com')
            return headers
        }
    }),
    endpoints: (builder) => ({
        getTopCharts: builder.query({ query: () => '/charts/track' }),
        getSongsByGenre: builder.query({ query: (genre) => `/charts/track?listId=${genre}` }),
        getSongDetails: builder.query({ query: ({ songId }) => `/songs/get-details?key=${songId}` }),
        getSongsByArtist: builder.query({ query: (artistId) => `/artists/get-top-songs?id=${artistId}` }),
        getArtistDetails: builder.query({ query: (artistId) => `/artists/get-summary?id=${artistId}` }),
        getSongsByCountry: builder.query({ query: (countryCode) => `/charts/track?locale=${countryCode}` }),
        getSongsBySearch: builder.query({ query: (searchTerm) => `/search?term=${searchTerm}` })
    })
})

export const {
    useGetTopChartsQuery,
    useGetSongsByGenreQuery,
    useGetSongDetailsQuery,
    useGetSongsByArtistQuery,
    useGetArtistDetailsQuery,
    useGetSongsByCountryQuery,
    useGetSongsBySearchQuery
} = shazamCoreApi
