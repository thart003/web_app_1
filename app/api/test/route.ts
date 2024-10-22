// app/api/test/route.ts
import { NextResponse } from 'next/server'
import dbConnect from '../../lib/db'  // This should work as both files are in the app directory

export async function GET() {
  try {
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