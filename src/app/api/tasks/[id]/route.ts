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
