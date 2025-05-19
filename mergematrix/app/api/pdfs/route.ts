import { NextResponse } from 'next/server';
import connectDB from '@/app/lib/mongodb';
import PDF from '@/app/models/PDF';

export async function POST(request: Request) {
  try {
    await connectDB();
    
    const data = await request.json();
    const { userId, userEmail, fileName, fileSize, mergedFiles, settings } = data;
    
    if (!userId || !userEmail || !fileName || !fileSize || !mergedFiles) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    const pdf = await PDF.create({
      userId,
      userEmail,
      fileName,
      fileSize,
      mergedFiles,
      settings
    });

    return NextResponse.json({
      success: true,
      pdf
    });

  } catch (error) {
    console.error('Error saving PDF data:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}

export async function GET(request: Request) {
  try {
    await connectDB();
    
    const { searchParams } = new URL(request.url);
    const userId = searchParams.get('userId');
    const userEmail = searchParams.get('userEmail');
    
    if (!userId && !userEmail) {
      return NextResponse.json(
        { error: 'Either User ID or Email is required' },
        { status: 400 }
      );
    }

    const query = userId ? { userId } : { userEmail };
    const pdfs = await PDF.find(query)
      .sort({ createdAt: -1 })
      .limit(10);

    return NextResponse.json({
      success: true,
      pdfs
    });

  } catch (error) {
    console.error('Error fetching PDFs:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
} 