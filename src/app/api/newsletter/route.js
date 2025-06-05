import { NextResponse } from 'next/server';
import dbConnect from '@/lib/dbConnect';
import Newsletter from '@/models/Newsletter';
import Joi from 'joi';
import { getServerSession } from 'next-auth';
import { authOptions } from '../auth/[...nextauth]/route';

const schema = Joi.object({
  email: Joi.string().email().required()
});

export async function POST(request) {
  await dbConnect();
  const data = await request.json();

  // Validate data
  const { error } = schema.validate(data);
  if (error) {
    return NextResponse.json(
      { error: 'Validation failed', details: error.details },
      { status: 400 }
    );
  }

  try {
    // Check if email already exists
    const existing = await Newsletter.findOne({ email: data.email });
    if (existing) {
      return NextResponse.json(
        { error: 'This email is already subscribed' },
        { status: 400 }
      );
    }

    const subscriber = new Newsletter(data);
    await subscriber.save();
    return NextResponse.json(subscriber);
  } catch (error) {
    console.error('Error saving subscriber:', error);
    return NextResponse.json(
      { error: 'Failed to subscribe' },
      { status: 500 }
    );
  }
}

export async function GET(request) {
  const session = await getServerSession(authOptions);
  if (!session) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  const { searchParams } = new URL(request.url);
  const status = searchParams.get('status');
  
  await dbConnect();
  
  try {
    const query = status ? { status } : {};
    const subscribers = await Newsletter.find(query).sort({ subscribedAt: -1 });
    return NextResponse.json(subscribers);
  } catch (error) {
    console.error('Error fetching subscribers:', error);
    return NextResponse.json(
      { error: 'Failed to fetch subscribers' },
      { status: 500 }
    );
  }
}

export async function DELETE(request) {
  const session = await getServerSession(authOptions);
  if (!session) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  const { id } = await request.json();
  
  if (!id) {
    return NextResponse.json(
      { error: 'Subscriber ID is required' },
      { status: 400 }
    );
  }

  await dbConnect();
  
  try {
    const deleted = await Newsletter.findByIdAndDelete(id);
    
    if (!deleted) {
      return NextResponse.json(
        { error: 'Subscriber not found' },
        { status: 404 }
      );
    }
    
    return NextResponse.json(
      { message: 'Subscriber deleted successfully' }
    );
  } catch (error) {
    console.error('Error deleting subscriber:', error);
    return NextResponse.json(
      { error: 'Failed to delete subscriber' },
      { status: 500 }
    );
  }
}
