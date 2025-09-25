-- Newsletter subscriptions table for reparix database
-- This table will store all email subscribers from the TOPDON CarPal landing page

-- Drop table if exists (for clean setup)
DROP TABLE IF EXISTS newsletter_subscriptions CASCADE;

-- Create the newsletter_subscriptions table
CREATE TABLE newsletter_subscriptions (
  id BIGSERIAL PRIMARY KEY,
  email VARCHAR(255) UNIQUE NOT NULL,
  subscribed_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Add indexes for better performance
CREATE INDEX idx_newsletter_email ON newsletter_subscriptions(email);
CREATE INDEX idx_newsletter_subscribed_at ON newsletter_subscriptions(subscribed_at);

-- Enable Row Level Security (RLS)
ALTER TABLE newsletter_subscriptions ENABLE ROW LEVEL SECURITY;

-- Create policy to allow anonymous users to insert (for newsletter subscription)
CREATE POLICY "Allow anonymous newsletter subscription"
ON newsletter_subscriptions
FOR INSERT
TO anon
WITH CHECK (true);

-- Create policy to allow authenticated users to insert (for newsletter subscription)
CREATE POLICY "Allow authenticated newsletter subscription"
ON newsletter_subscriptions
FOR INSERT
TO authenticated
WITH CHECK (true);

-- Create policy to allow service role full access (for admin purposes)
CREATE POLICY "Allow service role full access"
ON newsletter_subscriptions
FOR ALL
TO service_role
USING (true)
WITH CHECK (true);

-- Grant necessary permissions
GRANT INSERT ON newsletter_subscriptions TO anon;
GRANT INSERT ON newsletter_subscriptions TO authenticated;
GRANT ALL ON newsletter_subscriptions TO service_role;
GRANT USAGE ON SEQUENCE newsletter_subscriptions_id_seq TO anon;
GRANT USAGE ON SEQUENCE newsletter_subscriptions_id_seq TO authenticated;

-- Add comments to document the table
COMMENT ON TABLE newsletter_subscriptions IS 'Stores email subscriptions from the TOPDON CarPal OBD2 Scanner landing page';
COMMENT ON COLUMN newsletter_subscriptions.email IS 'Subscriber email address (unique)';
COMMENT ON COLUMN newsletter_subscriptions.subscribed_at IS 'When the user subscribed to the newsletter';
COMMENT ON COLUMN newsletter_subscriptions.created_at IS 'Record creation timestamp';