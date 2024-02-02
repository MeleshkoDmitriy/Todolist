import { useContext, useState } from 'react';
import styles from './Panel.module.scss';
import { HiOutlinePlus } from "react-icons/hi2";
import { TodosContext } from '../../context/context';
import { Option } from './Option/Option';
import Select from 'react-select'
import { ButtonText } from '../shared/ButtonText/ButtonText';
import { ButtonIcon } from '../shared/ButtonIcon/ButtonIcon';


export const Panel = () => {

   const {  categories, 
            isCatLoading, 
            isCatSuccess, 
            addTaskMutation} = useContext(TodosContext);

   const [title, setTitle] = useState('')
   const [isPanelOpen, setPanelOpen] = useState(false)

   const onPlusClick = () => {
      setPanelOpen(prev => !prev)
   }


   const isOpenClassName = isPanelOpen ? `${styles['wrapper_open']}` : '';

   const options = [
      {
         value: 'personal',
         label: 'Personal'
      },
      {
         value: 'work',
         label: 'Work'
      },
      {
         value: 'study',
         label: 'Study'
      },
      {
         value: 'sport',
         label: 'Sport'
      },
      {
         value: 'health',
         label: 'Health'
      },
      {
         value: 'finance',
         label: 'Finance'
      },
      {
         value: 'shopping',
         label: 'Shopping'
      }
   ]

   const [currentCategory, setCurrentCategory] = useState(options[0].value);
   const [currentLabel, setCurrentLabel] = useState(options[0].label);


   const getCategory = () => {
      return currentCategory ? options.find(category => category.value === currentCategory) : ''
   }

   const onChangeCategory = (newCategory) => {
      setCurrentCategory(newCategory.value);
      setCurrentLabel(newCategory.label);
   }


   const onAddClick = () => {
      if(!title.trim()) {
         return alert('Title is empty!')
      } else {
         const newTask = {
            title: title,
            category: currentLabel,
            completed: false
         }
         addTaskMutation(newTask);
         setTitle('');
      }
   }

   const onCancelClick = () => {
      setTitle('')
   }

   return (
      <div className={`${styles.wrapper} ${isOpenClassName}`}>
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
               <Select value={getCategory()} onChange={onChangeCategory} options={options}/>
            </div>
            <div className={styles.buttons}>
                  {/* <button onClick={onAdd} type='button' className={styles.add}>Add</button> */}
                  <ButtonText buttonColor='white'
                              onClick={onAddClick}>
                                 Add
                  </ButtonText>
                  {/* <button type='button' className={styles.cancel}>Cancel</button> */}
                  <ButtonText buttonColor='blue'
                              onClick={onCancelClick}>
                     Cancel
                  </ButtonText>
            </div>
         </form>
      </div>
   )
}