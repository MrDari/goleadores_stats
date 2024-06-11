export interface Player {
  id: number;
  name: string;
  firstname: string;
  lastname: string;
  age: number;
  birth: {
    date: string;
    place: string;
    country: string;
  };
  nationality: string;
  height: string;
  weight: string;
  injured: boolean;
  photo: string;
}

export interface Statistics {
  team: {
    id: number;
    name: string;
    logo: string;
  };
  league: {
    id: number;
    name: string;
    country: string;
    logo: string;
    flag: string;
    season: number;
  };
  games: {
    appearences: number;
    lineups: number;
    minutes: number;
    number: number | null;
    position: string;
    rating: string;
    captain: boolean;
  };
  substitutes: {
    in: number;
    out: number;
    bench: number;
  };
  shots: {
    total: number;
    on: number;
  };
  goals: {
    total: number;
    conceded: number;
    assists: number;
    saves: number | null;
  };
  passes: {
    total: number;
    key: number;
    accuracy: number;
  };
  tackles: {
    total: number;
    blocks: number;
    interceptions: number | null;
  };
  duels: {
    total: number;
    won: number;
  };
  dribbles: {
    attempts: number;
    success: number;
    past: number | null;
  };
  fouls: {
    drawn: number;
    committed: number;
  };
  cards: {
    yellow: number;
    yellowred: number;
    red: number;
  };
  penalty: {
    won: number | null;
    commited: number | null;
    scored: number;
    missed: number;
    saved: number | null;
  };
}

export interface PlayerData {
  player: Player;
  statistics: Statistics[];
}

export interface PlayerResponse {
  photo?: string;
  name: string;
  lastName?: string;
  team?: string;
  goals?: number;
  yellow?: number;
}
