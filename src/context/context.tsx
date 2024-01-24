import { useQuery, useQueryClient } from "@tanstack/react-query";
import { createContext, useEffect, useState } from "react";
import { getCategories } from "../services/api/todos.service";

export const TodosContext = createContext({});

export const TodosProvider = ({children}) => {

   // const queryClient = useQueryClient()

   const [data, setData] = useState(null)

   const {data: responce, isLoading, isSuccess, isError, error} = useQuery({
      queryKey: ['categories'],
      queryFn: () => getCategories()
   })

   useEffect(() => {
      if(isSuccess) {
         setData(responce.data)
      }
   }, [isSuccess])

   const value = {
      data,
      isSuccess,
      isLoading
   }

   return <TodosContext.Provider value={value}>{children}</TodosContext.Provider>
}