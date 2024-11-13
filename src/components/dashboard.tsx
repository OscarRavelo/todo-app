"use client";

import { useState } from "react";
import Column from "./column";
import { InitialState } from "@/interfaces/interface";

export default function Home() {
  const initialState: InitialState = {
    todo: [{ id: 0, task: "keep improving", status: "TO-DO" }],
    inProgress: [{ id: 0, task: "keep improving", status: "IN-PROGRESS" }],
    done: [{ id: 0, task: "keep improving", status: "DONE" }],
  };

  const [tasks, setTasks] = useState(initialState);
  return (
    <div className="flex size-full   ">
      <Column title="TO DO" bg="bg-sky-50" tasks={tasks.todo} />
      <Column title="IN Progress" bg="bg-yellow-50" tasks={tasks.inProgress} />
      <Column title="DONE" bg="bg-green-50" tasks={tasks.done} />
    </div>
  );
}
