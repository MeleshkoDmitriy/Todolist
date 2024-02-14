import { ComponentPropsWithoutRef, FC, MouseEventHandler } from 'react';
import styles from './ButtonIcon.module.scss';

interface ButtonIconProps extends ComponentPropsWithoutRef<'button'> {
   iconColor: 'blue' | 'white' | 'red' | 'green' | 'plus' | 'smallplus';
   onClick?: MouseEventHandler<HTMLButtonElement>;
}

export const ButtonIcon: FC<ButtonIconProps> = ({ children, iconColor, onClick }) => {
   const className = `${styles.wrapper} ${styles[iconColor]}`;
   const classNameText = `${styles[`text_${iconColor}`]}`;

   return (
      <button className={className} onClick={onClick}>
         <span className={classNameText}>
            {children}
         </span>
      </button>
   );
};
