import { useContext } from "react"
import { Header } from "../components/Header/Header"
import { TodosContext } from "../context/context"
import { Link } from "react-router-dom"
import { Item } from "../components/Item/Item"



export const HomePage = () => {

   const {
      data, 
      isSuccess, 
      todoCount
   } = useContext(TodosContext)

   return (
      <section>
         <Header todoCount={todoCount}/>
         <div>Home page text</div>
         {isSuccess && data?.map((obj) => {
            return <Item key={obj.id} {...obj}/>
         })}
      </section>
   )
}