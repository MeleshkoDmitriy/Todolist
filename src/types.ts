export type TTask = {
   id: number,
   title: string,
   completed: boolean
}

export type TTodo = {
   id: number,
   category: string,
   link: string,
   tasks: TTask[]
}
