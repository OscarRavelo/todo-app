"use client";
import { DragDropContext, Droppable, Draggable } from "@hello-pangea/dnd";
export default function Dashboard() {
  const onDragEnd = (result) => {
    console.log(result);
  };

  return (
    <div className="flex space-x-4 p-4 min-h-screen">
      <DragDropContext onDragEnd={onDragEnd}>
        <Droppable droppableId="droppable-1" direction="horizontal">
          <div className="w-1/3 bg-blue-100 p-4 rounded-lg shadow-md">
            <h2 className="text-blue-700 font-semibold mb-4">To Do</h2>
            <button className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 mb-4">
              Add Task
            </button>
            <Draggable draggableId="task-1" index={0}>
              <div className="bg-white p-4 rounded shadow-md mb-4">Task 1</div>
            </Draggable>
            <div className="bg-white p-4 rounded shadow-md mb-4">Task 2</div>
          </div>
        </Droppable>
      </DragDropContext>
      <div className="w-1/3 bg-gray-100 p-4 rounded-lg shadow-md">
        <h2 className="text-gray-700 font-semibold mb-4">In Progress</h2>
        <button className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 mb-4">
          Add Task
        </button>
        <div className="bg-white p-4 rounded shadow-md mb-4">Task 1</div>
        <div className="bg-white p-4 rounded shadow-md mb-4">Task 2</div>
      </div>

      <div className="w-1/3 bg-blue-100 p-4 rounded-lg shadow-md">
        <h2 className="text-blue-700 font-semibold mb-4">Done</h2>
        <button className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 mb-4">
          Add Task
        </button>
        <div className="bg-white p-4 rounded shadow-md mb-4">Task 1</div>
        <div className="bg-white p-4 rounded shadow-md mb-4">Task 2</div>
      </div>
    </div>
  );
}
