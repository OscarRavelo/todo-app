import React from "react";
import { Task } from "./tasks";
export interface ColumnProps {
  title: string;
  bg?: string;
  tasks: Task[];
  addTask: (newTask: string) => void;
}
