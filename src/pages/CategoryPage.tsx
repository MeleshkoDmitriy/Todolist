import { IoIosArrowBack } from "react-icons/io";
import { Link } from "react-router-dom";


export const CategoryPage = () => {
   return (
      <section>
         <Link to='/'>
            <IoIosArrowBack />
         </Link>
         <div>page for category</div>
      </section>
   )
}