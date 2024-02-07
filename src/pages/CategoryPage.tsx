import { IoIosArrowBack } from "react-icons/io";
import { Link } from "react-router-dom";
import { TTask, TTodo } from "../types";
import { Task } from "../components/Task/Task";
import { useContext } from "react";
import { TodosContext } from "../context/context";
import { categoryFilter } from "../utils/utils";
import { ButtonIcon } from "../components/shared/ButtonIcon/ButtonIcon";
import styles from './CategoryPage.module.scss'

export const CategoryPage = ({ category }) => {

   const {responceTasks} = useContext(TodosContext)

   const tasks = categoryFilter(responceTasks, category)

   return (
      <section className={styles.wrapper}>
         <Link to='/'>
            <ButtonIcon iconColor="blue">
               <IoIosArrowBack />
            </ButtonIcon>
         </Link>
         <div>CATEGORY {category}</div>
         <div>
            {tasks.length}
            </div>
         <ul>
            {tasks?.map((task:TTask) => {
               return <Task key={task.id} {...task}/>
            })}
         </ul>

      </section>
   )
}