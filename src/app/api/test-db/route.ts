import { testDatabaseConnection, testNewsletterInsert } from '@/lib/db-test'
import { NextResponse } from 'next/server'

export async function GET() {
  try {
    console.log('=== Database Connection Test ===')

    // Test basic connection
    const connectionTest = await testDatabaseConnection()

    if (!connectionTest.success) {
      return NextResponse.json({
        success: false,
        step: 'connection',
        error: connectionTest.error,
        details: connectionTest.details
      }, { status: 500 })
    }

    // Test newsletter table functionality
    const insertTest = await testNewsletterInsert(`test-${Date.now()}@reparix-test.com`)

    return NextResponse.json({
      success: true,
      message: 'Database sync test completed successfully',
      tests: {
        connection: connectionTest,
        newsletter_insert: insertTest
      },
      database: 'reparix',
      timestamp: new Date().toISOString()
    })

  } catch (error) {
    console.error('Database test error:', error)
    return NextResponse.json({
      success: false,
      error: 'Database test failed',
      details: error instanceof Error ? error.message : 'Unknown error'
    }, { status: 500 })
  }
}