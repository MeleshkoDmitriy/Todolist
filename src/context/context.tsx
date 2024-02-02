import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { createContext, useEffect, useState } from "react";
import { addTask, getCategories, getTasks, toggleCheck, deleteTask, updateTitle } from "../services/api/todos.service";
import { todoCounter } from "../utils/categoryFilter";
import { getPictures } from "../services/api/pictures.service";
import { allTasksCounter } from "../utils/allTasksCounter";

export const TodosContext = createContext({});

export const TodosProvider = ({children}) => {

   const queryClient = useQueryClient()

   const [categories, setCategories] = useState([])

   const {data: responceCategories, isLoading: isCatLoading, isSuccess: isCatSuccess} = useQuery({
      queryKey: ['categories'],
      queryFn: () => getCategories()
   })

   const {data: responceTasks, isSuccess: isTasksSuccess} = useQuery({
      queryKey:['tasks'],
      queryFn: () => getTasks()
   })

   const {mutate: toggleCkeckMutation} = useMutation({
      mutationFn: (task) => toggleCheck(task),
      onSuccess: () => {
         queryClient.invalidateQueries(['tasks'])
      }
   })

   const {mutate: addTaskMutation} = useMutation({
      mutationFn: (newTask) => addTask(newTask),
      onSuccess: () => {
         queryClient.invalidateQueries(['tasks'])
      }
   })

   const {mutate: deleteTaskMutation} = useMutation({
      mutationFn: (task) => deleteTask(task),
      onSuccess: () => {
         queryClient.invalidateQueries(['tasks'])
      }
   })

   const {mutate: updateTitleMutation} = useMutation({
      mutationFn: (updatedTask) => updateTitle(updatedTask),
      onSuccess: () => {
         queryClient.invalidateQueries(['tasks'])
      }
   })

   useEffect(() => {
      if (isCatSuccess) {
         setCategories(responceCategories);
      }

   }, [isCatSuccess])

   const value = {
      categories,
      isCatSuccess,
      responceTasks,
      isTasksSuccess,
      toggleCkeckMutation,
      addTaskMutation,
      deleteTaskMutation,
      updateTitleMutation
   }

   return <TodosContext.Provider value={value}>{children}</TodosContext.Provider>
}