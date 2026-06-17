import { calculateGroups } from './src/utils/tableCalculations.ts';
import { groupsData } from './src/data/copa2026.ts';
import dotenv from 'dotenv';
import { createClient } from '@supabase/supabase-js';

dotenv.config();
const supabase = createClient(process.env.VITE_SUPABASE_URL as string, process.env.VITE_SUPABASE_ANON_KEY as string);

async function test() {
  const { data: matches, error } = await supabase.from('matches').select('*');
  if (error) {
    console.error(error);
    return;
  }
  const result = calculateGroups(matches as any, groupsData);
  const groupK = result.find(g => g.name === 'Grupo K');
  console.log(JSON.stringify(groupK, null, 2));
}

test();
