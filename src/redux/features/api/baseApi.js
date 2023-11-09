import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const baseURL = "https://project-ilish-server.vercel.app";
// const baseURL='http://localhost:5000/'

const baseApi = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({ baseUrl: `${baseURL}/api` }),
  endpoints: () => ({}),
});

export default baseApi;
