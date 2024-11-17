export interface CardPropsComponent {
  task: string;
  status: statusTodo;
}

export enum statusTodo {
  Todo = "TO-DO",
  InProgess = "IN PROGRESS",
  Done = "DONE",
}
