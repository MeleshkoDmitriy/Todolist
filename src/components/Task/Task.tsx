import { useContext, useEffect, useState } from 'react';
import { TTask } from '../../types'
import styles from './Task.module.scss'
import { TodosContext, TodosContextValue } from '../../context/context';
import { BsTrash } from "react-icons/bs";
import { LuPenLine } from "react-icons/lu";
import { MdDone } from "react-icons/md";
import { ButtonIcon } from '../shared/ButtonIcon/ButtonIcon';
import defaultImage from '../../assets/images/defaultImage.png';
import { toast } from 'react-toastify';
import { Bounce } from 'react-toastify';

export const Task:React.FC<TTask> = (task: TTask) => {

   const {id, category, title, completed} = task;

   const [titleText, setTitleText] = useState<string>('')
   const [isChecked, setChecked] = useState<boolean>(completed);
   const [isUpdating, setUpdating] = useState<boolean>(false);
   
   useEffect(() => {
      setTitleText(title)
   }, [])

   const {
      toggleCheckMutation,
      deleteTaskMutation,
      updateTitleMutation,
      categories,
   } = useContext<TodosContextValue>(TodosContext)

   const updateToast = () => {
      toast.info('Task was updated!', {
         position: "top-left",
         autoClose: 1500,
         hideProgressBar: false,
         closeOnClick: true,
         pauseOnHover: true,
         draggable: true,
         progress: undefined,
         theme: "colored",
         transition: Bounce,
         });
   }

   const deleteToast = (text: string) => {
      toast.warning(`"${text}" was deleted`, {
         position: "top-left",
         autoClose: 1500,
         hideProgressBar: false,
         closeOnClick: true,
         pauseOnHover: true,
         draggable: true,
         progress: undefined,
         theme: "colored",
         transition: Bounce,
         });
   }

   const isCheckedClass = isChecked ? `${styles.checkedClass} ${styles.titleText}` : `${styles.titleText}` ;

   const handlerCheck = () => {
      toggleCheckMutation(task);
      setChecked(prev => !prev)
   }
   
   const handlerDelete = () => {
      if(!task.id) {
         return alert('Error while deleting task')
      } else {
         deleteTaskMutation(task.id)
      }
   }

   const handlerUpdate = () => {

      const updatedTask = {
         ...task,
         title: titleText
      }
      updateTitleMutation(updatedTask)
      setUpdating(false)
   }

   const imageLink = categories.find(c => {
      if(c.category === category) {
         return c.link;
      }
   })

   return (
      <li className={styles.outer}>
         <div id={task.id} className={styles.wrapper}>
            <div className={styles.categoryIcon}>
               <img src={imageLink ? imageLink.link : defaultImage} alt="category" title={category}/>
            </div>
            <input className={styles.checkbox} type="checkbox" checked={isChecked} onChange={handlerCheck}/>
            {isUpdating ?  <input type='text' className={styles.titleText} value={titleText} onChange={(e) => setTitleText(e.target.value)}/>
                        :  <span className={`${isCheckedClass}`}>
                              {titleText}
                           </span>}

            <div className={styles.buttons}>
               {isUpdating    ? <ButtonIcon  iconColor='green'
                                             onClick={() => {handlerUpdate() 
                                                             updateToast()}}>
                                    <MdDone />
                                 </ButtonIcon>
                              :  <ButtonIcon onClick={() => {
                                 setUpdating(prev => !prev)
                              }} iconColor='blue'>
                                    <LuPenLine />
                                 </ButtonIcon>}

               <ButtonIcon className={styles.trashBtn} onClick={() => {
                  handlerDelete(),
                  deleteToast(titleText)
                  }} iconColor='red'>
                  <BsTrash />
               </ButtonIcon>
            </div>
         </div>

      </li>

   )
}