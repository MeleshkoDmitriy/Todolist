import { useContext } from "react"
import { Header } from "../components/Header/Header"
import { TodosContext } from "../context/context"
import { Item } from "../components/Item/Item"
import { Link } from "react-router-dom"
import styles from './HomePage.module.scss'
import { Task } from "../components/Task/Task"
import { tasksFilter } from "../utils/utils"



export const HomePage = () => {

   const {
      categories,
      isCatSuccess,
      responceTasks,
      isTasksSuccess
   } = useContext(TodosContext)

   const activeTasks = tasksFilter(responceTasks, false);
   const completedTasks = tasksFilter(responceTasks, true);

   console.log('active', activeTasks,'completed', completedTasks)


   return (
      <div>
         <Header />
         <section className={styles.listsContainer}>
            <div className={styles.activeList}>
               <h2 className={styles.titles}>{activeTasks.length ? `Active Tasks` : `There Are No Active Tasks Yet`}</h2>
               {isTasksSuccess && activeTasks?.map(active => <Task key={active.title} {...active}/>)}
            </div>
{/* {activeTasks.length === 0 && <h3 className={styles.emptyTasks}>There Are No Active Tasks Yet</h3>} */}
            <div className={styles.categoryList}>
               <h2 className={styles.titles}>Categories</h2>
               {isCatSuccess && categories?.map((obj) => {
                  return <Link key={obj.id} to={obj.category}><Item responceTasks={responceTasks} {...obj}/></Link>
               })}
            </div>
            <div className={styles.completedList}>
               <h2 className={styles.titles}>{completedTasks.length ? `Completed Tasks` : `There Are No Completed Tasks Yet`}</h2>
               {isTasksSuccess && completedTasks?.map(completed => <Task key={completed.title} {...completed}/>)}
            </div>
         </section>



      </div>
   )
}