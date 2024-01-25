import { FC } from "react"

interface IOptionProps extends React.ComponentPropsWithRef<'option'> {
   category: string
}

export const Option:FC<IOptionProps> = ({category}) => {
   return (
      <option >{category}</option>
   )
}