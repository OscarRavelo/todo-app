export default function Modal() {
  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log(event.target[0].value);
    try {
      const res = await fetch("/api/tasks", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify({task:event.target[0].value}),
      });
      if (!res.ok) throw new Error("Failed to create the task");
      const data = await res.json();
      console.log("task created", data);
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          task: <input name="task" type="text" required />
        </label>
        <button>create the task</button>
      </form>
    </div>
  );
}
