import { NextResponse } from 'next/server';
import dbConnect from '@/lib/dbConnect';
import Newsletter from '@/models/Newsletter';
import { getServerSession } from 'next-auth';
import { authOptions } from '../../auth/[...nextauth]/route';

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

    // Convert to CSV
    const headers = ['Email', 'Status', 'Subscribed At'].join(',');

    const rows = subscribers.map(subscriber => {
      return [
        `"${subscriber.email.replace(/"/g, '""')}"`,
        `"${subscriber.status.replace(/"/g, '""')}"`,
        `"${subscriber.subscribedAt.toISOString()}"`
      ].join(',');
    });

    const csvContent = [headers, ...rows].join('\n');

    return new NextResponse(csvContent, {
      headers: {
        'Content-Type': 'text/csv',
        'Content-Disposition': 'attachment; filename=newsletter-subscribers.csv'
      }
    });
  } catch (error) {
    console.error('Export error:', error);
    return NextResponse.json(
      { error: 'Failed to export subscribers' },
      { status: 500 }
    );
  }
}
