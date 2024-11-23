export default function Modal({
  addTask,
  setShowModal,
}: {
  addTask: () => void;
  setShowModal: (bool: boolean) => void;
}) {
  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log(event.target[0].value);
    addTask(event.target[0].value);
    setShowModal(false);
  };

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
