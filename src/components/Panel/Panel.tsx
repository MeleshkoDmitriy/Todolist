import { useContext } from 'react';
import styles from './Panel.module.scss';
import { HiOutlinePlus } from "react-icons/hi2";
import { TodosContext } from '../../context/context';
import { Option } from './Option/Option';


export const Panel = () => {

   const {data, isSuccess, isLoading} = useContext(TodosContext)

   if(data) {
      data.forEach(element => {
         console.log(element.category)
      });
   }

   return (
      <div className={styles.wrapper}>
         <div className={styles.btn_container}>
            <button className={styles.btn_plus}>
               <HiOutlinePlus id={styles.icon}/>
            </button>
         </div>
         <form className={styles.form}>
            <div className={styles.task}>
               <label htmlFor=''>Task</label>
               <input type='text'/>
            </div>
            <div className={styles.category}>
               <label htmlFor=''>Category</label>
               <select >

               </select>
            </div>
         </form>
      </div>

   )
}