import {createApi,fetchBaseQuery} from '@reduxjs/toolkit/query/react';

const cryptoNewsHeaders = {
   
        'X-BingApis-SDK': 'true',
        'X-RapidAPI-Key': '0946789555msh61d72239a415150p1f1831jsn7ad39dbc083f',
        'X-RapidAPI-Host': 'bing-news-search1.p.rapidapi.com'
      
}
const baseUrl = 'https://bing-news-search1.p.rapidapi.com';
const createRequest = (url)=>({url,headers:cryptoNewsHeaders})


export const cryptoNewsApi = createApi({
    reducerPath : 'cryptoNewsApi',
    baseQuery : fetchBaseQuery({baseUrl}),
    endpoints : (builder) =>({
        getCryptoNews : builder.query({
            query : ({newsCategory,count}) => createRequest(`/news/search?q=${newsCategory}&safeSearch=off&textFormat=Raw&freshness=Day&count=${count}`),
        })
    })
})

export const {  useGetCryptoNewsQuery} = cryptoNewsApi;
