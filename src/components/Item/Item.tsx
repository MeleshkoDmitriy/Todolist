import { Link } from 'react-router-dom';
import { tasksCounter } from '../../utils/tasksCounter';
import styles from './Item.module.scss';
import { BsThreeDotsVertical } from "react-icons/bs";


export const Item = ({category, link, tasks}) => {

   const imageStyles = {
      width: '50px',
      height: '50px',
      backgroundImage: `URL(${link})`,
      border: '1px solid black'
   }
   
   // console.log(tasks, category, link, isSuccess)

   return (
      <Link to={category} className={styles.wrapper}>
         <div className={styles.img_container} style={imageStyles}>
            <img src={link} alt={category} />
         </div>
         <div className={styles.category_info}>
            <h3>{category}</h3>
            <span>{tasksCounter(tasks)} Task(s)</span>
         </div>
         <div className={styles.more}>
            <BsThreeDotsVertical />
         </div>
      </Link>
   )
}