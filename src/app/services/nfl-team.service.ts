import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { NflTeam } from '../models/nfl-team';

@Injectable({
  providedIn: 'root',
})
export class NflTeamService {
  private url = 'NflTeam';

  constructor(private http: HttpClient) {}

  public getNflTeams(): Observable<NflTeam[]> {
    return this.http.get<NflTeam[]>(`${environment.apiUrl}/${this.url}`);
  }
  public updateTeam(team: NflTeam): Observable<NflTeam[]> {
    return this.http.put<NflTeam[]>(`${environment.apiUrl}/${this.url}`, team);
  }
  public createTeam(team: NflTeam): Observable<NflTeam[]> {
    return this.http.post<NflTeam[]>(`${environment.apiUrl}/${this.url}`, team);
  }
  public deleteTeam(team: NflTeam): Observable<NflTeam[]> {
    return this.http.delete<NflTeam[]>(`${environment.apiUrl}/${this.url}/${team.id}`);
  }
}
