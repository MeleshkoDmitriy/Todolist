import { useContext, useEffect, useState } from 'react';
import styles from './Panel.module.scss';
import { HiOutlinePlus } from "react-icons/hi2";
import { TodosContext } from '../../context/context';
import Select from 'react-select'
import { ButtonText } from '../shared/ButtonText/ButtonText';
import { ButtonIcon } from '../shared/ButtonIcon/ButtonIcon';


export const Panel = ({isPanelOpen, setPanelOpen}) => {

   const {  categories, 
            isCatLoading, 
            isCatSuccess, 
            addTaskMutation
            } = useContext(TodosContext);

   const [title, setTitle] = useState('')

   const onPlusClick = () => {
      setPanelOpen(prev => !prev)
   }


   const isOpenClassName = isPanelOpen ? `${styles['wrapper_open']}` : '';


   const defaultOptions = [
      {
         value: 'personal',
         label: 'Personal'
      }
   ]

   const options = isCatSuccess ? categories.map(c => {
      return {
         value: c.category.toLowerCase(), 
         label: c.category
      }
   })
                              : []

   const [currentCategory, setCurrentCategory] = useState(defaultOptions[0].value);
   const [currentLabel, setCurrentLabel] = useState(defaultOptions[0].label);


   const getCategory = () => {
      return currentCategory ? options.find(category => category.value === currentCategory) : ''
   }

   const onChangeCategory = (newCategory) => {
      setCurrentCategory(newCategory.value);
      setCurrentLabel(newCategory.label);
   }


   // function additingFn () {
   //    if (title.trim() == true) {
   //       const newTask = {
   //          title: title,
   //          category: currentLabel,
   //          completed: false
   //       }
   //       addTaskMutation(newTask);
   //       setTitle('');
   //       setPanelOpen(false)
   //    } else {
   //       return alert('Title is empty!')
   //    }
   // }

   const onAddClick = () => {
      if(title.trim()) {
         console.log(title)
         const newTask = {
            title: title,
            category: currentLabel,
            completed: false
         }
         addTaskMutation(newTask);
         setTitle('');
         setPanelOpen(false)
      } else {
         return alert('Title is empty!')
      }
   }

   // useEffect(() => {
   //       if (isPanelOpen == false) {
   //          window.removeEventListener('keydown', handleKeyDown); 
   //       } else {
   //          window.addEventListener('keydown', handleKeyDown);
   //       }
   //    },[isPanelOpen]);

   // function handleKeyDown(event) {
   //    switch (event.key) {
   //       case 'Enter':
   //          onAddClick();
   //          break;
   //    }
   // }

   const onCancelClick = () => {
      setTitle('')
   }

   return (
         <section className={`${styles.wrapper} ${isOpenClassName}`}>
            <div className={styles.container}>
               <ButtonIcon iconColor='plus'
                           className={styles.btn_plus}
                           onClick={onPlusClick}>
                  <HiOutlinePlus className={styles.iconPlus}/>
               </ButtonIcon>
               <form className={styles.form}>
                  <div className={styles.task}>
                     <label htmlFor=''>Task</label>
                     <input   type='text' 
                              placeholder='Write a title'
                              className={styles.taskInput}
                              value={title}
                              onChange={(e) => setTitle(e.target.value)}/>
                  </div>
                  <div className={styles.category}>
                     <label htmlFor=''>Category</label>
                     <Select  className={styles.select} 
                              value={getCategory()} 
                              onChange={onChangeCategory} 
                              options={isCatSuccess ? options : defaultOptions}
                              isLoading={isCatLoading}
                              menuPlacement='top'/>
                  </div>
                  <div className={styles.buttons}>
                        <ButtonText buttonColor='white'
                                    onClick={onAddClick}>
                                       Add
                        </ButtonText>
                        <ButtonText buttonColor='blue'
                                    onClick={onCancelClick}>
                           Cancel
                        </ButtonText>
                  </div>
               </form>
            </div>
         </section>
   )
}