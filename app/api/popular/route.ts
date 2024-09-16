import { NextResponse } from 'next/server';

export async function GET(req: Request) {
  const popular = await fetch('https://b580138023681732.mokky.dev/popular');
  const popularItems = await popular.json();
  return NextResponse.json(popularItems);
}
