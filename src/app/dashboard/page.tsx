import Dashboard from "@/components/dashboard";
import { DragDropContext, Droppable } from "@hello-pangea/dnd";
export default function Home() {
  return (
    <div className="bg-gray-100 p-6 border-red-500 border-t h-screen text-black overflow-hidden">
      <Dashboard />
    </div>
  );
}
