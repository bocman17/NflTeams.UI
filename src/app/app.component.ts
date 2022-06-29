import { NflTeamService } from './services/nfl-team.service';
import { NflTeam } from './models/nfl-team';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'NflTeams.UI';

  teams: NflTeam[] = [];
  teamToEdit?: NflTeam;

  constructor(private nflTeamService: NflTeamService) {}

  ngOnInit(): void {
    this.nflTeamService
      .getNflTeams()
      .subscribe((result: NflTeam[]) => (this.teams = result));
  }

  updateTeamList(teams: NflTeam[]) {
    this.teams = teams;
  }

  initNewTeam() {
    this.teamToEdit = new NflTeam();
  }

  editTeam(team: NflTeam) {
    this.teamToEdit = team;
  }
}
