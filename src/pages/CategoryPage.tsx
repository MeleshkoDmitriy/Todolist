import { IoIosArrowBack } from "react-icons/io";
import { Link } from "react-router-dom";
import { TTask, TTodo } from "../types";
import { tasksCounter } from "../utils/tasksCounter";
import { Task } from "../components/Task/Task";
import { useContext } from "react";
import { TodosContext } from "../context/context";
import { categoryFilter } from "../utils/categoryFilter";
import { ButtonIcon } from "../components/shared/ButtonIcon/ButtonIcon";


export const CategoryPage = ({ category }) => {

   const {responceTasks} = useContext(TodosContext)

   const tasks = categoryFilter(responceTasks, category)

   return (
      <section>
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