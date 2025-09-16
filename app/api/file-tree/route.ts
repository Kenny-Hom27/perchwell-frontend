import { NextResponse } from 'next/server';
import { generateFileTree } from '../../../data/generateFileTree';

export async function GET() {
  const tree = generateFileTree();
  return NextResponse.json(tree);
}
