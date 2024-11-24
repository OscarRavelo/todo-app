"use client";

import Column from "./column";
import { InitialState } from "@/interfaces/tasks";
import { statusTodo } from "@/interfaces/tasks";

import useTasks from "@/hooks/taskHook";

export default function Home() {
  const { tasks, addTask, deleteTask } = useTasks();
  const initialState: InitialState = {
    todo: [{ id: 0, task: "keep improving", status: statusTodo.Todo }],
    inProgress: [
      { id: 0, task: "keep improving", status: statusTodo.InProgess },
    ],
    done: [{ id: 0, task: "keep improving", status: statusTodo.Done }],
  };
  return (
    <div className="flex size-full   ">
      <Column
        title="TO DO"
        bg="bg-sky-100"
        tasks={tasks}
        addTask={addTask}
        deleteTask={deleteTask}
      />
      <Column
        title="IN Progress"
        bg="bg-yellow-100"
        tasks={initialState.inProgress}
      />
      <Column title="DONE" bg="bg-green-100" tasks={initialState.done} />
    </div>
  );
}
