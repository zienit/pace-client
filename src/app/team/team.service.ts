import { Team } from './team.model';

export class TeamService {

    private teams: Team[] = [
        { name: 'Mercedes', image: 'https://www.formula1.com/content/fom-website/en/teams/Mercedes/_jcr_content/logo.img.jpg/1486740144183.jpg', country: 'deu'},
        { name: 'Ferrari', image: 'https://www.formula1.com/content/fom-website/en/teams/Ferrari/_jcr_content/logo.img.jpg/1521797345005.jpg', country: 'ita'},
        { name: 'Red Bull Racing', image: 'https://www.formula1.com/content/fom-website/en/teams/Red-Bull/_jcr_content/logo.img.jpg/1514762875081.jpg', country: 'aut' },
        { name: 'McLaren', image: 'https://www.formula1.com/content/fom-website/en/teams/McLaren/_jcr_content/logo.img.jpg/1515152671364.jpg', country: 'gbr'},
        { name: 'Renault', image: 'https://www.formula1.com/content/fom-website/en/teams/Renault/_jcr_content/logo.img.jpg/1546853275141.jpg', country: 'fra'},
        { name: 'Toro Rosso', image: 'https://www.formula1.com/content/fom-website/en/teams/Toro-Rosso/_jcr_content/logo.img.jpg/1521797337296.jpg', country: 'ita'},
        { name: 'Racing Point', image: 'https://www.formula1.com/content/fom-website/en/teams/Racing-Point/_jcr_content/logo.img.jpg/1552473335851.jpg', country: 'gbr'},
        { name: 'Alfa Romeo Racing', image: 'https://www.formula1.com/content/fom-website/en/teams/Alfa-Romeo/_jcr_content/logo.img.png/1549450808736.png', country: 'che'},
        { name: 'Haas', image: 'https://www.formula1.com/content/fom-website/en/teams/Haas/_jcr_content/logo.img.jpg/1568040248402.jpg', country: 'usa'},
        { name: 'Williams', image: 'https://www.formula1.com/content/fom-website/en/teams/Williams/_jcr_content/logo.img.png/1551261665481.png', country: 'gbr'},
    ];

    getTeams() {
        return this.teams.slice();
    }
}