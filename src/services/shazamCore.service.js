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
        getTopCharts: builder.query({query: () =>  '/charts/world'}),
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