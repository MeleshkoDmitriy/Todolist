import { ComponentPropsWithoutRef, FC } from 'react'
import styles from './ButtonIcon.module.scss'

interface ButtonIconProps extends ComponentPropsWithoutRef<'button'> {
   iconColor: 'blue' | 'red' | 'green' | 'plus'
}

export const ButtonIcon:FC<ButtonIconProps> = ({children, iconColor, onClick, ...props}) => {

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