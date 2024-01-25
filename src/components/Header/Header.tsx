import { FC } from 'react'
import styles from './Header.module.scss'

interface HeaderProps {
   todoCount: number
}

export const Header:FC<HeaderProps> = ({todoCount}) => {
   return (
      <header className={styles.wrapper}>
         <div>Tasks for today: {todoCount}</div>
      </header>
   )
}