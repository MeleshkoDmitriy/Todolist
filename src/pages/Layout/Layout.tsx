import { Route, Routes } from 'react-router-dom';
import { CategoryPage } from '../CategoryPage';
import { HomePage } from '../HomePage';
import styles from './Layout.module.scss';
import { NotFoundPage } from '../NotFoundPage';
import { useContext, useState } from 'react';
import { TodosContext } from '../../context/context';
import { TTodo } from '../../types';


export const Layout = ({isPanelOpen, setPanelOpen}) => {

   const {categories} = useContext(TodosContext);

   const [isBlur, setBlur] = useState(true);

   const className = isPanelOpen  ? `${styles.wrapper} ${styles.panelOpen}` 
                                 : `${styles.wrapper}`

   return (
      <main className={className}>
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