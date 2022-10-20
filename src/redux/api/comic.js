import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const comicsApi = createApi({
    reducerPath: "comicsApi",
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://gateway.marvel.com:443/v1/public/comics'
    }),
    endpoints: (builder) => ({
        fetchComics: builder.query({
            query: () => ({
                url: "?ts=1&apikey=f2f45905fb8bf4a14ce5aa1cc0c9f98f&hash=6aa87b9eb555552e9aa704544ccf900d",
                method: "GET"
            })
        }),
        fetchComicDetail: builder.query({
            query: (id) => ({
                url: `/${id}?ts=1&apikey=f2f45905fb8bf4a14ce5aa1cc0c9f98f&hash=6aa87b9eb555552e9aa704544ccf900d`,
                method: "GET"
            })
        }),
    })
});

export const { useFetchComicsQuery, useFetchComicDetailQuery } = comicsApi;