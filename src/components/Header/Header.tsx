import { FC, useContext } from 'react'
import styles from './Header.module.scss'
import { TodosContext } from '../../context/context'
import { allTasksCounter } from '../../utils/allTasksCounter'


// interface HeaderProps {
// }

export const Header:FC = () => {

   const {responceTasks, isTasksSuccess} = useContext(TodosContext)

   console.log(responceTasks, isTasksSuccess)


   return (
      <header className={styles.wrapper}>
         <div>Tasks for today: {isTasksSuccess  ? responceTasks.length
                                                : '0'}</div>
      </header>
   )
}