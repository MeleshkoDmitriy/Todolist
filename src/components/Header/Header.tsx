import { useContext } from 'react'
import styles from './Header.module.scss'
import { TodosContext, TodosContextValue } from '../../context/context'
import defaultUser from '../../assets/images/defaultUser.png'
import { tasksFilter } from '../../utils/utils'
import { ButtonIcon } from '../shared/ButtonIcon/ButtonIcon'
// import { HiOutlinePlus } from "react-icons/hi2";
import { BsGithub } from "react-icons/bs";


export const Header: React.FC = () => {

   const { responceTasks, isTasksSuccess } = useContext<TodosContextValue>(TodosContext)

   const tasksForToday: number = tasksFilter(responceTasks, false).length

   return (
      <header className={styles.wrapper} id='top'>
         <div className={styles.body}>
            <div className={styles.bodyText}>
               <h1 className={styles.title}>Hello User</h1>
               <p className={styles.subTitle}>Tasks For Today:
                  <span className={styles.counter}> {isTasksSuccess ? tasksForToday : '0'}</span>
               </p>
               <div className={styles.anchors}>
                  <div className={styles.anchor}>
                     <span><a href="#active">Active</a></span>
                  </div>
                  <div className={styles.anchor}>
                     <span><a href="#categories">Categories</a></span>
                  </div>
                  <div className={styles.anchor}>
                     <span><a href="#completed">Completed</a></span>
                  </div>
               </div>
            </div>
            <div className={styles.bodyImage}>
               <img src={defaultUser} alt="User" title='profile avatar' />
               <a href="https://github.com/MeleshkoDmitriy/Todolist" target='_blank'>
                  <ButtonIcon onClick={() => console.log('GitHub')} iconColor='smallplus'>
                     <BsGithub />
                  </ButtonIcon>
               </a>
            </div>
         </div>
      </header>
   )
}