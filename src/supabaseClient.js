// src/supabaseClient.js
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://osyfnnvihyakslzquqkf.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im9zeWZubnZpaHlha3NsenF1cWtmIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDA0ODI4NTUsImV4cCI6MjA1NjA1ODg1NX0.LZwY4YiWd8rjjx33pHe8DS0ICCt7RZkDOZq1FQS6IrY';
export const supabase = createClient(supabaseUrl, supabaseKey);