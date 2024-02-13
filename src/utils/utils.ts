import { TTask } from "../types"

export const categoryFilter = (array: TTask[] = [], category: string) => {
   return array.filter((elem) => elem.category === category);
};

export const tasksFilter = (array: TTask[] = [], boolean: boolean) => {
   return array.filter((elem) => elem.completed === boolean);
};
