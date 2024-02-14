import { Link } from "react-router-dom"
import { IoIosArrowBack } from "react-icons/io";
import styles from './CategoryPage.module.scss'
import { ButtonText } from "../components/shared/ButtonText/ButtonText";
import React from "react";

export const NotFoundPage:React.FC = () => {
   return (
      <section className={styles.wrapper}>
         <Link to='/'>
            <ButtonText onClick={() => console.log('Home Page Route')} buttonColor="blue" className={styles.btn}>
                  <IoIosArrowBack style={{display: 'inline-block'}}/>Home Page
            </ButtonText>
         </Link>
      </section>
   )
}