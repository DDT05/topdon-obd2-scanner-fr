# Database Setup for TOPDON CarPal Landing Page

## Overview
This project is synced with the **reparix** Supabase database to store newsletter subscriptions from the TOPDON CarPal OBD2 Scanner landing page.

## Database Configuration
- **Supabase URL**: `https://suxnxblwklvcfnrvgjkr.supabase.co`
- **Database Name**: reparix
- **Table**: `newsletter_subscriptions`

## Setup Instructions

### 1. Create the Database Table

1. Go to your Supabase dashboard: https://supabase.com/dashboard
2. Navigate to your **reparix** project
3. Go to the **SQL Editor**
4. Copy and paste the entire contents of `database/setup.sql`
5. Click **Run** to execute the SQL script

### 2. Verify Setup

After running the SQL script, you can test the database connection by visiting:
```
http://localhost:3000/api/test-db
```

This will test:
- ✅ Database connection
- ✅ Table accessibility
- ✅ Insert functionality

### 3. Test Newsletter Subscription

You can test the newsletter subscription directly:

**Via API:**
```bash
curl -X POST -H "Content-Type: application/json" \
  -d '{"email":"test@example.com"}' \
  http://localhost:3000/api/subscribe
```

**Via Frontend:**
1. Start the development server: `npm run dev`
2. Open http://localhost:3000
3. Scroll to the newsletter section
4. Enter an email and click "S'abonner Maintenant"

## Database Schema

### Table: `newsletter_subscriptions`

| Column | Type | Description |
|--------|------|-------------|
| `id` | BIGSERIAL | Primary key, auto-incrementing |
| `email` | VARCHAR(255) | Subscriber email (unique) |
| `subscribed_at` | TIMESTAMPTZ | When the user subscribed (auto-generated) |
| `created_at` | TIMESTAMPTZ | Record creation time (auto-generated) |

### Security Features
- **Row Level Security (RLS)** enabled
- Anonymous users can INSERT (newsletter subscription)
- Service role has full access for admin purposes
- Unique constraint on email to prevent duplicates

## API Endpoints

### POST `/api/subscribe`
Subscribe an email to the newsletter.

**Request:**
```json
{
  "email": "user@example.com"
}
```

**Response (Success):**
```json
{
  "message": "Successfully subscribed!",
  "data": { ... }
}
```

**Response (Error):**
```json
{
  "error": "This email is already subscribed"
}
```

### GET `/api/test-db`
Test database connectivity and functionality.

**Response:**
```json
{
  "success": true,
  "message": "Database sync test completed successfully",
  "tests": { ... },
  "database": "reparix"
}
```

## Frontend Integration

The newsletter form is implemented as a React component (`NewsletterForm`) that:
- Validates email format client-side
- Shows loading states during submission
- Displays success/error messages
- Prevents duplicate submissions
- Clears form on successful subscription

## Troubleshooting

### Common Issues

1. **"Row Level Security policy violation"**
   - Make sure you've run the complete `database/setup.sql` script
   - Check that RLS policies are properly created

2. **"Table doesn't exist"**
   - Verify you're connected to the correct Supabase project (reparix)
   - Run the `database/setup.sql` script

3. **"Environment variables not found"**
   - Ensure `.env.local` file exists with correct Supabase credentials
   - Restart the development server after adding env vars

### Checking Database Content

To view subscribed emails, run this query in Supabase SQL Editor:
```sql
SELECT * FROM newsletter_subscriptions ORDER BY subscribed_at DESC;
```

## Security Notes

- The database uses Row Level Security (RLS) for secure access
- Only the email field is required for subscriptions
- Email addresses are automatically converted to lowercase
- Duplicate emails are handled gracefully
- No sensitive data is stored or logged