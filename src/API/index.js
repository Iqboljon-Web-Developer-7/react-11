import axios from "axios";

export const axiosFun = axios.create({
  baseURL: "https://dummyjson.com",

  headers: { "Content-Type": "application/json" },
});
