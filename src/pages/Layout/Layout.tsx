import { Route, Routes } from 'react-router-dom';
import { CategoryPage } from '../CategoryPage';
import { HomePage } from '../HomePage';
import styles from './Layout.module.scss';
import { NotFoundPage } from '../NotFoundPage';
import { useContext, useState } from 'react';
import { TodosContext } from '../../context/context';
import { TTodo } from '../../types';


export const Layout = () => {

   const {categories} = useContext(TodosContext);

   const [isBlur, setBlur] = useState(true);

   const classNameBlur = isBlur  ? `${styles.wrapper} ${styles.blur}` 
                                 : `${styles.wrapper}`

   return (
      <main className={classNameBlur}>
         <Routes>
            <Route element={<HomePage />} path='/'/>
            {categories.map((category:TTodo) => {
               return <Route  key={category.id} element={<CategoryPage {...category}/>} path={category.category}/>
            })}

            <Route element={<NotFoundPage />} path='*' />
         </Routes>
      </main>
   )
}