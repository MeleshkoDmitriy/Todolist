import axios from "axios";
import { TTask } from "../../types";

const API_URL:string = 'https://fda1d42ffa73661a.mokky.dev';
axios.defaults.baseURL = API_URL;

export const getCategories = async () => {
   return (await axios.get('/categories')).data;
}

export const getTasks = async () => {
   return (await axios.get('/tasks')).data;
}

export const toggleCheck = async (task:TTask) => {
   return await axios.patch(`/tasks/${task.id}`, {...task, completed: !task.completed})
}

export const addTask = async (newTask) => {
   return await axios.post('/tasks', newTask)
}

export const deleteTask = async (taskId) => {
   return await axios.delete(`/tasks/${taskId}`)
}

export const updateTitle = async (updatedTask) => {
   console.log(updatedTask)
   return await axios.patch(`/tasks/${updatedTask.id}`, updatedTask)
}