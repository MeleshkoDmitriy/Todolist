import styles from './Item.module.scss';
import { BsThreeDotsVertical } from "react-icons/bs";
import defaultImage from '../../assets/images/defaultImage.png'
import {categoryFilter} from '../../utils/utils'
import { ButtonIcon } from '../shared/ButtonIcon/ButtonIcon';
import React, { useContext } from 'react';
import { TodosContext, TodosContextValue } from '../../context/context';
import { TTask } from '../../types';

interface ItemProps {
   category: string;
   link: string;
   responceTasks: TTask[];
}

export const Item:React.FC<ItemProps> = ({category, link, responceTasks }) => {

   const {isCatSuccess} = useContext<TodosContextValue>(TodosContext)
   
   const categoryLength = categoryFilter(responceTasks, category).length;

   return (
      <div className={styles.wrapper}>
         <div className={styles.img_container}>
            <img src={isCatSuccess ? link : defaultImage} alt="category" title={category}/>
         </div>
         <div className={styles.category_info}>
            <h3 className={styles.category}>{isCatSuccess ? category : 'Loading..'}</h3>
            <span>
               {categoryLength} Task(s)</span>
         </div>
         <ButtonIcon onClick={() => console.log('category clicked')} iconColor='blue'>
            <BsThreeDotsVertical />
         </ButtonIcon>
      </div>
   )
}