import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { Response } from '../Interfaces/Request';
import { PlayerData } from '../Interfaces/Players';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private apiUrl = 'https://api-football-v1.p.rapidapi.com/';

  constructor(private http: HttpClient) { }

  obtenerStatsGoleo(): Observable<any> {
    const headers = new HttpHeaders({
      'x-rapidapi-host': 'api-football-v1.p.rapidapi.com',
      'x-rapidapi-key': '9426b229d3msh2145ddb6ba8544ep16d0dcjsn72b357b522cf'
      // 'x-rapidapi-key': 'c088b8541fmshfa41ddf1da664e1p19b8cejsn22b5892d684a'
    });
    return this.http.get<Response>(this.apiUrl + "v3/players/topscorers?league=140&season=2023", { headers })

  }

  obtenerStatsAsist(): Observable<any> {
    const headers = new HttpHeaders({
      'x-rapidapi-host': 'api-football-v1.p.rapidapi.com',
      'x-rapidapi-key': '9426b229d3msh2145ddb6ba8544ep16d0dcjsn72b357b522cf'
      // 'x-rapidapi-key': 'c088b8541fmshfa41ddf1da664e1p19b8cejsn22b5892d684a'
    });
    return this.http.get<Response>(this.apiUrl + "v3/players/topassists?league=140&season=2023", { headers }).pipe(
      map((data) => data.response.map((item: PlayerData) => ({
        name: item.player.name.normalize("NFD").replace(/[\u0300-\u036f]/g, ""),
        y: item.statistics[0].goals.assists,

      })).slice(0, 5))
    );

  }
  obtenerStatsYellow(): Observable<any> {
    const headers = new HttpHeaders({
      'x-rapidapi-host': 'api-football-v1.p.rapidapi.com',
      'x-rapidapi-key': '9426b229d3msh2145ddb6ba8544ep16d0dcjsn72b357b522cf'
      // 'x-rapidapi-key': 'c088b8541fmshfa41ddf1da664e1p19b8cejsn22b5892d684a'
    });
    return this.http.get<Response>(this.apiUrl + "v3/players/topyellowcards?league=140&season=2023", { headers }).pipe(
      map((data) => data.response.map((item: PlayerData) => ({
        nombre: item.player.name.normalize("NFD").replace(/[\u0300-\u036f]/g, ""),
        amarillas: item.statistics[0].cards.yellow,

      })).slice(0, 5))
    );

  }
}
