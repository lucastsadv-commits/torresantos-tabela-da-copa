import { createClient } from '@supabase/supabase-js';
import dotenv from 'dotenv';
import { groupsData, knockoutData } from './src/data/copa2026';
import fs from 'fs';
import path from 'path';

const envConfig = dotenv.parse(fs.readFileSync(path.resolve(process.cwd(), '.env')));
const supabase = createClient(envConfig.VITE_SUPABASE_URL, envConfig.VITE_SUPABASE_ANON_KEY);

async function seed() {
  console.log('Seeding matches...');
  const allMatches = [];

  // Group matches
  for (const group of groupsData) {
    for (const match of group.matches) {
      allMatches.push({
        id: match.id,
        team1: match.team1,
        team2: match.team2,
        score1: match.score1,
        score2: match.score2,
        stage: 'Group Stage'
      });
    }
  }

  // Knockout matches
  for (const stage of Object.keys(knockoutData)) {
    for (const match of knockoutData[stage]) {
      allMatches.push({
        id: match.id,
        team1: match.team1,
        team2: match.team2,
        score1: match.score1,
        score2: match.score2,
        stage: stage
      });
    }
  }

  const { error } = await supabase.from('matches').upsert(allMatches);
  
  if (error) {
    console.error('Error:', error);
  } else {
    console.log(`Inserted ${allMatches.length} matches!`);
  }
}

seed();
