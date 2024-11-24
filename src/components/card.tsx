import { CardPropsComponent } from "@/interfaces/CardProps";
import { useEffect, useState } from "react";
import { statusTodo } from "@/interfaces/tasks";

export default function Card({
  task,
  status,
  id,
  deleteTask,
}: CardPropsComponent) {
  const [bgColor, setBgColor] = useState<string>();
  useEffect(() => {
    switch (status) {
      case statusTodo.Todo:
        setBgColor("bg-blue-200");
        break;
      case statusTodo.InProgess:
        setBgColor("bg-yellow-200");
        break;
      case statusTodo.Done:
        setBgColor("bg-green-200");
        break;
    }
  }, [status]);

  return (
    <>
      <div className={`${bgColor} shadow-lg p-3 m-3 rounded-lg`}>
        <div>{task}</div>
        <div>{status}</div>
        <button
          onClick={() => deleteTask(id)}
          className="bg-red-200 shadow-lg rounded-lg p-1 mt-3"
        >
          delete task
        </button>
      </div>
    </>
  );
}
