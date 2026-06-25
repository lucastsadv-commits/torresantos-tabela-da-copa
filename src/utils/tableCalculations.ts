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
        groupMatch.status = liveMatch.status;
        groupMatch.minute = liveMatch.minute;
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
      // Garantir que não são strings vazias e nem nulos
      if (
        match.score1 !== null && match.score2 !== null && 
        String(match.score1).trim() !== '' && String(match.score2).trim() !== ''
      ) {
        const team1 = group.teams.find(t => t.name === match.team1);
        const team2 = group.teams.find(t => t.name === match.team2);

        if (team1 && team2) {
          const s1 = Number(match.score1);
          const s2 = Number(match.score2);

          team1.played += 1;
          team2.played += 1;

          team1.goalsFor += s1;
          team1.goalsAgainst += s2;

          team2.goalsFor += s2;
          team2.goalsAgainst += s1;

          if (s1 > s2) {
            team1.won += 1;
            team1.points += 3;
            team2.lost += 1;
          } else if (s1 < s2) {
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

export function updateKnockout(matches: Match[], initialKnockout: Record<string, KnockoutMatch[]>, groups: Group[] = []): Record<string, KnockoutMatch[]> {
  const newKnockout = JSON.parse(JSON.stringify(initialKnockout));
  
  // Helper to resolve group placeholders like "1º A" or "2º C"
  const resolveTeam = (placeholder: string): string => {
    const matchGroup = placeholder.match(/^([12])º\s+([A-L])$/);
    if (matchGroup) {
      const position = parseInt(matchGroup[1], 10);
      const groupLetter = matchGroup[2];
      const groupName = `Grupo ${groupLetter}`;
      const group = groups.find(g => g.name === groupName);
      if (group && group.teams.length >= position) {
        const team = group.teams[position - 1];
        // Only show the team in the bracket if they have played at least 1 match
        // This acts as a live projection.
        return team.played > 0 ? team.name : placeholder;
      }
    }
    return placeholder;
  };

  // Helper to resolve winners/losers from previous knockout matches
  const resolveKnockout = (placeholder: string): string => {
    if (placeholder.startsWith('Venc.')) {
      const matchId = placeholder.split(' ')[1];
      const match = findMatchById(matchId);
      // Determine winner if match is finished
      if (match && match.status === 'FINISHED' && match.score1 !== null && match.score2 !== null) {
        if (match.score1 > match.score2) return match.team1;
        if (match.score2 > match.score1) return match.team2;
      }
    } else if (placeholder.startsWith('Perdedor')) {
      const matchId = placeholder.split(' ')[1];
      const match = findMatchById(matchId);
      // Determine loser if match is finished
      if (match && match.status === 'FINISHED' && match.score1 !== null && match.score2 !== null) {
        if (match.score1 < match.score2) return match.team1;
        if (match.score2 < match.score1) return match.team2;
      }
    }
    return placeholder;
  };

  const findMatchById = (id: string): KnockoutMatch | undefined => {
    for (const stage in newKnockout) {
      const match = newKnockout[stage].find((m: KnockoutMatch) => m.id === id);
      if (match) return match;
    }
    return undefined;
  };

  // 1st pass: update with live match data and group standings
  for (const stage in newKnockout) {
    newKnockout[stage].forEach((koMatch: KnockoutMatch) => {
      koMatch.team1 = resolveTeam(koMatch.team1);
      koMatch.team2 = resolveTeam(koMatch.team2);

      const liveMatch = matches.find(m => m.id === koMatch.id);
      if (liveMatch) {
        koMatch.score1 = liveMatch.score1;
        koMatch.score2 = liveMatch.score2;
        koMatch.status = liveMatch.status;
        koMatch.minute = liveMatch.minute;
        
        // If API sent explicit team names (overriding placeholders)
        if (liveMatch.team1 && !liveMatch.team1.includes('º')) koMatch.team1 = liveMatch.team1;
        if (liveMatch.team2 && !liveMatch.team2.includes('º')) koMatch.team2 = liveMatch.team2;
      }
    });
  }

  // 2nd pass: resolve knockout progression sequentially
  const stages = ['roundOf32', 'roundOf16', 'quarterFinals', 'semiFinals', 'thirdPlace', 'final'];
  stages.forEach(stage => {
    if (!newKnockout[stage]) return;
    newKnockout[stage].forEach((koMatch: KnockoutMatch) => {
      koMatch.team1 = resolveKnockout(koMatch.team1);
      koMatch.team2 = resolveKnockout(koMatch.team2);
    });
  });

  return newKnockout;
}
