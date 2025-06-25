import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

type Params = { params: { id: string } };

export async function DELETE(_: Request, { params }: Params) {
  const { id } = params;

  try {
    await prisma.todo.delete({ where: { id } });
    return NextResponse.json({ message: 'Deleted' });
  } catch (e) {
    console.error(e)
    return NextResponse.json({ error: 'Not found' }, { status: 404 });
  }
}
