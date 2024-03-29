import { Dispatch, SetStateAction, useContext, useState } from 'react';
import styles from './Panel.module.scss';
import { HiOutlinePlus } from "react-icons/hi2";
import { TodosContext } from '../../context/context';
import Select from 'react-select'
import { ButtonText } from '../shared/ButtonText/ButtonText';
import { ButtonIcon } from '../shared/ButtonIcon/ButtonIcon';
import { toast } from 'react-toastify';
import { Bounce } from 'react-toastify';
import { TTask } from '../../types';


interface PanelProps {
   isPanelOpen: boolean;
   setPanelOpen: Dispatch<SetStateAction<boolean>>
}

export const Panel:React.FC<PanelProps> = ({isPanelOpen, setPanelOpen}) => {

   const {  categories, 
            isCatLoading, 
            isCatSuccess, 
            addTaskMutation
            } = useContext(TodosContext);

   const [title, setTitle] = useState('')

   const onPlusClick = () => {
      setPanelOpen((prev: boolean) => !prev)
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

   interface OptionType {
      value: string;
      label: string;
    }

   type PropsValue<OptionType> = OptionType | OptionType[] | null | undefined;

    
    const onChangeCategory = (newCategory: OptionType | null) => {
      if (newCategory) {
        const selectedCategory = newCategory as OptionType;
        setCurrentCategory(selectedCategory.value);
        setCurrentLabel(selectedCategory.label);
      }
    }
    
    

   const onAddClick = () => {
      if(title.trim()) {
         const newTask:Omit<TTask, 'id'> = {
            title: title,
            category: currentLabel,
            completed: false
         }
         addTaskMutation(newTask);
         setTitle('');
         setPanelOpen(false)
         newTaskToast(title, currentLabel)
      } else {
         return emptyTitleToast();
      }
   }

   const onCancelClick = () => {
      setTitle('');
      setPanelOpen(false)
   }

   const newTaskToast = (newTask: string, categoryName: string) => {
      toast.success(`You added a new task: "${newTask}" to the ${categoryName} Category`, {
         position: "top-left",
         autoClose: 1500,
         hideProgressBar: false,
         closeOnClick: true,
         pauseOnHover: true,
         draggable: true,
         progress: undefined,
         theme: "colored",
         transition: Bounce,
         });
   }

   const emptyTitleToast = () => {
      toast.error('Title is empty!', {
         position: "top-left",
         autoClose: 1500,
         hideProgressBar: false,
         closeOnClick: true,
         pauseOnHover: true,
         draggable: true,
         progress: undefined,
         theme: "colored",
         transition: Bounce,
         });
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
                              value={getCategory()  as PropsValue<OptionType>} 
                              onChange={onChangeCategory} 
                              options={isCatSuccess ? options : defaultOptions}
                              isLoading={isCatLoading}
                              menuPlacement='top'/>
                  </div>
                  <div className={styles.buttons}>
                        <ButtonText buttonColor='white'
                                    onClick={() => {
                                    onAddClick()
                                    }}>
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