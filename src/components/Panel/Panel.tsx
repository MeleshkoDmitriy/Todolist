import { useContext, useState } from 'react';
import styles from './Panel.module.scss';
import { HiOutlinePlus } from "react-icons/hi2";
import { TodosContext } from '../../context/context';
import { Option } from './Option/Option';
import Select from 'react-select'


export const Panel = () => {

   const {  categories, 
            isCatLoading, 
            isCatSuccess, 
            addTaskMutation} = useContext(TodosContext);

   const [title, setTitle] = useState('')

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


   const onAdd = () => {

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
               <input   type='text' 
                        placeholder='Write a title'
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}/>
            </div>
            <div className={styles.category}>
               <label htmlFor=''>Category</label>
               <Select value={getCategory()} onChange={onChangeCategory} options={options}/>
            </div>
            <div className={styles.buttons}>
                  <button onClick={onAdd} type='button' className={styles.add}>Add</button>
                  <button type='button' className={styles.cancel}>Cancel</button>
            </div>
         </form>
      </div>
   )
}