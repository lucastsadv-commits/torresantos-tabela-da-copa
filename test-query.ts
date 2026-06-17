import { createClient } from '@supabase/supabase-js';
import dotenv from 'dotenv';
import fs from 'fs';
import path from 'path';

const envPath = path.resolve(process.cwd(), '.env');
const envConfig = dotenv.parse(fs.readFileSync(envPath));

const supabase = createClient(envConfig.VITE_SUPABASE_URL, envConfig.VITE_SUPABASE_ANON_KEY);

async function check() {
  const { data, error } = await supabase.from('matches').update({ score1: 2, score2: 1 }).eq('id', 'MK1').select();
  console.log('Match MK1 updated:', data);
  if (error) console.error(error);
}

check();
