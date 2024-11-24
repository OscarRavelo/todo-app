import { UpdateStatusProps } from "@/interfaces/UpdateStatusProps";
import { useState } from "react";
export default function UpdateStatus({ selectedValue }: UpdateStatusProps) {
  const [currentStatus, setCurrentStatus] = useState(selectedValue);

  const handleOnChange = (event) => {
    setCurrentStatus(event.target.value);
    console.log("status selected:", event.target.value);
  };
  return (
    <>
      <select
        onChange={handleOnChange}
        className="bg-transparent shadow-lg rounded-lg  text-center"
      >
        <option value="TO_DO">TODO</option>
        <option value="IN_PROGRESS">In progress</option>
        <option value="DONE">Done</option>
      </select>
    </>
  );
}
