export interface Task {
  id: number;
  task: string;
  status: statusTodo;
}

export interface InitialState {
  todo: Array<Task>;
  inProgress: Array<Task>;
  done: Array<Task>;
}

export enum statusTodo {
  Todo = "TO-DO",
  InProgess = "IN PROGRESS",
  Done = "DONE",
}
