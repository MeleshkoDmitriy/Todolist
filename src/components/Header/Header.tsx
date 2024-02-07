import { FC, useContext } from 'react'
import styles from './Header.module.scss'
import { TodosContext } from '../../context/context'
import defaultUser from '../../assets/images/defaultUser.png'
import { tasksFilter } from '../../utils/utils'
import { ButtonIcon } from '../shared/ButtonIcon/ButtonIcon'
import { HiOutlinePlus } from "react-icons/hi2";



// interface HeaderProps {
// }

export const Header:FC = () => {

   const {responceTasks, isTasksSuccess} = useContext(TodosContext)

   let tasksForToday = tasksFilter(responceTasks, false).length

   return (
      <header className={styles.wrapper}>
         <div className={styles.body}>
            <div className={styles.bodyText}>
               <h1 className={styles.title}>Hello User</h1>
               <p className={styles.subTitle}>Tasks For Today:  
               <span className={styles.counter}> {isTasksSuccess ? tasksForToday : '0'}</span>
               </p>
            </div>
            <div className={styles.bodyImage}>
               <img src={defaultUser} alt="User" />
               <ButtonIcon iconColor='smallplus'>
                  <HiOutlinePlus />
               </ButtonIcon>
            </div>
            
            
            

         </div>
      </header>
   )
}