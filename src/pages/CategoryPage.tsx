import { IoIosArrowBack } from "react-icons/io";
import { Link } from "react-router-dom";
import { TTask, TTodo } from "../types";
import { tasksCounter } from "../utils/tasksCounter";
import { Task } from "../components/Task/Task";


export const CategoryPage = (categoryObj:TTodo) => {

   const {category, tasks} = categoryObj;

   return (
      <section>
         <Link to='/'>
            <IoIosArrowBack />
         </Link>
         <div>CATEGORY {category}</div>
         <div>{tasksCounter(tasks)}</div>
         <ul>
            {tasks.map((task:TTask) => {
               return <Task key={task.id} {...task}/>
            })}
         </ul>

      </section>
   )
}