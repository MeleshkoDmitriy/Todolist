import { useContext, useEffect, useState } from 'react';
import { TTask } from '../../types'
import styles from './Task.module.scss'
import { TodosContext } from '../../context/context';
import { BsTrash } from "react-icons/bs";
import { LuPenLine } from "react-icons/lu";
import { MdDone } from "react-icons/md";
import { ButtonIcon } from '../shared/ButtonIcon/ButtonIcon';

export const Task = (task) => {

   const {id, category, title, completed} = task;

   const [titleText, setTitleText] = useState('')
   const [isChecked, setChecked] = useState(completed);
   const [isUpdating, setUpdating] = useState(false);
   
   useEffect(() => {
      setTitleText(title)
   }, [])


   const {
      toggleCkeckMutation,
      deleteTaskMutation,
      updateTitleMutation
   } = useContext(TodosContext)

   const isCheckedClass = isChecked ? `${styles.checkedClass} ${styles.titleText}` : `${styles.titleText}` ;

   const handlerCheck = () => {
      toggleCkeckMutation(task);
      setChecked(prev => !prev)
   }
   
   const handlerDelete = () => {
      if(!task.id) {
         return alert('Error while deleting task')
      } else {
         console.log(task.id)
         deleteTaskMutation(task.id)
      }
   }

   const handlerUpdate = () => {

      const updatedTask = {
         ...task,
         title: titleText
      }
      console.log(updatedTask)
      updateTitleMutation(updatedTask)
      setUpdating(false)
   }

   return (
      <li id={task.id} className={styles.wrapper}>
         <input className={styles.checkbox} type="checkbox" checked={isChecked} onClick={handlerCheck}/>
         {isUpdating ?  <input type='text' className={styles.titleText} value={titleText} onChange={(e) => setTitleText(e.target.value)}/>
                     :  <span className={`${isCheckedClass}`}>
                           {titleText}
                        </span>}

         {isUpdating    ? <ButtonIcon  iconColor='green'
                                       onClick={handlerUpdate}>
                              <MdDone />
                           </ButtonIcon>
                        :  <ButtonIcon onClick={() => setUpdating(prev => !prev)} iconColor='blue'>
                              <LuPenLine />
                           </ButtonIcon>}

         <ButtonIcon onClick={handlerDelete} iconColor='red'>
            <BsTrash />
         </ButtonIcon>
      </li>
   )
}