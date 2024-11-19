import { ColumnProps } from "@/interfaces/DashboardProps";
import Card from "./card";
import Button from "./CreateTaskButton";
import { statusTodo } from "@/interfaces/tasks";
import { useState } from "react";
import Modal from "./CreateTaskModal";

export default function Column({ title, bg = "white", tasks }: ColumnProps) {
  const [showModal, setShowModal] = useState(false);
  return (
    <div className={`flex-1 ${bg} h-screen shadow-lg rounded-lg `}>
      <h2 className="text-lg font-semibold text-gray-800 text-center">
        {title}
      </h2>
      <div>
        {tasks.length
          ? tasks.map((task) => (
              <Card key={task.id} status={task.status} task={task.task} />
            ))
          : ""}
      </div>
      <div>
        {tasks.map((task) => {
          return task.status === statusTodo.Todo ? (
            <button
              className="shadow-lg rounded-lg bg-black p-1 ml-4 text-white"
              onClick={() => setShowModal(!showModal)}
            >
              + add task
            </button>
          ) : null;
        })}
      </div>
      {showModal && <Modal />}
    </div>
  );
}
