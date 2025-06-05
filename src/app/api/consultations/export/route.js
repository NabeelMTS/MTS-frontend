import { NextResponse } from 'next/server';
import dbConnect from '@/lib/dbConnect';
import Consultation from '@/models/Consultation';

export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const status = searchParams.get('status');
  
  await dbConnect();
  
  try {
    const query = status ? { status } : {};
    const consultations = await Consultation.find(query).sort({ createdAt: -1 });

    // Convert to CSV
    const headers = [
      'Name',
      'Business',
      'Email',
      'Phone',
      'Providers',
      'Message',
      'Status',
      'Created At'
    ].join(',');

    const rows = consultations.map(consultation => {
      return [
        `"${consultation.name.replace(/"/g, '""')}"`,
        `"${(consultation.business || '').replace(/"/g, '""')}"`,
        `"${consultation.email.replace(/"/g, '""')}"`,
        `"${consultation.phone.replace(/"/g, '""')}"`,
        `"${consultation.providers.replace(/"/g, '""')}"`,
        `"${consultation.message.replace(/"/g, '""')}"`,
        `"${consultation.status.replace(/"/g, '""')}"`,
        `"${consultation.createdAt.toISOString()}"`
      ].join(',');
    });

    const csvContent = [headers, ...rows].join('\n');

    return new NextResponse(csvContent, {
      headers: {
        'Content-Type': 'text/csv',
        'Content-Disposition': 'attachment; filename=consultations.csv'
      }
    });
  } catch (error) {
    console.error('Export error:', error);
    return NextResponse.json(
      { error: 'Failed to export consultations' },
      { status: 500 }
    );
  }
}
