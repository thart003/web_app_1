// app/api/test/route.ts
import { NextResponse } from 'next/server'
import dbConnect from '../../lib/db'

export async function GET() {
  // First check if we can access the environment variable
  if (!process.env.MONGODB_URI) {
    return NextResponse.json({
      status: 'error',
      message: 'MONGODB_URI is not defined in environment variables'
    }, { status: 500 })
  }

  try {
    console.log('Attempting to connect to MongoDB...')
    const conn = await dbConnect()
    
    const response = {
      status: 'success',
      message: 'Connected to MongoDB successfully!',
      details: {
        database: conn.connection.name,
        host: conn.connection.host,
        port: conn.connection.port
      }
    }

    console.log('Connection successful:', response)
    return NextResponse.json(response, { status: 200 })
    
  } catch (error: any) {
    console.error('Database connection error:', error)
    
    return NextResponse.json({
      status: 'error',
      message: 'Failed to connect to database',
      error: error.message
    }, { status: 500 })
  }
}