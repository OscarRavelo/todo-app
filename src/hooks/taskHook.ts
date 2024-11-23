import { useState, useEffect } from "react";

const useTasks = () => {
  const [tasks, setTasks] = useState([]);

  const fetchTasks = async () => {
    try {
      const response = await fetch("/api/tasks");
      const data = await response.json();
      console.log(data);
      setTasks(data);
    } catch (error) {
      console.error("error fetching tasks: ", error);
    }
  };

  const addTask = async (newTask: string) => {
    try {
      const response = await fetch("/api/tasks", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({ task: newTask }),
      });
      const createdTask = await response.json();
      setTasks((prev) => [...prev, createdTask]);
    } catch (error) {
      console.error("Error adding task:", error);
    }
  };
  const deleteTask = async (taskId) => {
    try {
      await fetch(`/api/tasks/${taskId}`, {
        method: "DELETE",
      });
      setTasks((prev) => prev.filter((task) => task.id !== taskId));
    } catch (error) {
      console.error("Error deleting task:", error);
    }
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  return { tasks, fetchTasks, addTask, deleteTask };
};

export default useTasks;
