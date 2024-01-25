import { useQuery, useQueryClient } from "@tanstack/react-query";
import { createContext, useEffect, useState } from "react";
import { getCategories, getTodos } from "../services/api/todos.service";
import { todoCounter } from "../utils/todoCounter";
import { getPictures } from "../services/api/pictures.service";

export const TodosContext = createContext({});

export const TodosProvider = ({children}) => {

   // const queryClient = useQueryClient()

   const [data, setData] = useState(null)
   const [todoCount, setTodoCount] = useState(0)

   const {data: responce, isLoading, isSuccess} = useQuery({
      queryKey: ['todos'],
      queryFn: () => getTodos()
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

   }

   return <TodosContext.Provider value={value}>{children}</TodosContext.Provider>
}