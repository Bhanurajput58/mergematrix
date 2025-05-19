import { NextResponse } from 'next/server';
import connectDB from '@/lib/mongodb';
import User from '@/app/models/User';

export async function GET(request: Request) {
  try {
    const email = request.headers.get('x-user-email');
    
    if (!email) {
      return NextResponse.json({ error: 'Email is required' }, { status: 401 });
    }

    await connectDB();
    const dbUser = await User.findOne({ email });

    if (!dbUser) {
      return NextResponse.json({ generations: 0, isPremium: false });
    }

    return NextResponse.json({
      generations: dbUser.generations,
      isPremium: dbUser.isPremium
    });
  } catch (error) {
    console.error('Error fetching generations:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}

export async function POST(request: Request) {
  try {
    const email = request.headers.get('x-user-email');
    
    if (!email) {
      return NextResponse.json({ error: 'Email is required' }, { status: 401 });
    }

    await connectDB();
    let dbUser = await User.findOne({ email });

    if (!dbUser) {
      dbUser = await User.create({
        email,
        generations: 0,
        isPremium: false
      });
    }

    // Check if user has exceeded their limit
    const isPremium = dbUser.isPremium;
    const maxGenerations = isPremium ? 100 : 3;
    
    if (dbUser.generations >= maxGenerations) {
      return NextResponse.json({
        error: 'Generation limit reached',
        generations: dbUser.generations,
        isPremium: dbUser.isPremium
      }, { status: 403 });
    }

    // Increment generations
    dbUser.generations += 1;
    dbUser.lastGeneration = new Date();
    await dbUser.save();

    return NextResponse.json({
      generations: dbUser.generations,
      isPremium: dbUser.isPremium
    });
  } catch (error) {
    console.error('Error updating generations:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
} 