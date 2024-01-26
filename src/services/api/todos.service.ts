import axios from "axios";

const API_URL:string = 'https://fda1d42ffa73661a.mokky.dev';
axios.defaults.baseURL = API_URL;

export const getTodos = async () => {
   return (await axios.get('/categories')).data;
}

export const toggleCheck = async (task) => {

   const responce = await axios.get(`/categories/${task.categoryId}`)

   const category = responce.data;


   // const result = category.map((el) => {
   //    return !el.tasks[task.id - 1].completed;
   // })

   console.log(result)

   return await axios.post(`/categories/${task.categoryId}`, result)
}