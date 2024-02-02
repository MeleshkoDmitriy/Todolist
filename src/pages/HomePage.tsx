import { useContext } from "react"
import { Header } from "../components/Header/Header"
import { TodosContext } from "../context/context"
import { Item } from "../components/Item/Item"
import { Link } from "react-router-dom"



export const HomePage = () => {

   const {
      categories,
      isCatSuccess,
      responceTasks
   } = useContext(TodosContext)

   return (
      <section>
         <Header />
         <div>Home page text</div>
         {isCatSuccess && categories?.map((obj) => {
            return <Link key={obj.id} to={obj.category}><Item responceTasks={responceTasks} {...obj}/></Link>
         })}
      </section>
   )
}