import { Link } from "react-router-dom"
import { IoIosArrowBack } from "react-icons/io";
import styles from './CategoryPage.module.scss'
import { ButtonText } from "../components/shared/ButtonText/ButtonText";


export const NotFoundPage = () => {
   return (
      <section className={styles.wrapper}>
         <Link to='/'>
            <ButtonText buttonColor="blue" className={styles.btn}>
                  <IoIosArrowBack style={{display: 'inline-block'}}/>Home Page
            </ButtonText>
         </Link>
      </section>
   )
}