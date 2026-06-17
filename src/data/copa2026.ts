export type Match = {
  id: string;
  team1: string;
  team2: string;
  score1: number | null;
  score2: number | null;
  date: string;
  time: string;
  location: string;
  status?: string;
  minute?: string | null;
};

export type TeamStats = {
  name: string;
  played: number;
  won: number;
  drawn: number;
  lost: number;
  goalsFor: number;
  goalsAgainst: number;
  points: number;
};

export type Group = {
  name: string;
  teams: TeamStats[];
  matches: Match[];
};

export type KnockoutMatch = {
  id: string;
  team1: string;
  team2: string;
  score1: number | null;
  score2: number | null;
  date: string;
  time: string;
  location: string;
  nextMatchId?: string;
  status?: string;
  minute?: string | null;
};

export const groupsData: Group[] = [
  {
    "name": "Grupo A",
    "teams": [
      {
        "name": "México",
        "played": 0,
        "won": 0,
        "drawn": 0,
        "lost": 0,
        "goalsFor": 0,
        "goalsAgainst": 0,
        "points": 0
      },
      {
        "name": "África do Sul",
        "played": 0,
        "won": 0,
        "drawn": 0,
        "lost": 0,
        "goalsFor": 0,
        "goalsAgainst": 0,
        "points": 0
      },
      {
        "name": "Coreia do Sul",
        "played": 0,
        "won": 0,
        "drawn": 0,
        "lost": 0,
        "goalsFor": 0,
        "goalsAgainst": 0,
        "points": 0
      },
      {
        "name": "Tchéquia",
        "played": 0,
        "won": 0,
        "drawn": 0,
        "lost": 0,
        "goalsFor": 0,
        "goalsAgainst": 0,
        "points": 0
      }
    ],
    "matches": [
      {
        "id": "MA1",
        "team1": "México",
        "team2": "África do Sul",
        "score1": null,
        "score2": null,
        "date": "11/06",
        "time": "16:00",
        "location": "A definir"
      },
      {
        "id": "MA2",
        "team1": "Coreia do Sul",
        "team2": "Tchéquia",
        "score1": null,
        "score2": null,
        "date": "11/06",
        "time": "23:00",
        "location": "A definir"
      },
      {
        "id": "MA3",
        "team1": "Tchéquia",
        "team2": "África do Sul",
        "score1": null,
        "score2": null,
        "date": "18/06",
        "time": "13:00",
        "location": "A definir"
      },
      {
        "id": "MA4",
        "team1": "México",
        "team2": "Coreia do Sul",
        "score1": null,
        "score2": null,
        "date": "18/06",
        "time": "22:00",
        "location": "A definir"
      },
      {
        "id": "MA5",
        "team1": "Tchéquia",
        "team2": "México",
        "score1": null,
        "score2": null,
        "date": "24/06",
        "time": "22:00",
        "location": "A definir"
      },
      {
        "id": "MA6",
        "team1": "África do Sul",
        "team2": "Coreia do Sul",
        "score1": null,
        "score2": null,
        "date": "24/06",
        "time": "22:00",
        "location": "A definir"
      }
    ]
  },
  {
    "name": "Grupo B",
    "teams": [
      {
        "name": "Canadá",
        "played": 0,
        "won": 0,
        "drawn": 0,
        "lost": 0,
        "goalsFor": 0,
        "goalsAgainst": 0,
        "points": 0
      },
      {
        "name": "Bósnia",
        "played": 0,
        "won": 0,
        "drawn": 0,
        "lost": 0,
        "goalsFor": 0,
        "goalsAgainst": 0,
        "points": 0
      },
      {
        "name": "Catar",
        "played": 0,
        "won": 0,
        "drawn": 0,
        "lost": 0,
        "goalsFor": 0,
        "goalsAgainst": 0,
        "points": 0
      },
      {
        "name": "Suíça",
        "played": 0,
        "won": 0,
        "drawn": 0,
        "lost": 0,
        "goalsFor": 0,
        "goalsAgainst": 0,
        "points": 0
      }
    ],
    "matches": [
      {
        "id": "MB1",
        "team1": "Canadá",
        "team2": "Bósnia",
        "score1": null,
        "score2": null,
        "date": "12/06",
        "time": "16:00",
        "location": "A definir"
      },
      {
        "id": "MB2",
        "team1": "Catar",
        "team2": "Suíça",
        "score1": null,
        "score2": null,
        "date": "13/06",
        "time": "16:00",
        "location": "A definir"
      },
      {
        "id": "MB3",
        "team1": "Suíça",
        "team2": "Bósnia",
        "score1": null,
        "score2": null,
        "date": "18/06",
        "time": "16:00",
        "location": "A definir"
      },
      {
        "id": "MB4",
        "team1": "Canadá",
        "team2": "Catar",
        "score1": null,
        "score2": null,
        "date": "18/06",
        "time": "19:00",
        "location": "A definir"
      },
      {
        "id": "MB5",
        "team1": "Suíça",
        "team2": "Canadá",
        "score1": null,
        "score2": null,
        "date": "24/06",
        "time": "16:00",
        "location": "A definir"
      },
      {
        "id": "MB6",
        "team1": "Bósnia",
        "team2": "Catar",
        "score1": null,
        "score2": null,
        "date": "24/06",
        "time": "16:00",
        "location": "A definir"
      }
    ]
  },
  {
    "name": "Grupo C",
    "teams": [
      {
        "name": "Brasil",
        "played": 0,
        "won": 0,
        "drawn": 0,
        "lost": 0,
        "goalsFor": 0,
        "goalsAgainst": 0,
        "points": 0
      },
      {
        "name": "Marrocos",
        "played": 0,
        "won": 0,
        "drawn": 0,
        "lost": 0,
        "goalsFor": 0,
        "goalsAgainst": 0,
        "points": 0
      },
      {
        "name": "Haiti",
        "played": 0,
        "won": 0,
        "drawn": 0,
        "lost": 0,
        "goalsFor": 0,
        "goalsAgainst": 0,
        "points": 0
      },
      {
        "name": "Escócia",
        "played": 0,
        "won": 0,
        "drawn": 0,
        "lost": 0,
        "goalsFor": 0,
        "goalsAgainst": 0,
        "points": 0
      }
    ],
    "matches": [
      {
        "id": "MC1",
        "team1": "Brasil",
        "team2": "Marrocos",
        "score1": null,
        "score2": null,
        "date": "13/06",
        "time": "19:00",
        "location": "A definir"
      },
      {
        "id": "MC2",
        "team1": "Haiti",
        "team2": "Escócia",
        "score1": null,
        "score2": null,
        "date": "13/06",
        "time": "22:00",
        "location": "A definir"
      },
      {
        "id": "MC3",
        "team1": "Escócia",
        "team2": "Marrocos",
        "score1": null,
        "score2": null,
        "date": "19/06",
        "time": "19:00",
        "location": "A definir"
      },
      {
        "id": "MC4",
        "team1": "Brasil",
        "team2": "Haiti",
        "score1": null,
        "score2": null,
        "date": "19/06",
        "time": "21:30",
        "location": "A definir"
      },
      {
        "id": "MC5",
        "team1": "Escócia",
        "team2": "Brasil",
        "score1": null,
        "score2": null,
        "date": "24/06",
        "time": "19:00",
        "location": "A definir"
      },
      {
        "id": "MC6",
        "team1": "Marrocos",
        "team2": "Haiti",
        "score1": null,
        "score2": null,
        "date": "24/06",
        "time": "19:00",
        "location": "A definir"
      }
    ]
  },
  {
    "name": "Grupo D",
    "teams": [
      {
        "name": "Estados Unidos",
        "played": 0,
        "won": 0,
        "drawn": 0,
        "lost": 0,
        "goalsFor": 0,
        "goalsAgainst": 0,
        "points": 0
      },
      {
        "name": "Paraguai",
        "played": 0,
        "won": 0,
        "drawn": 0,
        "lost": 0,
        "goalsFor": 0,
        "goalsAgainst": 0,
        "points": 0
      },
      {
        "name": "Austrália",
        "played": 0,
        "won": 0,
        "drawn": 0,
        "lost": 0,
        "goalsFor": 0,
        "goalsAgainst": 0,
        "points": 0
      },
      {
        "name": "Turquia",
        "played": 0,
        "won": 0,
        "drawn": 0,
        "lost": 0,
        "goalsFor": 0,
        "goalsAgainst": 0,
        "points": 0
      }
    ],
    "matches": [
      {
        "id": "MD1",
        "team1": "Estados Unidos",
        "team2": "Paraguai",
        "score1": null,
        "score2": null,
        "date": "12/06",
        "time": "22:00",
        "location": "A definir"
      },
      {
        "id": "MD2",
        "team1": "Austrália",
        "team2": "Turquia",
        "score1": null,
        "score2": null,
        "date": "14/06",
        "time": "01:00",
        "location": "A definir"
      },
      {
        "id": "MD3",
        "team1": "Estados Unidos",
        "team2": "Austrália",
        "score1": null,
        "score2": null,
        "date": "19/06",
        "time": "16:00",
        "location": "A definir"
      },
      {
        "id": "MD4",
        "team1": "Turquia",
        "team2": "Paraguai",
        "score1": null,
        "score2": null,
        "date": "20/06",
        "time": "00:00",
        "location": "A definir"
      },
      {
        "id": "MD5",
        "team1": "Turquia",
        "team2": "Estados Unidos",
        "score1": null,
        "score2": null,
        "date": "25/06",
        "time": "23:00",
        "location": "A definir"
      },
      {
        "id": "MD6",
        "team1": "Paraguai",
        "team2": "Austrália",
        "score1": null,
        "score2": null,
        "date": "25/06",
        "time": "23:00",
        "location": "A definir"
      }
    ]
  },
  {
    "name": "Grupo E",
    "teams": [
      {
        "name": "Alemanha",
        "played": 0,
        "won": 0,
        "drawn": 0,
        "lost": 0,
        "goalsFor": 0,
        "goalsAgainst": 0,
        "points": 0
      },
      {
        "name": "Curaçao",
        "played": 0,
        "won": 0,
        "drawn": 0,
        "lost": 0,
        "goalsFor": 0,
        "goalsAgainst": 0,
        "points": 0
      },
      {
        "name": "Costa do Marfim",
        "played": 0,
        "won": 0,
        "drawn": 0,
        "lost": 0,
        "goalsFor": 0,
        "goalsAgainst": 0,
        "points": 0
      },
      {
        "name": "Equador",
        "played": 0,
        "won": 0,
        "drawn": 0,
        "lost": 0,
        "goalsFor": 0,
        "goalsAgainst": 0,
        "points": 0
      }
    ],
    "matches": [
      {
        "id": "ME1",
        "team1": "Alemanha",
        "team2": "Curaçao",
        "score1": null,
        "score2": null,
        "date": "14/06",
        "time": "14:00",
        "location": "A definir"
      },
      {
        "id": "ME2",
        "team1": "Costa do Marfim",
        "team2": "Equador",
        "score1": null,
        "score2": null,
        "date": "14/06",
        "time": "20:00",
        "location": "A definir"
      },
      {
        "id": "ME3",
        "team1": "Alemanha",
        "team2": "Costa do Marfim",
        "score1": null,
        "score2": null,
        "date": "20/06",
        "time": "17:00",
        "location": "A definir"
      },
      {
        "id": "ME4",
        "team1": "Equador",
        "team2": "Curaçao",
        "score1": null,
        "score2": null,
        "date": "20/06",
        "time": "21:00",
        "location": "A definir"
      },
      {
        "id": "ME5",
        "team1": "Equador",
        "team2": "Alemanha",
        "score1": null,
        "score2": null,
        "date": "25/06",
        "time": "17:00",
        "location": "A definir"
      },
      {
        "id": "ME6",
        "team1": "Curaçao",
        "team2": "Costa do Marfim",
        "score1": null,
        "score2": null,
        "date": "25/06",
        "time": "17:00",
        "location": "A definir"
      }
    ]
  },
  {
    "name": "Grupo F",
    "teams": [
      {
        "name": "Países Baixos",
        "played": 0,
        "won": 0,
        "drawn": 0,
        "lost": 0,
        "goalsFor": 0,
        "goalsAgainst": 0,
        "points": 0
      },
      {
        "name": "Japão",
        "played": 0,
        "won": 0,
        "drawn": 0,
        "lost": 0,
        "goalsFor": 0,
        "goalsAgainst": 0,
        "points": 0
      },
      {
        "name": "Suécia",
        "played": 0,
        "won": 0,
        "drawn": 0,
        "lost": 0,
        "goalsFor": 0,
        "goalsAgainst": 0,
        "points": 0
      },
      {
        "name": "Tunísia",
        "played": 0,
        "won": 0,
        "drawn": 0,
        "lost": 0,
        "goalsFor": 0,
        "goalsAgainst": 0,
        "points": 0
      }
    ],
    "matches": [
      {
        "id": "MF1",
        "team1": "Países Baixos",
        "team2": "Japão",
        "score1": null,
        "score2": null,
        "date": "14/06",
        "time": "17:00",
        "location": "A definir"
      },
      {
        "id": "MF2",
        "team1": "Suécia",
        "team2": "Tunísia",
        "score1": null,
        "score2": null,
        "date": "14/06",
        "time": "23:00",
        "location": "A definir"
      },
      {
        "id": "MF3",
        "team1": "Países Baixos",
        "team2": "Suécia",
        "score1": null,
        "score2": null,
        "date": "20/06",
        "time": "14:00",
        "location": "A definir"
      },
      {
        "id": "MF4",
        "team1": "Tunísia",
        "team2": "Japão",
        "score1": null,
        "score2": null,
        "date": "21/06",
        "time": "01:00",
        "location": "A definir"
      },
      {
        "id": "MF5",
        "team1": "Japão",
        "team2": "Suécia",
        "score1": null,
        "score2": null,
        "date": "25/06",
        "time": "20:00",
        "location": "A definir"
      },
      {
        "id": "MF6",
        "team1": "Tunísia",
        "team2": "Países Baixos",
        "score1": null,
        "score2": null,
        "date": "25/06",
        "time": "20:00",
        "location": "A definir"
      }
    ]
  },
  {
    "name": "Grupo G",
    "teams": [
      {
        "name": "Bélgica",
        "played": 0,
        "won": 0,
        "drawn": 0,
        "lost": 0,
        "goalsFor": 0,
        "goalsAgainst": 0,
        "points": 0
      },
      {
        "name": "Egito",
        "played": 0,
        "won": 0,
        "drawn": 0,
        "lost": 0,
        "goalsFor": 0,
        "goalsAgainst": 0,
        "points": 0
      },
      {
        "name": "Irã",
        "played": 0,
        "won": 0,
        "drawn": 0,
        "lost": 0,
        "goalsFor": 0,
        "goalsAgainst": 0,
        "points": 0
      },
      {
        "name": "Nova Zelândia",
        "played": 0,
        "won": 0,
        "drawn": 0,
        "lost": 0,
        "goalsFor": 0,
        "goalsAgainst": 0,
        "points": 0
      }
    ],
    "matches": [
      {
        "id": "MG1",
        "team1": "Bélgica",
        "team2": "Egito",
        "score1": null,
        "score2": null,
        "date": "15/06",
        "time": "16:00",
        "location": "A definir"
      },
      {
        "id": "MG2",
        "team1": "Irã",
        "team2": "Nova Zelândia",
        "score1": null,
        "score2": null,
        "date": "15/06",
        "time": "22:00",
        "location": "A definir"
      },
      {
        "id": "MG3",
        "team1": "Bélgica",
        "team2": "Irã",
        "score1": null,
        "score2": null,
        "date": "21/06",
        "time": "16:00",
        "location": "A definir"
      },
      {
        "id": "MG4",
        "team1": "Nova Zelândia",
        "team2": "Egito",
        "score1": null,
        "score2": null,
        "date": "21/06",
        "time": "22:00",
        "location": "A definir"
      },
      {
        "id": "MG5",
        "team1": "Egito",
        "team2": "Irã",
        "score1": null,
        "score2": null,
        "date": "27/06",
        "time": "00:00",
        "location": "A definir"
      },
      {
        "id": "MG6",
        "team1": "Nova Zelândia",
        "team2": "Bélgica",
        "score1": null,
        "score2": null,
        "date": "27/06",
        "time": "00:00",
        "location": "A definir"
      }
    ]
  },
  {
    "name": "Grupo H",
    "teams": [
      {
        "name": "Espanha",
        "played": 0,
        "won": 0,
        "drawn": 0,
        "lost": 0,
        "goalsFor": 0,
        "goalsAgainst": 0,
        "points": 0
      },
      {
        "name": "Cabo Verde",
        "played": 0,
        "won": 0,
        "drawn": 0,
        "lost": 0,
        "goalsFor": 0,
        "goalsAgainst": 0,
        "points": 0
      },
      {
        "name": "Arábia Saudita",
        "played": 0,
        "won": 0,
        "drawn": 0,
        "lost": 0,
        "goalsFor": 0,
        "goalsAgainst": 0,
        "points": 0
      },
      {
        "name": "Uruguai",
        "played": 0,
        "won": 0,
        "drawn": 0,
        "lost": 0,
        "goalsFor": 0,
        "goalsAgainst": 0,
        "points": 0
      }
    ],
    "matches": [
      {
        "id": "MH1",
        "team1": "Espanha",
        "team2": "Cabo Verde",
        "score1": null,
        "score2": null,
        "date": "15/06",
        "time": "13:00",
        "location": "A definir"
      },
      {
        "id": "MH2",
        "team1": "Arábia Saudita",
        "team2": "Uruguai",
        "score1": null,
        "score2": null,
        "date": "15/06",
        "time": "19:00",
        "location": "A definir"
      },
      {
        "id": "MH3",
        "team1": "Espanha",
        "team2": "Arábia Saudita",
        "score1": null,
        "score2": null,
        "date": "21/06",
        "time": "13:00",
        "location": "A definir"
      },
      {
        "id": "MH4",
        "team1": "Uruguai",
        "team2": "Cabo Verde",
        "score1": null,
        "score2": null,
        "date": "21/06",
        "time": "19:00",
        "location": "A definir"
      },
      {
        "id": "MH5",
        "team1": "Cabo Verde",
        "team2": "Arábia Saudita",
        "score1": null,
        "score2": null,
        "date": "26/06",
        "time": "21:00",
        "location": "A definir"
      },
      {
        "id": "MH6",
        "team1": "Uruguai",
        "team2": "Espanha",
        "score1": null,
        "score2": null,
        "date": "26/06",
        "time": "21:00",
        "location": "A definir"
      }
    ]
  },
  {
    "name": "Grupo I",
    "teams": [
      {
        "name": "França",
        "played": 0,
        "won": 0,
        "drawn": 0,
        "lost": 0,
        "goalsFor": 0,
        "goalsAgainst": 0,
        "points": 0
      },
      {
        "name": "Senegal",
        "played": 0,
        "won": 0,
        "drawn": 0,
        "lost": 0,
        "goalsFor": 0,
        "goalsAgainst": 0,
        "points": 0
      },
      {
        "name": "Iraque",
        "played": 0,
        "won": 0,
        "drawn": 0,
        "lost": 0,
        "goalsFor": 0,
        "goalsAgainst": 0,
        "points": 0
      },
      {
        "name": "Noruega",
        "played": 0,
        "won": 0,
        "drawn": 0,
        "lost": 0,
        "goalsFor": 0,
        "goalsAgainst": 0,
        "points": 0
      }
    ],
    "matches": [
      {
        "id": "MI1",
        "team1": "França",
        "team2": "Senegal",
        "score1": null,
        "score2": null,
        "date": "16/06",
        "time": "16:00",
        "location": "A definir"
      },
      {
        "id": "MI2",
        "team1": "Iraque",
        "team2": "Noruega",
        "score1": null,
        "score2": null,
        "date": "16/06",
        "time": "19:00",
        "location": "A definir"
      },
      {
        "id": "MI3",
        "team1": "França",
        "team2": "Iraque",
        "score1": null,
        "score2": null,
        "date": "22/06",
        "time": "18:00",
        "location": "A definir"
      },
      {
        "id": "MI4",
        "team1": "Noruega",
        "team2": "Senegal",
        "score1": null,
        "score2": null,
        "date": "22/06",
        "time": "21:00",
        "location": "A definir"
      },
      {
        "id": "MI5",
        "team1": "Noruega",
        "team2": "França",
        "score1": null,
        "score2": null,
        "date": "26/06",
        "time": "16:00",
        "location": "A definir"
      },
      {
        "id": "MI6",
        "team1": "Senegal",
        "team2": "Iraque",
        "score1": null,
        "score2": null,
        "date": "26/06",
        "time": "16:00",
        "location": "A definir"
      }
    ]
  },
  {
    "name": "Grupo J",
    "teams": [
      {
        "name": "Argentina",
        "played": 0,
        "won": 0,
        "drawn": 0,
        "lost": 0,
        "goalsFor": 0,
        "goalsAgainst": 0,
        "points": 0
      },
      {
        "name": "Argélia",
        "played": 0,
        "won": 0,
        "drawn": 0,
        "lost": 0,
        "goalsFor": 0,
        "goalsAgainst": 0,
        "points": 0
      },
      {
        "name": "Áustria",
        "played": 0,
        "won": 0,
        "drawn": 0,
        "lost": 0,
        "goalsFor": 0,
        "goalsAgainst": 0,
        "points": 0
      },
      {
        "name": "Jordânia",
        "played": 0,
        "won": 0,
        "drawn": 0,
        "lost": 0,
        "goalsFor": 0,
        "goalsAgainst": 0,
        "points": 0
      }
    ],
    "matches": [
      {
        "id": "MJ1",
        "team1": "Argentina",
        "team2": "Argélia",
        "score1": null,
        "score2": null,
        "date": "16/06",
        "time": "22:00",
        "location": "A definir"
      },
      {
        "id": "MJ2",
        "team1": "Áustria",
        "team2": "Jordânia",
        "score1": null,
        "score2": null,
        "date": "17/06",
        "time": "01:00",
        "location": "A definir"
      },
      {
        "id": "MJ3",
        "team1": "Argentina",
        "team2": "Áustria",
        "score1": null,
        "score2": null,
        "date": "22/06",
        "time": "14:00",
        "location": "A definir"
      },
      {
        "id": "MJ4",
        "team1": "Jordânia",
        "team2": "Argélia",
        "score1": null,
        "score2": null,
        "date": "23/06",
        "time": "00:00",
        "location": "A definir"
      },
      {
        "id": "MJ5",
        "team1": "Argélia",
        "team2": "Áustria",
        "score1": null,
        "score2": null,
        "date": "27/06",
        "time": "23:00",
        "location": "A definir"
      },
      {
        "id": "MJ6",
        "team1": "Jordânia",
        "team2": "Argentina",
        "score1": null,
        "score2": null,
        "date": "27/06",
        "time": "23:00",
        "location": "A definir"
      }
    ]
  },
  {
    "name": "Grupo K",
    "teams": [
      {
        "name": "Portugal",
        "played": 0,
        "won": 0,
        "drawn": 0,
        "lost": 0,
        "goalsFor": 0,
        "goalsAgainst": 0,
        "points": 0
      },
      {
        "name": "Congo (RD)",
        "played": 0,
        "won": 0,
        "drawn": 0,
        "lost": 0,
        "goalsFor": 0,
        "goalsAgainst": 0,
        "points": 0
      },
      {
        "name": "Uzbequistão",
        "played": 0,
        "won": 0,
        "drawn": 0,
        "lost": 0,
        "goalsFor": 0,
        "goalsAgainst": 0,
        "points": 0
      },
      {
        "name": "Colômbia",
        "played": 0,
        "won": 0,
        "drawn": 0,
        "lost": 0,
        "goalsFor": 0,
        "goalsAgainst": 0,
        "points": 0
      }
    ],
    "matches": [
      {
        "id": "MK1",
        "team1": "Portugal",
        "team2": "Congo (RD)",
        "score1": null,
        "score2": null,
        "date": "17/06",
        "time": "14:00",
        "location": "A definir"
      },
      {
        "id": "MK2",
        "team1": "Uzbequistão",
        "team2": "Colômbia",
        "score1": null,
        "score2": null,
        "date": "17/06",
        "time": "23:00",
        "location": "A definir"
      },
      {
        "id": "MK3",
        "team1": "Portugal",
        "team2": "Uzbequistão",
        "score1": null,
        "score2": null,
        "date": "23/06",
        "time": "14:00",
        "location": "A definir"
      },
      {
        "id": "MK4",
        "team1": "Colômbia",
        "team2": "Congo (RD)",
        "score1": null,
        "score2": null,
        "date": "23/06",
        "time": "23:00",
        "location": "A definir"
      },
      {
        "id": "MK5",
        "team1": "Colômbia",
        "team2": "Portugal",
        "score1": null,
        "score2": null,
        "date": "27/06",
        "time": "20:30",
        "location": "A definir"
      },
      {
        "id": "MK6",
        "team1": "Congo (RD)",
        "team2": "Uzbequistão",
        "score1": null,
        "score2": null,
        "date": "27/06",
        "time": "20:30",
        "location": "A definir"
      }
    ]
  },
  {
    "name": "Grupo L",
    "teams": [
      {
        "name": "Inglaterra",
        "played": 0,
        "won": 0,
        "drawn": 0,
        "lost": 0,
        "goalsFor": 0,
        "goalsAgainst": 0,
        "points": 0
      },
      {
        "name": "Croácia",
        "played": 0,
        "won": 0,
        "drawn": 0,
        "lost": 0,
        "goalsFor": 0,
        "goalsAgainst": 0,
        "points": 0
      },
      {
        "name": "Gana",
        "played": 0,
        "won": 0,
        "drawn": 0,
        "lost": 0,
        "goalsFor": 0,
        "goalsAgainst": 0,
        "points": 0
      },
      {
        "name": "Panamá",
        "played": 0,
        "won": 0,
        "drawn": 0,
        "lost": 0,
        "goalsFor": 0,
        "goalsAgainst": 0,
        "points": 0
      }
    ],
    "matches": [
      {
        "id": "ML1",
        "team1": "Inglaterra",
        "team2": "Croácia",
        "score1": null,
        "score2": null,
        "date": "17/06",
        "time": "17:00",
        "location": "A definir"
      },
      {
        "id": "ML2",
        "team1": "Gana",
        "team2": "Panamá",
        "score1": null,
        "score2": null,
        "date": "17/06",
        "time": "20:00",
        "location": "A definir"
      },
      {
        "id": "ML3",
        "team1": "Inglaterra",
        "team2": "Gana",
        "score1": null,
        "score2": null,
        "date": "23/06",
        "time": "17:00",
        "location": "A definir"
      },
      {
        "id": "ML4",
        "team1": "Panamá",
        "team2": "Croácia",
        "score1": null,
        "score2": null,
        "date": "23/06",
        "time": "20:00",
        "location": "A definir"
      },
      {
        "id": "ML5",
        "team1": "Panamá",
        "team2": "Inglaterra",
        "score1": null,
        "score2": null,
        "date": "27/06",
        "time": "18:00",
        "location": "A definir"
      },
      {
        "id": "ML6",
        "team1": "Croácia",
        "team2": "Gana",
        "score1": null,
        "score2": null,
        "date": "27/06",
        "time": "18:00",
        "location": "A definir"
      }
    ]
  }
];

export const knockoutData: Record<string, KnockoutMatch[]> = {
  "roundOf32": [
    {
      "id": "J1",
      "date": "29/06",
      "time": "17:30",
      "team1": "1º E",
      "team2": "3º ABCD",
      "score1": null,
      "score2": null,
      "location": "A definir"
    },
    {
      "id": "J2",
      "date": "30/06",
      "time": "18:00",
      "team1": "1º I",
      "team2": "3º CDFGH",
      "score1": null,
      "score2": null,
      "location": "A definir"
    },
    {
      "id": "J3",
      "date": "28/06",
      "time": "16:00",
      "team1": "2º A",
      "team2": "2º B",
      "score1": null,
      "score2": null,
      "location": "A definir"
    },
    {
      "id": "J4",
      "date": "29/06",
      "time": "22:00",
      "team1": "1º F",
      "team2": "2º C",
      "score1": null,
      "score2": null,
      "location": "A definir"
    },
    {
      "id": "J5",
      "date": "02/07",
      "time": "20:00",
      "team1": "2º K",
      "team2": "2º L",
      "score1": null,
      "score2": null,
      "location": "A definir"
    },
    {
      "id": "J6",
      "date": "02/07",
      "time": "16:00",
      "team1": "1º H",
      "team2": "2º J",
      "score1": null,
      "score2": null,
      "location": "A definir"
    },
    {
      "id": "J7",
      "date": "01/07",
      "time": "21:00",
      "team1": "1º D",
      "team2": "3º BEFIJ",
      "score1": null,
      "score2": null,
      "location": "A definir"
    },
    {
      "id": "J8",
      "date": "01/07",
      "time": "17:00",
      "team1": "1º G",
      "team2": "3º AEHIJ",
      "score1": null,
      "score2": null,
      "location": "A definir"
    },
    {
      "id": "J9",
      "date": "29/06",
      "time": "14:00",
      "team1": "1º C",
      "team2": "2º F",
      "score1": null,
      "score2": null,
      "location": "A definir"
    },
    {
      "id": "J10",
      "date": "30/06",
      "time": "14:00",
      "team1": "2º E",
      "team2": "2º I",
      "score1": null,
      "score2": null,
      "location": "A definir"
    },
    {
      "id": "J11",
      "date": "30/06",
      "time": "22:00",
      "team1": "1º A",
      "team2": "3º CEFHI",
      "score1": null,
      "score2": null,
      "location": "A definir"
    },
    {
      "id": "J12",
      "date": "01/07",
      "time": "13:00",
      "team1": "1º L",
      "team2": "3º EHIJK",
      "score1": null,
      "score2": null,
      "location": "A definir"
    },
    {
      "id": "J13",
      "date": "03/07",
      "time": "19:00",
      "team1": "1º J",
      "team2": "2º H",
      "score1": null,
      "score2": null,
      "location": "A definir"
    },
    {
      "id": "J14",
      "date": "03/07",
      "time": "15:00",
      "team1": "2º D",
      "team2": "2º G",
      "score1": null,
      "score2": null,
      "location": "A definir"
    },
    {
      "id": "J15",
      "date": "03/07",
      "time": "00:00",
      "team1": "1º B",
      "team2": "3º EFGIJ",
      "score1": null,
      "score2": null,
      "location": "A definir"
    },
    {
      "id": "J16",
      "date": "03/07",
      "time": "22:30",
      "team1": "1º K",
      "team2": "3º DEIJL",
      "score1": null,
      "score2": null,
      "location": "A definir"
    }
  ],
  "roundOf16": [
    {
      "id": "O1",
      "date": "04/07",
      "time": "18:00",
      "team1": "Venc. J1",
      "team2": "Venc. J2",
      "score1": null,
      "score2": null,
      "location": "A definir"
    },
    {
      "id": "O2",
      "date": "04/07",
      "time": "14:00",
      "team1": "Venc. J3",
      "team2": "Venc. J4",
      "score1": null,
      "score2": null,
      "location": "A definir"
    },
    {
      "id": "O3",
      "date": "06/07",
      "time": "16:00",
      "team1": "Venc. J5",
      "team2": "Venc. J6",
      "score1": null,
      "score2": null,
      "location": "A definir"
    },
    {
      "id": "O4",
      "date": "06/07",
      "time": "21:00",
      "team1": "Venc. J7",
      "team2": "Venc. J8",
      "score1": null,
      "score2": null,
      "location": "A definir"
    },
    {
      "id": "O5",
      "date": "05/07",
      "time": "17:00",
      "team1": "Venc. J9",
      "team2": "Venc. J10",
      "score1": null,
      "score2": null,
      "location": "A definir"
    },
    {
      "id": "O6",
      "date": "05/07",
      "time": "21:00",
      "team1": "Venc. J11",
      "team2": "Venc. J12",
      "score1": null,
      "score2": null,
      "location": "A definir"
    },
    {
      "id": "O7",
      "date": "07/07",
      "time": "13:00",
      "team1": "Venc. J13",
      "team2": "Venc. J14",
      "score1": null,
      "score2": null,
      "location": "A definir"
    },
    {
      "id": "O8",
      "date": "07/07",
      "time": "17:00",
      "team1": "Venc. J15",
      "team2": "Venc. J16",
      "score1": null,
      "score2": null,
      "location": "A definir"
    }
  ],
  "quarterFinals": [
    {
      "id": "Q1",
      "date": "09/07",
      "time": "17:00",
      "team1": "Venc. O1",
      "team2": "Venc. O2",
      "score1": null,
      "score2": null,
      "location": "A definir"
    },
    {
      "id": "Q2",
      "date": "10/07",
      "time": "16:00",
      "team1": "Venc. O3",
      "team2": "Venc. O4",
      "score1": null,
      "score2": null,
      "location": "A definir"
    },
    {
      "id": "Q3",
      "date": "11/07",
      "time": "18:00",
      "team1": "Venc. O5",
      "team2": "Venc. O6",
      "score1": null,
      "score2": null,
      "location": "A definir"
    },
    {
      "id": "Q4",
      "date": "11/07",
      "time": "21:00",
      "team1": "Venc. O7",
      "team2": "Venc. O8",
      "score1": null,
      "score2": null,
      "location": "A definir"
    }
  ],
  "semiFinals": [
    {
      "id": "S1",
      "date": "14/07",
      "time": "16:00",
      "team1": "Venc. Q1",
      "team2": "Venc. Q2",
      "score1": null,
      "score2": null,
      "location": "Dallas"
    },
    {
      "id": "S2",
      "date": "15/07",
      "time": "16:00",
      "team1": "Venc. Q3",
      "team2": "Venc. Q4",
      "score1": null,
      "score2": null,
      "location": "Atlanta"
    }
  ],
  "thirdPlace": [
    {
      "id": "T3",
      "date": "18/07",
      "time": "17:00",
      "team1": "Perdedor S1",
      "team2": "Perdedor S2",
      "score1": null,
      "score2": null,
      "location": "Miami"
    }
  ],
  "final": [
    {
      "id": "FINAL",
      "date": "19/07",
      "time": "16:00",
      "team1": "Venc. S1",
      "team2": "Venc. S2",
      "score1": null,
      "score2": null,
      "location": "MetLife Stadium, NJ"
    }
  ]
};
