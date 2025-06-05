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
  slug: Joi.string().optional(), // Slug is auto-generated
});

export async function GET(request) {
  await dbConnect();
  
  const { searchParams } = new URL(request.url);
  const id = searchParams.get('id');
  
  if (id) {
    try {
      const blog = await Blog.findById(id);
      if (!blog) {
        return NextResponse.json({ error: 'Blog not found' }, { status: 404 });
      }
      return NextResponse.json(blog);
    } catch (error) {
      console.error('Error fetching blog:', error);
      return NextResponse.json({ error: 'Error fetching blog' }, { status: 500 });
    }
  }
  
  // If no ID is provided, return all blogs (existing functionality)
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
    // Generate slug from title
    const slug = data.title
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/(^-|-$)/g, '');

    // Add slug to data
    const blogData = {
      ...data,
      slug
    };

    const blog = new Blog(blogData);
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

  try {
    const data = await request.json();
    const { _id } = data;

    if (!_id) {
      return NextResponse.json({ error: 'Blog ID is required' }, { status: 400 });
    }

    const deletedBlog = await Blog.findByIdAndDelete(_id);
    
    if (!deletedBlog) {
      return NextResponse.json({ error: 'Blog not found' }, { status: 404 });
    }

    return NextResponse.json({ message: 'Blog deleted successfully' });
  } catch (error) {
    console.error('Error deleting blog:', error);
    return NextResponse.json({ error: 'Error deleting blog' }, { status: 500 });
  }
}