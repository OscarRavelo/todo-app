import { ColumnProps } from "@/interfaces/DashboardProps";
import Card from "./card";

export default function Column({ title, bg = "white", tasks }: ColumnProps) {
  return (
    <div className={`flex-1 ${bg} h-screen shadow-lg rounded-lg `}>
      <h2 className="text-lg font-semibold text-gray-800 text-center">
        {title}
      </h2>
      <div>
        {tasks.lenght ??
          tasks.map((task) => (
            <Card key={task.id} status={task.status} task={task.task} />
          ))}
      </div>
    </div>
  );
}
