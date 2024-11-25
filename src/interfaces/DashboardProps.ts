import { statusTodo, Task } from "./tasks";
export interface ColumnProps {
  title: string;
  bg?: string;
  tasks: Task[];
  addTask: (newTask: string) => void;
  deleteTask: (id: number) => void;
  updateTask: (taskId: number, status: statusTodo) => void;
}
