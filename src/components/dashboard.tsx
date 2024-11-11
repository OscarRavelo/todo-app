"use client";

export default function Dashboard() {
  return (
    <div className="flex space-x-4 p-4 min-h-screen">
      <div class="w-1/3 bg-blue-100 p-4 rounded-lg shadow-md">
        <h2 class="text-blue-700 font-semibold mb-4">To Do</h2>
        <button class="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 mb-4">
          Add Task
        </button>
        <div class="bg-white p-4 rounded shadow-md mb-4">Task 1</div>
        <div class="bg-white p-4 rounded shadow-md mb-4">Task 2</div>
      </div>

      <div class="w-1/3 bg-gray-100 p-4 rounded-lg shadow-md">
        <h2 class="text-gray-700 font-semibold mb-4">In Progress</h2>
        <button class="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 mb-4">
          Add Task
        </button>
        <div class="bg-white p-4 rounded shadow-md mb-4">Task 1</div>
        <div class="bg-white p-4 rounded shadow-md mb-4">Task 2</div>
      </div>

      <div class="w-1/3 bg-blue-100 p-4 rounded-lg shadow-md">
        <h2 class="text-blue-700 font-semibold mb-4">Done</h2>
        <button class="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 mb-4">
          Add Task
        </button>
        <div class="bg-white p-4 rounded shadow-md mb-4">Task 1</div>
        <div class="bg-white p-4 rounded shadow-md mb-4">Task 2</div>
      </div>
    </div>
  );
}
