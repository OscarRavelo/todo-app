import { UpdateStatusProps } from "@/interfaces/UpdateStatusProps";
import { useState } from "react";
export default function UpdateStatus({
  selectedStatus,
  taskId,
  updateTask,
}: UpdateStatusProps) {
  const [currentStatus, setCurrentStatus] = useState(selectedStatus);

  const handleOnChange = (event) => {
    setCurrentStatus(event.target.value);
    updateTask(taskId, event.target.value);
  };
  return (
    <>
      <select
        onChange={handleOnChange}
        className="bg-transparent shadow-lg rounded-lg  text-center"
        value={selectedStatus}
      >
        <option value="TO_DO">TODO</option>
        <option value="IN_PROGRESS">In progress</option>
        <option value="DONE">Done</option>
      </select>
    </>
  );
}
