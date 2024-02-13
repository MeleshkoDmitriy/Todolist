import { Route, Routes } from 'react-router-dom';
import { CategoryPage } from '../CategoryPage';
import { HomePage } from '../HomePage';
import styles from './Layout.module.scss';
import { NotFoundPage } from '../NotFoundPage';
import { useContext } from 'react';
import { TodosContext } from '../../context/context';
import { TCategory } from '../../types';

interface LayoutProps {
   isPanelOpen: boolean;
}

export const Layout:React.FC<LayoutProps> = ({isPanelOpen}) => {

   const {categories} = useContext(TodosContext);

   const className = isPanelOpen  ? `${styles.wrapper} ${styles.panelOpen}` 
                                 : `${styles.wrapper}`

   return (
      <main className={className}>
         <Routes>
            <Route element={<HomePage />} path='/'/>

            {categories.map((category:TCategory) => {
               return <Route  key={category.id} element={<CategoryPage {...category}/>} path={category.category}/>
            })}

            <Route element={<NotFoundPage />} path='*' />
         </Routes>
      </main>
   )
}