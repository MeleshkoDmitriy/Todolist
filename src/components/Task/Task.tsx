import { useState } from 'react';
import { TTask } from '../../types'
import styles from './Task.module.scss'

export const Task = (task:TTask) => {

   const {id, title, completed} = task;

   const [isChecked, setChecked] = useState(completed)

   const isCheckedClass = isChecked ? `${styles.isCheckedClass}` : '' ;


   
   return (
      <li key={id}>
         <input type="checkbox" checked={isChecked} onClick={() => setChecked(prev => !prev)}/>
         <span className={`${styles.title} ${isCheckedClass}`}>
            {title}
         </span>
      </li>
   )
}