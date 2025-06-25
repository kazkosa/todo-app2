import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

type Params = { params: { id: string } };

export async function PATCH(_: Request, { params }: Params) {
  const { id } = params;

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
