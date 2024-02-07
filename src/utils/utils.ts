
export const categoryFilter = (array = [], category) => {
   return array.filter((elem) => elem.category === category)
}

export const tasksFilter = (array = [], boolean) => {
   return array.filter(elem => elem.completed === boolean)
}