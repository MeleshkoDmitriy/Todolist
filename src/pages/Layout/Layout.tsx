import { Route, Routes } from 'react-router-dom';
import { CategoryPage } from '../CategoryPage';
import { HomePage } from '../HomePage';
import styles from './Layout.module.scss';
import { NotFoundPage } from '../NotFoundPage';
import { useContext } from 'react';
import { TodosContext } from '../../context/context';
import { TTodo } from '../../types';


export const Layout = () => {

   const {data} = useContext(TodosContext)
   console.log(data)

   return (
      <main className={styles.wrapper}>
         <Routes>
            <Route element={<HomePage />} path='/'/>
            {data.map((categoryObj:TTodo) => {
               return <Route  key={categoryObj.id} element={<CategoryPage {...categoryObj}/>} path={categoryObj.category}/>
            })}

            <Route element={<NotFoundPage />} path='*' />
         </Routes>
      </main>
   )
}