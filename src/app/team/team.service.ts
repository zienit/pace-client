import { Team } from './team.model';
import { Observable, forkJoin, of } from 'rxjs';
import { map, flatMap, delay } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { DriverService } from '../driver/driver.service';

type TeamData = { id: string, name: string, image: string, country: string };

@Injectable()
export class TeamService {

    constructor(private readonly driverService: DriverService) {
    }

    private readonly teams: TeamData[] = [
        { id: '6c445b98', name: 'Mercedes', image: 'https://www.formula1.com/content/fom-website/en/teams/Mercedes/_jcr_content/logo.img.jpg/1486740144183.jpg', country: 'deu' },
        { id: '6e23e4fa', name: 'Ferrari', image: 'https://www.formula1.com/content/fom-website/en/teams/Ferrari/_jcr_content/logo.img.jpg/1521797345005.jpg', country: 'ita' },
        { id: '63c25685', name: 'Red Bull Racing', image: 'https://www.formula1.com/content/fom-website/en/teams/Red-Bull/_jcr_content/logo.img.jpg/1514762875081.jpg', country: 'aut' },
        { id: '0726a832', name: 'McLaren', image: 'https://www.formula1.com/content/fom-website/en/teams/McLaren/_jcr_content/logo.img.jpg/1515152671364.jpg', country: 'gbr' },
        { id: '2c813876', name: 'Renault', image: 'https://www.formula1.com/content/fom-website/en/teams/Renault/_jcr_content/logo.img.jpg/1546853275141.jpg', country: 'fra' },
        { id: '9cfc36a9', name: 'Toro Rosso', image: 'https://www.formula1.com/content/fom-website/en/teams/Toro-Rosso/_jcr_content/logo.img.jpg/1521797337296.jpg', country: 'ita' },
        { id: '48543e1f', name: 'Racing Point', image: 'https://www.formula1.com/content/fom-website/en/teams/Racing-Point/_jcr_content/logo.img.jpg/1552473335851.jpg', country: 'gbr' },
        { id: 'aff375c9', name: 'Alfa Romeo Racing', image: 'https://www.formula1.com/content/fom-website/en/teams/Alfa-Romeo/_jcr_content/logo.img.png/1549450808736.png', country: 'che' },
        { id: '37b10128', name: 'Haas', image: 'https://www.formula1.com/content/fom-website/en/teams/Haas/_jcr_content/logo.img.jpg/1568040248402.jpg', country: 'usa' },
        { id: 'a9489bb1', name: 'Williams', image: 'https://www.formula1.com/content/fom-website/en/teams/Williams/_jcr_content/logo.img.png/1551261665481.png', country: 'gbr' },
    ];

    getTeams(referenceDate: Date = new Date()): Observable<Team[]> {
        return of(this.teams)
            .pipe(
                flatMap(teams => forkJoin(teams.map(t => this.getTeam(t, referenceDate)))),
                delay(1000)
            );
    }

    private getTeam(team: TeamData, referenceDate: Date): Observable<Team> {
        return this.driverService.getTeamDrivers(team.id, referenceDate)
            .pipe(map(drivers => {
                return {
                    ...team,
                    referenceDate: referenceDate,
                    driverId: drivers
                }
            }));
    }
}