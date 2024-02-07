import { useContext } from "react"
import { Header } from "../components/Header/Header"
import { TodosContext } from "../context/context"
import { Item } from "../components/Item/Item"
import { Link } from "react-router-dom"
import styles from './HomePage.module.scss'
import { Task } from "../components/Task/Task"



export const HomePage = () => {

   const {
      categories,
      isCatSuccess,
      responceTasks,
      isTasksSuccess
   } = useContext(TodosContext)


   return (
      <div>
         <Header />
         <section className={styles.list}>
            {isCatSuccess && categories?.map((obj) => {
               return <Link key={obj.id} to={obj.category}><Item responceTasks={responceTasks} {...obj}/></Link>
            })}
         </section>
      </div>
   )
}