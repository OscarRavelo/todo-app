import { useEffect, useState } from "react";

export default function Modal({ setTasks }) {
  const [taskcreated, setTaskCreated] = useState(false);
  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log(event.target[0].value);
    try {
      const res = await fetch("/api/tasks", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify({ task: event.target[0].value }),
      });
      if (!res.ok) throw new Error("Failed to create the task");
      const data = await res.json();
      setTaskCreated(true);
      console.log("task created", { data, taskcreated });
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    const fetchTasks = async () => {
      const data = await fetch("./api/tasks/");
      const result = await data.json();
      setTasks(result);
    };

    console.log("taskcreated in useeffect:", taskcreated);
    if (taskcreated) {
      fetchTasks();
    }
  }, [taskcreated, setTasks]);

  return (
    <div>
      <form onSubmit={handleSubmit} className="  rounded-lg shadow-lg">
        <label className="block text-sm/6 font-medium text-gray-900 pl-6">
          task:{" "}
          <input
            name="task"
            type="text"
            required
            autoFocus
            className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm"
          />
        </label>
        <button className="rounded-md bg-white px-2.5 py-1.5 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 ml-6">
          create the task
        </button>
      </form>
    </div>
  );
}
