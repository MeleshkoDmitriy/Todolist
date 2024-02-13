import axios from "axios";
import { TCategory, TTask } from "../../types";

const API_URL:string = 'https://fda1d42ffa73661a.mokky.dev';
axios.defaults.baseURL = API_URL;

export const getCategories = async (): Promise<TCategory[]> => {
   return (await axios.get('/categories')).data;
}

export const getTasks = async (): Promise<TTask[]> => {
   return (await axios.get('/tasks')).data;
}

export const toggleCheck = async (task:TTask): Promise<void> => {
   return await axios.patch(`/tasks/${task.id}`, {...task, completed: !task.completed})
}

export const addTask = async (newTask: TTask): Promise<void> => {
   return await axios.post('/tasks', newTask)
}

export const deleteTask = async (taskId: TTask): Promise<void> => {
   return await axios.delete(`/tasks/${taskId}`)
}

export const updateTitle = async (updatedTask: TTask): Promise<void> => {
   return await axios.patch(`/tasks/${updatedTask.id}`, updatedTask)
}