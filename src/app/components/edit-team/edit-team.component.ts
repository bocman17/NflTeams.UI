import { NflTeamService } from './../../services/nfl-team.service';
import { NflTeam } from './../../models/nfl-team';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-edit-team',
  templateUrl: './edit-team.component.html',
  styleUrls: ['./edit-team.component.css'],
})
export class EditTeamComponent implements OnInit {
  @Input() team?: NflTeam;
  @Output() teamsUpdated = new EventEmitter<NflTeam[]>();

  constructor(private nflTeamService: NflTeamService) {}

  ngOnInit(): void {}

  updateTeam(team: NflTeam) {
    this.nflTeamService
      .updateTeam(team)
      .subscribe((teams: NflTeam[]) => this.teamsUpdated.emit(teams));
  }

  deleteTeam(team: NflTeam) {
    this.nflTeamService
      .deleteTeam(team)
      .subscribe((teams: NflTeam[]) => this.teamsUpdated.emit(teams));
  }

  createTeam(team: NflTeam) {
    this.nflTeamService
      .createTeam(team)
      .subscribe((teams: NflTeam[]) => this.teamsUpdated.emit(teams));
  }
}
