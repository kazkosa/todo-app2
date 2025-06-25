import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

export async function PATCH(_: Request, { params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;

  const todo = await prisma.todo.findUnique({ where: { id } });
  if (!todo) {
    return NextResponse.json({ error: 'Not found' }, { status: 404 });
  }

  const updated = await prisma.todo.update({
    where: { id },
    data: { done: !todo.done },
  });

  return NextResponse.json(updated);
}
