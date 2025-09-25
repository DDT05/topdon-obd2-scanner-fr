import { supabase } from './supabase'

export async function testDatabaseConnection() {
  try {
    console.log('Testing Supabase connection to reparix database...')

    // Test basic connection by trying to select from the table
    const { data, error } = await supabase
      .from('reparix')
      .select('*')
      .limit(1)

    if (error) {
      console.error('Database connection error:', error)
      return {
        success: false,
        error: error.message,
        details: error
      }
    }

    console.log('✅ Database connection successful!')
    console.log('Table exists and is accessible')

    return {
      success: true,
      message: 'Database connection successful',
      data
    }

  } catch (error) {
    console.error('Unexpected error:', error)
    return {
      success: false,
      error: 'Unexpected error occurred',
      details: error
    }
  }
}

export async function testNewsletterInsert(testEmail: string = 'test@example.com') {
  try {
    console.log(`Testing newsletter subscription with email: ${testEmail}`)

    // Try to insert a test subscription (minimal fields)
    const { data, error } = await supabase
      .from('reparix')
      .insert([{
        email: testEmail
      }])
      .select()

    if (error) {
      // If it's a duplicate email error, that's actually good - means table is working
      if (error.code === '23505') {
        console.log('✅ Table working correctly (duplicate email detected)')
        return {
          success: true,
          message: 'Table is working (email already exists)',
          isDuplicate: true
        }
      }

      console.error('Insert test failed:', error)
      return {
        success: false,
        error: error.message,
        details: error
      }
    }

    console.log('✅ Test insert successful!')
    console.log('Data inserted:', data)

    // Clean up test data
    await supabase
      .from('reparix')
      .delete()
      .eq('email', testEmail)

    console.log('✅ Test data cleaned up')

    return {
      success: true,
      message: 'Insert test successful',
      data
    }

  } catch (error) {
    console.error('Test insert error:', error)
    return {
      success: false,
      error: 'Test insert failed',
      details: error
    }
  }
}