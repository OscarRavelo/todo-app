import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();
// delete tasks

export async function DELETE(
  req: NextRequest,
  context: { params: { id: string } },
) {
  const { id } = await context.params;
  try {
    const TaskId = parseInt(id, 10);
    if (isNaN(TaskId)) {
      return NextResponse.json({ error: "invalid task ID" }, { status: 400 });
    }
    await prisma.task.delete({
      where: { id: TaskId },
    });
    return NextResponse.json(
      { message: `Task with Id ${id} deleted successfully` },
      { status: 200 },
    );
  } catch (error) {
    console.error("error trying to delete the task: ", error);
  }
}

export async function UpdateStatus(
  req: NextRequest,
  context: { params: { id: string } },
) {
  const { id } = await context.params;
  try {
    const taskId = parseInt(id, 10);
    if (isNaN(taskId)) {
      return NextResponse.json({ error: "invalid task ID" }, { status: 400 });
    }
    const body = await req.json();
    const { status } = body;
    const updatedTask = await prisma.task.update({
      where: { id: taskId },
      data: { status: status },
    });

    return NextResponse.json(updatedTask);
  } catch (error) {
    console.error("error updating task:", error);
    return NextResponse.json(
      {
        error: "Failed to updated task",
      },
      {
        status: 500,
      },
    );
  }
}
