import { NextResponse } from 'next/server';
import dbConnect from '@/lib/dbConnect';
import Blog from '@/models/Blog';
import { getServerSession } from 'next-auth';
import { authOptions } from '../auth/[...nextauth]/route';
import Joi from 'joi';

const blogSchema = Joi.object({
  title: Joi.string().required(),
  content: Joi.string().required(),
  featuredImage: Joi.string().uri().optional(),
  tags: Joi.array().items(Joi.string()).optional(),
  status: Joi.string().valid('draft', 'published').required(),
  author: Joi.string().required(),
});

export async function GET() {
  await dbConnect();
  const blogs = await Blog.find().sort({ createdAt: -1 });
  return NextResponse.json(blogs);
}

export async function POST(request) {
  const session = await getServerSession(authOptions);
  
  if (!session) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  await dbConnect();
  const data = await request.json();

  // Validate the data
  const { error } = blogSchema.validate(data);
  if (error) {
    console.error('Validation Error:', error.details);
    return NextResponse.json({ error: 'Invalid data', details: error.details }, { status: 400 });
  }

  try {
    const blog = new Blog(data);
    await blog.save();
    return NextResponse.json(blog);
  } catch (error) {
    console.error('Error creating blog:', error);
    return NextResponse.json({ error: 'Error creating blog' }, { status: 500 });
  }
}

export async function PUT(request) {
  const session = await getServerSession(authOptions);
  
  if (!session) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  await dbConnect();
  const { _id, ...data } = await request.json();
  
  // Validate the data
  const { error } = blogSchema.validate(data);
  if (error) {
    console.error('Validation Error:', error.details);
    return NextResponse.json({ error: 'Invalid data', details: error.details }, { status: 400 });
  }

  try {
    const blog = await Blog.findByIdAndUpdate(_id, data, { new: true });
    return NextResponse.json(blog);
  } catch (error) {
    console.error('Error updating blog:', error);
    return NextResponse.json({ error: 'Error updating blog' }, { status: 500 });
  }
}

export async function DELETE(request) {
  const session = await getServerSession(authOptions);
  
  if (!session) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  await dbConnect();
  const { _id } = await request.json();
  
  try {
    await Blog.findByIdAndDelete(_id);
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Error deleting blog:', error);
    return NextResponse.json({ error: 'Error deleting blog' }, { status: 500 });
  }
}