

export const todoCounter = (array) => {
   let result:number = 0;
   array.forEach((el) => {
      result += el.tasks.length;
   })
   return result;
}

