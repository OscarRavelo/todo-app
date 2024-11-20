"use client";

import { useState, useEffect } from "react";
import Column from "./column";
import { InitialState } from "@/interfaces/tasks";
import { statusTodo } from "@/interfaces/tasks";

export default function Home() {
  const initialState: InitialState = {
    todo: [{ id: 0, task: "keep improving", status: statusTodo.Todo }],
    inProgress: [
      { id: 0, task: "keep improving", status: statusTodo.InProgess },
    ],
    done: [{ id: 0, task: "keep improving", status: statusTodo.Done }],
  };

  const [tasks, setTasks] = useState(initialState);
  useEffect(() => {
    const fetchTodo = async () => {
      const data = await fetch("./api/tasks");
      const result = await data.json();
      console.log(result);

      console.log("state", { todo: [...initialState.todo, result] });
      setTasks({ ...initialState, todo: [...result] });
    };
    fetchTodo();
  }, []);

  return (
    <div className="flex size-full   ">
      <Column title="TO DO" bg="bg-sky-100" tasks={tasks.todo} setTasks />
      <Column title="IN Progress" bg="bg-yellow-100" tasks={tasks.inProgress} />
      <Column title="DONE" bg="bg-green-100" tasks={tasks.done} />
    </div>
  );
}
