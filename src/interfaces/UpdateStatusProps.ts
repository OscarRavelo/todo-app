import { statusTodo } from "./tasks";

export interface UpdateStatusProps {
  selectedStatus: statusTodo;
  taskId: number;
  updateTask: (taskId: number, status: statusTodo) => void;
}
