import { supabase } from '@/lib/supabase'
import { NextResponse } from 'next/server'

export async function POST(request: Request) {
  try {
    const { email } = await request.json()

    if (!email) {
      return NextResponse.json(
        { error: 'Email is required' },
        { status: 400 }
      )
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Invalid email format' },
        { status: 400 }
      )
    }

    // Insert email into Supabase
    const { data, error } = await supabase
      .from('newsletter_subscriptions')
      .insert([
        {
          email: email.toLowerCase().trim(),
        }
      ])
      .select()

    if (error) {
      console.error('Supabase error:', error)

      // Handle unique constraint violation (duplicate email)
      if (error.code === '23505') {
        return NextResponse.json(
          { error: 'This email is already subscribed' },
          { status: 409 }
        )
      }

      return NextResponse.json(
        { error: 'Failed to subscribe' },
        { status: 500 }
      )
    }

    return NextResponse.json(
      {
        message: 'Successfully subscribed!',
        data: data?.[0]
      },
      { status: 201 }
    )

  } catch (error) {
    console.error('API error:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}