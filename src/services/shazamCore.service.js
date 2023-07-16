import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'




export const shazamCoreApi = createApi({
    reducerPath: 'shazamCoreApi',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://shazam-core7.p.rapidapi.com',
        prepareHeaders: (headers) => {
            headers.set('X-RapidAPI-Key', '')
            headers.set('X-RapidAPI-Host', 'shazam-core7.p.rapidapi.com')
            return headers
        }
    }),
    endpoints: (builder) => ({
        getTopCharts: builder.query({query: () =>  '/charts/get-top-songs-in-world'}),
        getSongsByGenre: builder.query({query: (genre) =>  `/charts/genre-world?genre_code=${genre}`}),
        getSongDetails: builder.query({query: ({songId}) =>  `/tracks/details?track_id=${songId}`}),
        getSongRelated: builder.query({query: ({songId}) =>  `/tracks/related?track_id=${songId}`}),
        getArtistDetails: builder.query({query: (artistId) =>  `/artists/details?artist_id=${artistId}`}),
        getSongsByCountry: builder.query({query: (countryCode) =>  `/charts/country?country_code=${countryCode}`}),
        getSongsBySearch: builder.query({query: (searchTerm) =>  `/search/multi?search_type=SONGS_ARTISTS&query=${searchTerm}`})
    })
})

export const {
    useGetTopChartsQuery,
    useGetSongsByGenreQuery,
    useGetSongDetailsQuery,
    useGetSongRelatedQuery,
    useGetArtistDetailsQuery,
    useGetSongsByCountryQuery,
    useGetSongsBySearchQuery
} = shazamCoreApi
