import { NextResponse } from 'next/server';
import dbConnect from '../../lib/db'
import { Project } from '../../models/project'

export async function GET() {
  try {
    await dbConnect();
    const projects = await Project.find({})
      .populate('owner', 'name email')
      .sort({ createdAt: -1 });
    return NextResponse.json(projects);
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

export async function POST(request: Request) {
  try {
    await dbConnect();
    const body = await request.json();
    const project = await Project.create(body);
    await project.populate('owner', 'name email');
    return NextResponse.json(project, { status: 201 });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 400 });
  }
}