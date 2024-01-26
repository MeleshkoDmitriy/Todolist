import { useContext, useState } from 'react';
import { TTask } from '../../types'
import styles from './Task.module.scss'
import { TodosContext } from '../../context/context';

export const Task = (task) => {


   const [isChecked, setChecked] = useState(task.completed);

   const {toggleCkeckMutation} = useContext(TodosContext)

   const isCheckedClass = isChecked ? `${styles.isCheckedClass}` : '' ;

   const handlerCheck = () => {
      console.log(task)
      toggleCkeckMutation(task);
      setChecked(prev => !prev)
   }
   
   return (
      <li key={task.id}>
         <input type="checkbox" checked={isChecked} onClick={() => handlerCheck()}/>
         <span className={`${styles.title} ${isCheckedClass}`}>
            {task.title}
         </span>
      </li>
   )
}