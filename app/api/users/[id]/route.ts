// app/api/users/[id]/route.ts
import { NextResponse } from 'next/server'
import dbConnect from '../../../lib/db'
import { User } from '../../../models/user'

interface Props {
  params: {
    id: string
  }
}

export async function GET(request: Request, { params }: Props) {
  try {
    await dbConnect()
    const user = await User.findById(params.id)
    
    if (!user) {
      return NextResponse.json(
        { error: 'User not found' },
        { status: 404 }
      )
    }

    return NextResponse.json(user)
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 })
  }
}

export async function PUT(request: Request, { params }: Props) {
  try {
    await dbConnect()
    const body = await request.json()
    
    const user = await User.findByIdAndUpdate(
      params.id,
      body,
      { new: true, runValidators: true }
    )

    if (!user) {
      return NextResponse.json(
        { error: 'User not found' },
        { status: 404 }
      )
    }

    return NextResponse.json(user)
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 400 })
  }
}

export async function DELETE(request: Request, { params }: Props) {
  try {
    await dbConnect()
    const user = await User.findByIdAndDelete(params.id)

    if (!user) {
      return NextResponse.json(
        { error: 'User not found' },
        { status: 404 }
      )
    }

    return NextResponse.json({ message: 'User deleted successfully' })
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 })
  }
}