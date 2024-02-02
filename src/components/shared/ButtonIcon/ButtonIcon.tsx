import { ComponentPropsWithoutRef, FC } from 'react'
import styles from './ButtonIcon.module.scss'

interface ButtonProps extends ComponentPropsWithoutRef<'button'> {
   iconColor: 'blue' | 'red' | 'green'
}

export const ButtonIcon:FC<ButtonProps> = ({children, iconColor, onClick, ...props}) => {

   const className = `${styles.wrapper} ${styles[`${iconColor}`]}`
   const classNameText = `${styles[`text_${iconColor}`]}`

   return (
      <div  className={className}
            onClick={onClick}>
               <span className={classNameText}>
                  {children}
               </span>
      </div>
   )
}