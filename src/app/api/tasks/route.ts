import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client/extension";

const prisma = new PrismaClient();

// obtener todas las tareas
export async function GET() {
  const tasks = await prisma.task.findMany();
  return NextResponse.json(tasks);
}

// create new task

export async function POST(req: Request) {
  const body = await req.json();
  const { task } = body;

  if (!task) {
    return NextResponse.json(
      { error: "missing task description" },
      { status: 400 },
    );
  }
  const newTask = await prisma.task.create({
    data: { task, status: "TO-DO" },
  });

  return NextResponse.json(newTask, { status: 201 });
}
