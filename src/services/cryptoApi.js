import {createApi,fetchBaseQuery} from '@reduxjs/toolkit/query/react';
const cryptoApiHeaders = {

    'X-RapidAPI-Key': '0946789555msh61d72239a415150p1f1831jsn7ad39dbc083f',
    'X-RapidAPI-Host': 'coinranking1.p.rapidapi.com'
      
}

const baseUrl = 'https://coinranking1.p.rapidapi.com';
const createRequest = (url)=>({url,headers:cryptoApiHeaders})
export const cryptoApi = createApi({
    reducerPath : 'cryptoApi',
    baseQuery : fetchBaseQuery({baseUrl}),
    endpoints : (builder) =>({
        getCryptos:builder.query({
            query : (count) => createRequest(`/coins/?limit=${count}`),
        }),
        getExchanges:builder.query({
            query : () => createRequest(`/exchanges`),
        }),
        getCryptoDetails:builder.query({
            query : (coinId) => createRequest(`/coin/${coinId}`),
        }),
        getCryptoHistory:builder.query({
            query : ({coinId,timePeriod}) => createRequest(`coin/${coinId}/history?timeperiod=${timePeriod}`),
            
        })
    })
})
export const {  useGetCryptosQuery,useGetExchangesQuery, useGetCryptoDetailsQuery,useGetCryptoHistoryQuery} = cryptoApi;
// const axios = require("axios");

// const options = {
//   method: 'GET',
//   url: 'https://coinranking1.p.rapidapi.com/exchanges',

//   headers: {
//     'X-RapidAPI-Key': '0946789555msh61d72239a415150p1f1831jsn7ad39dbc083f',
//     'X-RapidAPI-Host': 'coinranking1.p.rapidapi.com'
//   }
// };


// f0021db587msh781fb1cbef39856p11c183jsn45521d5d1c85
// https://coinranking1.p.rapidapi.com