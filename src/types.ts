export type Task = {
   id: number,
   title: string,
   completed: boolean
}

export type Todo = {
   id: number,
   category: string,
   link: string,
   tasks: Task[]
}
