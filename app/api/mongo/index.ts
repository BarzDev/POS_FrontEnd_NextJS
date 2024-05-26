import axios from "axios";

export const apiMongo = axios.create({
  baseURL: process.env.NEXT_PUBLIC_MONGO,
  headers: {
    "x-api-key": process.env.NEXT_PUBLIC_APIKEY,
    "Content-Type": "application/json",
  },
});
