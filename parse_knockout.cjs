const fs = require('fs');

const knockoutData = {
  roundOf32: [
    { id: "J1", date: "29/06", time: "17:30", team1: "1º E", team2: "3º ABCD", score1: null, score2: null, location: "A definir" },
    { id: "J2", date: "30/06", time: "18:00", team1: "1º I", team2: "3º CDFGH", score1: null, score2: null, location: "A definir" },
    { id: "J3", date: "28/06", time: "16:00", team1: "2º A", team2: "2º B", score1: null, score2: null, location: "A definir" },
    { id: "J4", date: "29/06", time: "22:00", team1: "1º F", team2: "2º C", score1: null, score2: null, location: "A definir" },
    { id: "J5", date: "02/07", time: "20:00", team1: "2º K", team2: "2º L", score1: null, score2: null, location: "A definir" },
    { id: "J6", date: "02/07", time: "16:00", team1: "1º H", team2: "2º J", score1: null, score2: null, location: "A definir" },
    { id: "J7", date: "01/07", time: "21:00", team1: "1º D", team2: "3º BEFIJ", score1: null, score2: null, location: "A definir" },
    { id: "J8", date: "01/07", time: "17:00", team1: "1º G", team2: "3º AEHIJ", score1: null, score2: null, location: "A definir" },
    { id: "J9", date: "29/06", time: "14:00", team1: "1º C", team2: "2º F", score1: null, score2: null, location: "A definir" },
    { id: "J10", date: "30/06", time: "14:00", team1: "2º E", team2: "2º I", score1: null, score2: null, location: "A definir" },
    { id: "J11", date: "30/06", time: "22:00", team1: "1º A", team2: "3º CEFHI", score1: null, score2: null, location: "A definir" },
    { id: "J12", date: "01/07", time: "13:00", team1: "1º L", team2: "3º EHIJK", score1: null, score2: null, location: "A definir" },
    { id: "J13", date: "03/07", time: "19:00", team1: "1º J", team2: "2º H", score1: null, score2: null, location: "A definir" },
    { id: "J14", date: "03/07", time: "15:00", team1: "2º D", team2: "2º G", score1: null, score2: null, location: "A definir" },
    { id: "J15", date: "03/07", time: "00:00", team1: "1º B", team2: "3º EFGIJ", score1: null, score2: null, location: "A definir" },
    { id: "J16", date: "03/07", time: "22:30", team1: "1º K", team2: "3º DEIJL", score1: null, score2: null, location: "A definir" }
  ],
  roundOf16: [
    { id: "O1", date: "04/07", time: "18:00", team1: "Venc. J1", team2: "Venc. J2", score1: null, score2: null, location: "A definir" },
    { id: "O2", date: "04/07", time: "14:00", team1: "Venc. J3", team2: "Venc. J4", score1: null, score2: null, location: "A definir" },
    { id: "O3", date: "06/07", time: "16:00", team1: "Venc. J5", team2: "Venc. J6", score1: null, score2: null, location: "A definir" },
    { id: "O4", date: "06/07", time: "21:00", team1: "Venc. J7", team2: "Venc. J8", score1: null, score2: null, location: "A definir" },
    { id: "O5", date: "05/07", time: "17:00", team1: "Venc. J9", team2: "Venc. J10", score1: null, score2: null, location: "A definir" },
    { id: "O6", date: "05/07", time: "21:00", team1: "Venc. J11", team2: "Venc. J12", score1: null, score2: null, location: "A definir" },
    { id: "O7", date: "07/07", time: "13:00", team1: "Venc. J13", team2: "Venc. J14", score1: null, score2: null, location: "A definir" },
    { id: "O8", date: "07/07", time: "17:00", team1: "Venc. J15", team2: "Venc. J16", score1: null, score2: null, location: "A definir" }
  ],
  quarterFinals: [
    { id: "Q1", date: "09/07", time: "17:00", team1: "Venc. O1", team2: "Venc. O2", score1: null, score2: null, location: "A definir" },
    { id: "Q2", date: "10/07", time: "16:00", team1: "Venc. O3", team2: "Venc. O4", score1: null, score2: null, location: "A definir" },
    { id: "Q3", date: "11/07", time: "18:00", team1: "Venc. O5", team2: "Venc. O6", score1: null, score2: null, location: "A definir" },
    { id: "Q4", date: "11/07", time: "21:00", team1: "Venc. O7", team2: "Venc. O8", score1: null, score2: null, location: "A definir" }
  ],
  semiFinals: [
    { id: "S1", date: "14/07", time: "16:00", team1: "Venc. Q1", team2: "Venc. Q2", score1: null, score2: null, location: "Dallas" },
    { id: "S2", date: "15/07", time: "16:00", team1: "Venc. Q3", team2: "Venc. Q4", score1: null, score2: null, location: "Atlanta" }
  ],
  thirdPlace: [
    { id: "T3", date: "18/07", time: "17:00", team1: "Perdedor S1", team2: "Perdedor S2", score1: null, score2: null, location: "Miami" }
  ],
  final: [
    { id: "FINAL", date: "19/07", time: "16:00", team1: "Venc. S1", team2: "Venc. S2", score1: null, score2: null, location: "MetLife Stadium, NJ" }
  ]
};

const content = fs.readFileSync('src/data/copa2026.ts', 'utf8');
const lines = content.split('\n');

// Find the export const knockoutData line
let startIndex = -1;
for (let i = 0; i < lines.length; i++) {
  if (lines[i].includes('export const knockoutData: Record<string, KnockoutMatch[]>')) {
    startIndex = i;
    break;
  }
}

const beforeKnockout = lines.slice(0, startIndex).join('\n');
const newKnockout = `export const knockoutData: Record<string, KnockoutMatch[]> = ${JSON.stringify(knockoutData, null, 2).replace(/"null"/g, "null")};\n`;

fs.writeFileSync('src/data/copa2026.ts', beforeKnockout + '\n' + newKnockout);
console.log('SUCCESS');
