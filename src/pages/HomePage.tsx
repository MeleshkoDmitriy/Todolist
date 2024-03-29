import { useContext } from "react"
import { Header } from "../components/Header/Header"
import { TodosContext, TodosContextValue } from "../context/context"
import { Item } from "../components/Item/Item"
import { Link } from "react-router-dom"
import styles from './HomePage.module.scss'
import { Task } from "../components/Task/Task"
import { tasksFilter } from "../utils/utils"
import { ButtonIcon } from "../components/shared/ButtonIcon/ButtonIcon"
import { IoIosArrowBack } from "react-icons/io";
import { TTask } from "../types"



export const HomePage:React.FC = () => {

   const {
      categories,
      isCatSuccess,
      responceTasks,
      isTasksSuccess
   } = useContext<TodosContextValue>(TodosContext)

   const loadingTask = {
      id: 0,
      title: 'Loading..',
      category: 'Personal',
      completed: false
   }

   const loadingCategory = {
      category: 'Loading..',
      link: undefined,
   }
   

   const activeTasks: TTask[] = tasksFilter(responceTasks, false);
   const completedTasks: TTask[] = tasksFilter(responceTasks, true);

   return (
      <div>
         <Header />
         <section className={styles.listsContainer}>
            <div className={styles.activeList} id="active">
               <h2 className={styles.titles}>{activeTasks.length ? `Active Tasks` : `There Are No Active Tasks Yet`}</h2>
               <ul>
                  {isTasksSuccess   ? activeTasks?.map(active => <Task key={active.title} {...active}/>)
                                    : <Task {...loadingTask} />}
               </ul>
            </div>
            <div className={styles.categoryList} id="categories">
               <h2 className={styles.titles}>Categories</h2>
               {isCatSuccess  ? categories?.map((obj) => {
                  return <Link key={obj.id} to={obj.category}><Item responceTasks={responceTasks} {...obj}/></Link>
               })
                              : <Item {...loadingCategory} />}
            </div>
            <div className={styles.completedList} id="completed">
               <h2 className={styles.titles}>{completedTasks.length ? `Completed Tasks` : `There Are No Completed Tasks Yet`}</h2>
               <ul>
                  {isTasksSuccess   ? completedTasks?.map(completed => <Task key={completed.title} {...completed}/>)
                                    : <Task {...loadingTask} />}
               </ul>
            </div>
         </section>
         <div style={{position: 'fixed', bottom:'14px', left:'50px'}} className={styles.toTop}>
            <ButtonIcon iconColor='blue' className={styles.arrow}>
               <a href="#top">
                  <IoIosArrowBack className={styles.icon} style={{transform: 'rotate(90deg)'}}/>
               </a>
            </ButtonIcon>
         </div>

      </div>
   )
}