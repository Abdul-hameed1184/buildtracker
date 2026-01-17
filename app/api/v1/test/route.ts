import { NextResponse } from 'next/server';

export async function GET() {
  return NextResponse.json([
    { id: '1', title: 'Setup Project', status: 'completed' },
    { id: '2', title: 'Configure TanStack Query', status: 'in-progress' },
    { id: '3', title: 'Verify API', status: 'pending' },
  ]);
}
