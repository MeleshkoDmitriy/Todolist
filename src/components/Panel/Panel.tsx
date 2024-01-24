import styles from './Panel.module.scss';
import { HiOutlinePlus } from "react-icons/hi2";

export const Panel = () => {
   return (
      <div className={styles.wrapper}>
         <div className={styles.btn_container}>
            <button className={styles.btn_plus}>
               <HiOutlinePlus id={styles.icon}/>
            </button>
         </div>
         <form className={styles.form}>
            <div className={styles.task}>
               <label for=''>Task</label>
               <input type='text'/>
            </div>
            <div className={styles.category}>
               <label for=''>Category</label>
               <select >
                  
               </select>
            </div>
         </form>
      </div>

   )
}