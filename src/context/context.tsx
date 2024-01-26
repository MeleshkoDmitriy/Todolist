import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { createContext, useEffect, useState } from "react";
import { getCategories, getTodos, toggleCheck } from "../services/api/todos.service";
import { todoCounter } from "../utils/todoCounter";
import { getPictures } from "../services/api/pictures.service";

export const TodosContext = createContext({});

export const TodosProvider = ({children}) => {

   const queryClient = useQueryClient()

   const [data, setData] = useState([])
   const [todoCount, setTodoCount] = useState(0)

   const {data: responce, isLoading, isSuccess} = useQuery({
      queryKey: ['todos'],
      queryFn: () => getTodos()
   })

   const {mutate: toggleCkeckMutation} = useMutation({
      mutationFn: (task) => toggleCheck(task),
      onSuccess: () => {
         queryClient.invalidateQueries(['todos'])
      }
   })

   useEffect(() => {
      if (isSuccess) {
         setData(responce);
         setTodoCount(todoCounter(responce))
      }

   }, [isSuccess])

   const value = {
      data,
      isSuccess,
      isLoading,
      todoCount,
      toggleCkeckMutation
   }

   return <TodosContext.Provider value={value}>{children}</TodosContext.Provider>
}