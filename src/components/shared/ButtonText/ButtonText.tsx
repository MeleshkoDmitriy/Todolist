import { ComponentPropsWithoutRef, FC } from 'react'
import styles from './ButtonText.module.scss'

interface ButtonTextProps extends ComponentPropsWithoutRef<'button'> {
   buttonColor: 'white' | 'blue'
}

export const ButtonText:FC<ButtonTextProps> = ({children, onClick, buttonColor}) => {
   
   const className = `${styles.wrapper} ${styles[buttonColor]}`
   const classNameText = `${styles.wrapper} ${styles[`text_${buttonColor}`]}`

   return (
      <div  onClick={onClick} 
            className={className}>
         <span className={classNameText}>
            {children}
         </span>
      </div>
   )
}