import { Link } from "react-router-dom"
import { IoIosArrowBack } from "react-icons/io";


export const NotFoundPage = () => {
   return (
      <section>
         <Link to='/'>
            <IoIosArrowBack />
         </Link>
         NOT FOUND
      </section>
   )
}