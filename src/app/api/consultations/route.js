import { NextResponse } from 'next/server';
import dbConnect from '@/lib/dbConnect';
import Consultation from '@/models/Consultation';
import Joi from 'joi';

const schema = Joi.object({
  name: Joi.string().required(),
  business: Joi.string().allow(''),
  email: Joi.string().email().required(),
  phone: Joi.string().required(),
  providers: Joi.string().valid('1-5', '6-10', '11-20', '20+').required(),
  message: Joi.string().required()
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
    const consultation = new Consultation(data);
    await consultation.save();
    return NextResponse.json(consultation);
  } catch (error) {
    console.error('Error saving consultation:', error);
    return NextResponse.json(
      { error: 'Failed to save consultation' },
      { status: 500 }
    );
  }
}

export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const status = searchParams.get('status');
  
  await dbConnect();
  
  try {
    const query = status ? { status } : {};
    const consultations = await Consultation.find(query).sort({ createdAt: -1 });
    return NextResponse.json(consultations);
  } catch (error) {
    console.error('Error fetching consultations:', error);
    return NextResponse.json(
      { error: 'Failed to fetch consultations' },
      { status: 500 }
    );
  }
}

export async function PUT(request) {
  const { id, status } = await request.json();
  
  if (!id || !status) {
    return NextResponse.json(
      { error: 'ID and status are required' },
      { status: 400 }
    );
  }

  await dbConnect();
  
  try {
    const updated = await Consultation.findByIdAndUpdate(
      id,
      { status },
      { new: true }
    );
    
    if (!updated) {
      return NextResponse.json(
        { error: 'Consultation not found' },
        { status: 404 }
      );
    }
    
    return NextResponse.json(updated);
  } catch (error) {
    console.error('Error updating consultation:', error);
    return NextResponse.json(
      { error: 'Failed to update consultation' },
      { status: 500 }
    );
  }
}

export async function DELETE(request) {
  const { id } = await request.json();
  
  if (!id) {
    return NextResponse.json(
      { error: 'Consultation ID is required' },
      { status: 400 }
    );
  }

  await dbConnect();
  
  try {
    const deleted = await Consultation.findByIdAndDelete(id);
    
    if (!deleted) {
      return NextResponse.json(
        { error: 'Consultation not found' },
        { status: 404 }
      );
    }
    
    return NextResponse.json(
      { message: 'Consultation deleted successfully' }
    );
  } catch (error) {
    console.error('Error deleting consultation:', error);
    return NextResponse.json(
      { error: 'Failed to delete consultation' },
      { status: 500 }
    );
  }
}
