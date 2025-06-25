import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

export async function DELETE(_: Request, { params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;

  try {
    await prisma.todo.delete({ where: { id } });
    return NextResponse.json({ message: 'Deleted' });
  } catch (e) {
    console.error(e);
    return NextResponse.json({ error: 'Not found' }, { status: 404 });
  }
}
