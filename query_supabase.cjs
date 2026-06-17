require('dotenv').config();
const { createClient } = require('@supabase/supabase-js');

const supabase = createClient(process.env.VITE_SUPABASE_URL, process.env.VITE_SUPABASE_ANON_KEY);

async function check() {
  const { data, error } = await supabase.from('matches').select('*');
  console.log(JSON.stringify(data.map(m => ({ id: m.id, team1: m.team1, team2: m.team2, score1: m.score1, score2: m.score2 })), null, 2));
}

check();
