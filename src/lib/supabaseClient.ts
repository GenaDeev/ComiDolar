import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://mndgyahtssypdtwwusoj.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im1uZGd5YWh0c3N5cGR0d3d1c29qIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjkxNzA5NDUsImV4cCI6MjA0NDc0Njk0NX0.QqJSDMUMjUuOt2OgxhBliFUS7yu36KHpdFJI3TkMtYI';

export const supabase = createClient(supabaseUrl, supabaseKey);