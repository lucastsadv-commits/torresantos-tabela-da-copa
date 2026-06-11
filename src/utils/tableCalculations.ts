import type { Group, Match, KnockoutMatch } from '../data/copa2026';

export function calculateGroups(matches: Match[], initialGroups: Group[]): Group[] {
  // Fazemos uma cópia profunda para não mutar o estado inicial
  const newGroups: Group[] = JSON.parse(JSON.stringify(initialGroups));

  newGroups.forEach(group => {
    // 1. Atualizar os placares dos jogos do grupo
    group.matches.forEach(groupMatch => {
      const liveMatch = matches.find(m => m.id === groupMatch.id);
      if (liveMatch) {
        groupMatch.score1 = liveMatch.score1;
        groupMatch.score2 = liveMatch.score2;
      }
    });

    // 2. Zerar as estatísticas dos times para recalcular do zero
    group.teams.forEach(team => {
      team.played = 0;
      team.won = 0;
      team.drawn = 0;
      team.lost = 0;
      team.goalsFor = 0;
      team.goalsAgainst = 0;
      team.points = 0;
    });

    // 3. Recalcular baseado nos jogos com placar
    group.matches.forEach(match => {
      if (match.score1 !== null && match.score2 !== null) {
        const team1 = group.teams.find(t => t.name === match.team1);
        const team2 = group.teams.find(t => t.name === match.team2);

        if (team1 && team2) {
          team1.played += 1;
          team2.played += 1;

          team1.goalsFor += match.score1;
          team1.goalsAgainst += match.score2;

          team2.goalsFor += match.score2;
          team2.goalsAgainst += match.score1;

          if (match.score1 > match.score2) {
            team1.won += 1;
            team1.points += 3;
            team2.lost += 1;
          } else if (match.score1 < match.score2) {
            team2.won += 1;
            team2.points += 3;
            team1.lost += 1;
          } else {
            team1.drawn += 1;
            team2.drawn += 1;
            team1.points += 1;
            team2.points += 1;
          }
        }
      }
    });

    // 4. Ordenação (Pontos > Saldo de Gols > Gols Pró)
    group.teams.sort((a, b) => {
      if (b.points !== a.points) return b.points - a.points;
      
      const sgA = a.goalsFor - a.goalsAgainst;
      const sgB = b.goalsFor - b.goalsAgainst;
      if (sgA !== sgB) return sgB - sgA;
      
      return b.goalsFor - a.goalsFor;
    });
  });

  return newGroups;
}

export function updateKnockout(matches: Match[], initialKnockout: Record<string, KnockoutMatch[]>): Record<string, KnockoutMatch[]> {
  const newKnockout = JSON.parse(JSON.stringify(initialKnockout));
  
  for (const stage in newKnockout) {
    newKnockout[stage].forEach((koMatch: KnockoutMatch) => {
      const liveMatch = matches.find(m => m.id === koMatch.id);
      if (liveMatch) {
        koMatch.score1 = liveMatch.score1;
        koMatch.score2 = liveMatch.score2;
        // Na vida real, a API poderia atualizar team1 e team2 também caso os cruzamentos sejam automáticos
      }
    });
  }

  return newKnockout;
}
