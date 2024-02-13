import { IoIosArrowBack } from "react-icons/io";
import { Link } from "react-router-dom";
import { TTask, TTodo } from "../types";
import { Task } from "../components/Task/Task";
import { useContext } from "react";
import { TodosContext, TodosContextValue } from "../context/context";
import { categoryFilter } from "../utils/utils";
import { ButtonIcon } from "../components/shared/ButtonIcon/ButtonIcon";
import styles from './CategoryPage.module.scss'
import defaultImage from '../assets/images/defaultImage.png'

interface CategoryPageProps {
   category: string;
}

export const CategoryPage:React.FC<CategoryPageProps> = ({ category }) => {

   const {responceTasks, categories, isCatSuccess} = useContext<TodosContextValue>(TodosContext)

   const tasks = categoryFilter(responceTasks, category)

   const counter = tasks.length;

   const imageLink = categories.find(el => {
      if (el.category === category) {
         return el.link;
      }
   })

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
            <div className={styles.headerBody}>
               <div className={styles.headerTitles}>
                  <div className={styles.title}>
                     {category}
                  </div>
                  <div className={styles.subTitle}>
                     {tasks.length  ? `There Are ${counter} Tasks`
                                    : `There Are No Tasks Here Yet`}
                  </div>
               </div>
               <div className={styles.headerImage}>
                  <img src={isCatSuccess ? imageLink?.link : defaultImage} alt="category image" />
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