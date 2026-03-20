/*
  # House of Beasts Gym Database Schema
  
  ## Overview
  This migration creates the database structure for the House of Beasts Gym website,
  including member registrations and testimonials.
  
  ## New Tables
  
  ### `registrations`
  Stores member registration data from the online signup form.
  - `id` (uuid, primary key) - Unique identifier for each registration
  - `first_name` (text) - Member's first name
  - `last_name` (text) - Member's last name
  - `email` (text, unique) - Member's email address
  - `phone` (text) - Contact phone number
  - `address` (text) - Residential address
  - `age` (integer) - Member's age
  - `gender` (text) - Gender (Male/Female/Other)
  - `fitness_goal` (text) - Primary fitness objective
  - `preferred_plan` (text) - Selected membership plan
  - `created_at` (timestamptz) - Registration timestamp
  
  ### `testimonials`
  Stores customer testimonials and reviews for display on the website.
  - `id` (uuid, primary key) - Unique identifier
  - `name` (text) - Customer name
  - `rating` (integer) - Star rating (1-5)
  - `review` (text) - Testimonial content
  - `image_url` (text, optional) - Customer photo URL
  - `is_featured` (boolean) - Whether to display on homepage
  - `created_at` (timestamptz) - Submission timestamp
  
  ## Security
  
  ### Row Level Security (RLS)
  - Both tables have RLS enabled
  - Public can insert registrations (for signup form)
  - Public can read featured testimonials
  - Only authenticated admins can view all registrations
  - Only authenticated users can manage testimonials
  
  ## Notes
  - Email addresses are unique to prevent duplicate registrations
  - All timestamps default to current time
  - Proper indexes added for performance
*/

-- Create registrations table
CREATE TABLE IF NOT EXISTS registrations (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  first_name text NOT NULL,
  last_name text NOT NULL,
  email text UNIQUE NOT NULL,
  phone text NOT NULL,
  address text NOT NULL,
  age integer NOT NULL CHECK (age >= 12 AND age <= 100),
  gender text NOT NULL CHECK (gender IN ('Male', 'Female', 'Other')),
  fitness_goal text NOT NULL,
  preferred_plan text NOT NULL,
  created_at timestamptz DEFAULT now()
);

-- Create testimonials table
CREATE TABLE IF NOT EXISTS testimonials (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  rating integer NOT NULL CHECK (rating >= 1 AND rating <= 5),
  review text NOT NULL,
  image_url text,
  is_featured boolean DEFAULT false,
  created_at timestamptz DEFAULT now()
);

-- Enable Row Level Security
ALTER TABLE registrations ENABLE ROW LEVEL SECURITY;
ALTER TABLE testimonials ENABLE ROW LEVEL SECURITY;

-- Registrations policies
-- Allow anyone to insert (for public signup form)
CREATE POLICY "Anyone can register"
  ON registrations
  FOR INSERT
  TO anon, authenticated
  WITH CHECK (true);

-- Allow authenticated users to view all registrations (for admin dashboard)
CREATE POLICY "Authenticated users can view registrations"
  ON registrations
  FOR SELECT
  TO authenticated
  USING (true);

-- Testimonials policies
-- Allow anyone to read featured testimonials
CREATE POLICY "Anyone can view featured testimonials"
  ON testimonials
  FOR SELECT
  TO anon, authenticated
  USING (is_featured = true);

-- Allow authenticated users to view all testimonials
CREATE POLICY "Authenticated users can view all testimonials"
  ON testimonials
  FOR SELECT
  TO authenticated
  USING (true);

-- Allow authenticated users to insert testimonials
CREATE POLICY "Authenticated users can create testimonials"
  ON testimonials
  FOR INSERT
  TO authenticated
  WITH CHECK (true);

-- Allow authenticated users to update testimonials
CREATE POLICY "Authenticated users can update testimonials"
  ON testimonials
  FOR UPDATE
  TO authenticated
  USING (true)
  WITH CHECK (true);

-- Create indexes for better performance
CREATE INDEX IF NOT EXISTS idx_registrations_email ON registrations(email);
CREATE INDEX IF NOT EXISTS idx_registrations_created_at ON registrations(created_at DESC);
CREATE INDEX IF NOT EXISTS idx_testimonials_featured ON testimonials(is_featured) WHERE is_featured = true;
CREATE INDEX IF NOT EXISTS idx_testimonials_created_at ON testimonials(created_at DESC);