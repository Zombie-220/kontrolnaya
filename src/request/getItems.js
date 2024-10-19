import axios from "axios";

export const baseURL = axios.create({
    baseURL: "https://my-json-server.typicode.com/butovivan98/json/products",
    headers: {},
});