import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error('Missing Supabase environment variables');
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

export interface Registration {
  id?: string;
  first_name: string;
  last_name: string;
  email: string;
  phone: string;
  address: string;
  age: number;
  gender: 'Male' | 'Female' | 'Other';
  fitness_goal: string;
  preferred_plan: string;
  created_at?: string;
}

export interface Testimonial {
  id?: string;
  name: string;
  rating: number;
  review: string;
  image_url?: string;
  is_featured?: boolean;
  created_at?: string;
}
