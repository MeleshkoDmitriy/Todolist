import { Route, Routes } from 'react-router-dom';
import { CategoryPage } from '../CategoryPage';
import { HomePage } from '../HomePage';
import styles from './Layout.module.scss';
import { NotFoundPage } from '../NotFoundPage';


export const Layout = () => {
   return (
      <main className={styles.wrapper}>
         <Routes >
            <Route element={<HomePage />} path='/'/>
            <Route element={<CategoryPage />} path='/work'/>
            <Route element={<NotFoundPage />} path='*' />
         </Routes>
      </main>
   )
}