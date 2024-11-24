import { ColumnProps } from "@/interfaces/DashboardProps";
import Card from "./card";
import { statusTodo } from "@/interfaces/tasks";
import { useState } from "react";
import Modal from "./CreateTaskModal";

export default function Column({
  title,
  bg = "white",
  tasks,
  addTask,
  deleteTask,
}: ColumnProps) {
  const [showModal, setShowModal] = useState(false);
  const tasksTodo = tasks.some((task) => task.status === statusTodo.Todo);
  return (
    <div className={`flex-1 ${bg} h-screen shadow-lg rounded-lg `}>
      <h2 className="text-lg font-semibold text-gray-800 text-center">
        {title}
      </h2>
      <div>
        {tasks.length
          ? tasks.map((task) => (
              <Card
                key={task.id}
                status={task.status}
                task={task.task}
                id={task.id}
                deleteTask={deleteTask}
              />
            ))
          : ""}
      </div>
      <div>
        {tasksTodo && (
          <button
            className="shadow-lg rounded-lg bg-green-200 p-1 ml-4  text-center"
            onClick={() => setShowModal(!showModal)}
          >
            + add task
          </button>
        )}
      </div>
      {showModal && <Modal addTask={addTask} />}
    </div>
  );
}
