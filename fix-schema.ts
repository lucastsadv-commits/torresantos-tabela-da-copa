import fs from 'fs';
import { groupsData, knockoutData } from './src/data/copa2026';

let sql = `-- Criação da Tabela de Jogos
CREATE TABLE matches (
  id text PRIMARY KEY,
  team1 text NOT NULL,
  team2 text NOT NULL,
  score1 integer,
  score2 integer,
  date text,
  time text,
  location text,
  stage text NOT NULL -- 'A', 'B', 'R16', 'FIN', etc.
);

-- Ativar o Realtime para a tabela matches
ALTER PUBLICATION supabase_realtime ADD TABLE matches;

-- Inserindo alguns dados iniciais de exemplo
INSERT INTO matches (id, team1, team2, score1, score2, date, time, location, stage) VALUES
`;

const values: string[] = [];

for (const group of groupsData) {
  const stage = group.name.replace('Grupo ', '');
  for (const match of group.matches) {
    values.push(`('${match.id}', '${match.team1}', '${match.team2}', null, null, '${match.date}', '${match.time}', '${match.location}', '${stage}')`);
  }
}

// Mata Mata
const stageMap: Record<string, string> = {
  roundOf32: 'R32',
  roundOf16: 'R16',
  quarterFinals: 'QF',
  semiFinals: 'SF',
  thirdPlace: '3RD',
  final: 'FIN'
};

for (const stageKey in knockoutData) {
  const stage = stageMap[stageKey] || stageKey;
  for (const match of knockoutData[stageKey]) {
    values.push(`('${match.id}', '${match.team1}', '${match.team2}', null, null, '${match.date}', '${match.time}', '${match.location}', '${stage}')`);
  }
}

sql += values.join(',\n') + ';\n';

fs.writeFileSync('./supabase/schema.sql', sql);
console.log('schema.sql updated successfully.');
