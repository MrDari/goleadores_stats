import { PlayerData } from "./Players";

export interface Response {
  get: string;
  parameters: {
    league: string;
    season: string;
  };
  errors: {
    results: number;
  };
  paging: {
    current: number;
    total: number;
  };
  response: PlayerData[]; // Esto podría ser una interfaz más específica si conoces la estructura de los datos
}
