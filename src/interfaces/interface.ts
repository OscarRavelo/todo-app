export interface Task {
  id: number;
  task: string;
  status: string;
}

export interface InitialState {
  todo: Array<Task>;
  inProgress: Array<Task>;
  done: Array<Task>;
}
