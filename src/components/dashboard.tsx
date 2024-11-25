"use client";

import { useState } from "react";
import { Task } from "@/interfaces/tasks";
import Column from "./column";

import useTasks from "@/hooks/taskHook";
import { statusTodo } from "@/interfaces/tasks";

export default function Home() {
  const { tasks, addTask, deleteTask, updateTask } = useTasks();

  return (
    <div className="flex size-full   ">
      <Column
        title="TO DO"
        bg="bg-sky-100"
        tasks={tasks.filter((task) => task.status === statusTodo.Todo)}
        addTask={addTask}
        deleteTask={deleteTask}
        updateTask={updateTask}
        key={1}
      />
      <Column
        title="IN Progress"
        bg="bg-yellow-100"
        tasks={tasks.filter((task) => task.status === statusTodo.InProgess)}
        deleteTask={deleteTask}
        updateTask={updateTask}
        addTask={addTask}
        key={2}
      />
      <Column
        title="DONE"
        bg="bg-green-100"
        tasks={tasks.filter((task) => task.status === statusTodo.Done)}
        deleteTask={deleteTask}
        updateTask={updateTask}
        addTask={addTask}
        key={3}
      />
    </div>
  );
}
