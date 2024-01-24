import axios from "axios";

const API_URL:string = 'https://fda1d42ffa73661a.mokky.dev';
axios.defaults.baseURL = API_URL;

export const getCategories = async () => {
   return await axios.get('/categories');
}