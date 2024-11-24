import { statusTodo } from "./tasks";
export interface CardPropsComponent {
  task: string;
  status: statusTodo;
  id: number;
  deleteTask: (id: number) => void;
}
