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

   const counter = tasks.length;

   return (
      <section className={styles.wrapper}>
         <div className={styles.header}>
            <div className={styles.backBtn}>
               <Link to='/'>
                  <ButtonIcon iconColor="white">
                     <IoIosArrowBack />
                  </ButtonIcon>
               </Link>
            </div>

            <div className={styles.headerTitles}>
               <div className={styles.title}>
                  {category}
               </div>
               <div className={styles.subTitle}>
                  {tasks.length  ? `There Are ${counter} Tasks`
                                 : `There Are No Tasks Here Yet`}
               </div>
            </div>

         </div>
         <ul className={styles.listContainer}>
            {tasks?.map((task:TTask) => {
               return <Task key={task.id} {...task}/>
            })}
         </ul>

      </section>
   )
}