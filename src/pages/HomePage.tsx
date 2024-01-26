import { useContext } from "react"
import { Header } from "../components/Header/Header"
import { TodosContext } from "../context/context"
import { Item } from "../components/Item/Item"
import { Link } from "react-router-dom"



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
            return <Link key={obj.id} to={obj.category}><Item  {...obj}/></Link>
         })}
      </section>
   )
}