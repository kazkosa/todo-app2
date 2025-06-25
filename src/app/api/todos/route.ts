import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

export async function GET() {
  const todos = await prisma.todo.findMany({
    orderBy: { createdAt: 'desc' },
  });
  return NextResponse.json(todos);
}

export async function POST(req: Request) {
  const body = await req.json();
  const { text } = body;

  if (!text || typeof text !== 'string') {
    return NextResponse.json({ error: 'Invalid text' }, { status: 400 });
  }

  const newTodo = await prisma.todo.create({
    data: { text },
  });

  return NextResponse.json(newTodo, { status: 201 });
}
