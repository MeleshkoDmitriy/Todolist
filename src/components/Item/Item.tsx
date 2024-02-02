import { Link } from 'react-router-dom';
import styles from './Item.module.scss';
import { BsThreeDotsVertical } from "react-icons/bs";
import defaultImage from '../../assets/images/defaultImage.png'
import {categoryFilter} from '../../utils/categoryFilter'
import { ButtonIcon } from '../shared/ButtonIcon/ButtonIcon';

export const Item = ({category, link, responceTasks }) => {

   const imageStyles = {
      width: '60px',
      height: '60px',
      backgroundImage: `URL(${link})`,
      backgroundSize: 'contain'
   }
   
   const categoryLength = categoryFilter(responceTasks, category).length;

   return (
      <div className={styles.wrapper}>
         <div className={styles.img_container} style={imageStyles}>

         </div>
         <div className={styles.category_info}>
            <h3>{category}</h3>
            <span>
               {categoryLength} Task(s)</span>
         </div>
         <ButtonIcon iconColor='blue'>
            <BsThreeDotsVertical />
         </ButtonIcon>
      </div>
   )
}