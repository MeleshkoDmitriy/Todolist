import { InvalidateQueryFilters, MutationFunction, useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { ReactNode, createContext, useEffect, useState } from "react";
import { addTask, getCategories, getTasks, toggleCheck, deleteTask, updateTitle } from "../services/api/todos.service";
import { TCategory, TTask } from "../types";

export interface TodosContextValue {
   categories: TCategory[];
   isCatSuccess: boolean;
   responceTasks: TTask[];
   isTasksSuccess: boolean;
   isCatLoading: boolean;
   toggleCheckMutation: MutationFunction<void, TTask>;
   addTaskMutation: MutationFunction<void, TTask>;
   deleteTaskMutation: MutationFunction<void, TTask>;
   updateTitleMutation: MutationFunction<void, TTask>;
}

export const TodosContext = createContext<TodosContextValue>({
   categories: [],
   responceTasks: [],
   isCatSuccess: false,
   isTasksSuccess: false,
   isCatLoading: true,
   toggleCheckMutation: async () => {},
   addTaskMutation: async () => {},
   deleteTaskMutation: async () => {},
   updateTitleMutation: async () => {}
});

interface TodosProviderProps {
   children: ReactNode;
}


export const TodosProvider = ({children}: TodosProviderProps) => {

   const queryClient = useQueryClient()

   const [categories, setCategories] = useState<TCategory[]>([])


   const {data: responceCategories, isLoading: isCatLoading, isSuccess: isCatSuccess} = useQuery({
      queryKey: ['categories'],
      queryFn: () => getCategories()
   })

   const {data: responceTasks, isSuccess: isTasksSuccess} = useQuery({
      queryKey:['tasks'],
      queryFn: () => getTasks()
   })

   const {mutate: toggleCheckMutation} = useMutation({
      mutationFn: (task: TTask) => toggleCheck(task),
      onSuccess: () => {
         queryClient.invalidateQueries(['tasks'] as InvalidateQueryFilters)
      }
   })

   const {mutate: addTaskMutation} = useMutation({
      mutationFn: (newTask: TTask) => addTask(newTask),
      onSuccess: () => {
         queryClient.invalidateQueries(['tasks'] as InvalidateQueryFilters)
      }
   })

   const {mutate: deleteTaskMutation} = useMutation({
      mutationFn: (task: TTask) => deleteTask(task),
      onSuccess: () => {
         queryClient.invalidateQueries(['tasks'] as InvalidateQueryFilters)
      }
   })

   const {mutate: updateTitleMutation} = useMutation({
      mutationFn: (updatedTask: TTask) => updateTitle(updatedTask),
      onSuccess: () => {
         queryClient.invalidateQueries(['tasks'] as InvalidateQueryFilters)
      }
   })

   useEffect(() => {
      if (isCatSuccess) {
         setCategories(responceCategories);
      }

   }, [isCatSuccess, responceCategories])

   const value = {
      categories,
      isCatSuccess,
      responceTasks,
      isTasksSuccess,
      isCatLoading,
      toggleCheckMutation,
      addTaskMutation,
      deleteTaskMutation,
      updateTitleMutation,
   }

   return <TodosContext.Provider value={value}>{children}</TodosContext.Provider>
}