import { Driver } from './driver.model';
import { Observable, of } from 'rxjs';
import { delay, map } from 'rxjs/operators';

type TeamPeriod = { teamId: string, from: Date, to?: Date };

export class DriverService {

    private drivers: { id: string, name: string, image: string, country: string, driverNr: number, abbr: string }[] = [
        { id: '0d7d5187', name: 'Daniel Ricciardo', image: 'https://www.formula1.com/content/fom-website/en/drivers/daniel-ricciardo/_jcr_content/image.img.1920.medium.jpg/1554819092086.jpg', country: 'aus', driverNr: 3, abbr: 'RIC' },
        { id: '1b195770', name: 'Lando Norris', image: 'https://www.formula1.com/content/fom-website/en/drivers/lando-norris/_jcr_content/image.img.1920.medium.jpg/1567085899345.jpg', country: 'gbr', driverNr: 4, abbr: 'NOR' },
        { id: '08aa3490', name: 'Sebastian Vettel', image: 'https://www.formula1.com/content/fom-website/en/drivers/sebastian-vettel/_jcr_content/image.img.1920.medium.jpg/1567175200601.jpg', country: 'deu', driverNr: 5, abbr: 'VET' },
        { id: '0715a751', name: 'Kimi Raikkonen', image: 'https://www.formula1.com/content/fom-website/en/drivers/kimi-raikkonen/_jcr_content/image.img.1920.medium.jpg/1554819054944.jpg', country: 'fin', driverNr: 7, abbr: 'RAI' },
        { id: 'c881e187', name: 'Romain Grosjean', image: 'https://www.formula1.com/content/fom-website/en/drivers/romain-grosjean/_jcr_content/image.img.1920.medium.jpg/1568719868304.jpg', country: 'fra', driverNr: 8, abbr: 'GRO' },
        { id: '36c2fbdb', name: 'Pierre Gasly', image: 'https://www.formula1.com/content/fom-website/en/drivers/pierre-gasly/_jcr_content/image.img.1920.medium.jpg/1566295417688.jpg', country: 'fra', driverNr: 10, abbr: 'GAS' },
        { id: 'a07d6aef', name: 'Sergio Perez', image: 'https://www.formula1.com/content/fom-website/en/drivers/sergio-perez/_jcr_content/image.img.1920.medium.jpg/1554818944774.jpg', country: 'mex', driverNr: 11, abbr: 'PER' },
        { id: 'a4174229', name: 'Charles Leclerc', image: 'https://www.formula1.com/content/fom-website/en/drivers/charles-leclerc/_jcr_content/image.img.1920.medium.jpg/1567179277948.jpg', country: 'mco', driverNr: 16, abbr: 'LEC' },
        { id: 'ea85f062', name: 'Lance Stroll', image: 'https://www.formula1.com/content/fom-website/en/drivers/lance-stroll/_jcr_content/image.img.1920.medium.jpg/1554818895505.jpg', country: 'can', driverNr: 18, abbr: 'STR' },
        { id: '6cd0d5e2', name: 'Kevin Magnussen', image: 'https://www.formula1.com/content/fom-website/en/drivers/kevin-magnussen/_jcr_content/image.img.1920.medium.jpg/1568719901149.jpg', country: 'dnk', driverNr: 20, abbr: 'MAG' },
        { id: '2fa0dbd7', name: 'Alex Albon', image: 'https://www.formula1.com/content/fom-website/en/drivers/alexander-albon/_jcr_content/image.img.1920.medium.jpg/1566295320855.jpg', country: 'tha', driverNr: 23, abbr: 'ALB' },
        { id: '1fdeab2d', name: 'Daniil Kvyat', image: 'https://www.formula1.com/content/fom-website/en/drivers/daniil-kvyat/_jcr_content/image.img.1920.medium.jpg/1554819075478.jpg', country: 'rus', driverNr: 26, abbr: 'KVY' },
        { id: 'dd7ffa3d', name: 'Nico Hulkenberg', image: 'https://www.formula1.com/content/fom-website/en/drivers/nico-hulkenberg/_jcr_content/image.img.1920.medium.jpg/1554818995713.jpg', country: 'deu', driverNr: 27, abbr: 'HUL' },
        { id: '0917c96d', name: 'Max Verstappen', image: 'https://www.formula1.com/content/fom-website/en/drivers/max-verstappen/_jcr_content/image.img.1920.medium.jpg/1554819019533.jpg', country: 'nld', driverNr: 33, abbr: 'VER' },
        { id: 'f5929551', name: 'Lewis Hamilton', image: 'https://www.formula1.com/content/fom-website/en/drivers/lewis-hamilton/_jcr_content/image.img.1920.medium.jpg/1554818913486.jpg', country: 'gbr', driverNr: 44, abbr: 'HAM' },
        { id: 'e7128eb8', name: 'Carlos Sainz Jr.', image: 'https://www.formula1.com/content/fom-website/en/drivers/carlos-sainz/_jcr_content/image.img.1920.medium.jpg/1567085905449.jpg', country: 'esp', driverNr: 55, abbr: 'SAI' },
        { id: '12101146', name: 'George Russell', image: 'https://www.formula1.com/content/fom-website/en/drivers/george-russell/_jcr_content/image.img.1920.medium.jpg/1554818804832.jpg', country: 'gbr', driverNr: 63, abbr: 'RUS' },
        { id: '916e71f5', name: 'Valtteri Bottas', image: 'https://www.formula1.com/content/fom-website/en/drivers/valtteri-bottas/_jcr_content/image.img.1920.medium.jpg/1554818929157.jpg', country: 'fin', driverNr: 77, abbr: 'BOT' },
        { id: '2e74b7db', name: 'Robert Kubica', image: 'https://www.formula1.com/content/fom-website/en/drivers/robert-kubica/_jcr_content/image.img.1920.medium.jpg/1554818824881.jpg', country: 'pol', driverNr: 88, abbr: 'KUB' },
        { id: '4e21b59d', name: 'Antonio Giovinazzi', image: 'https://www.formula1.com/content/fom-website/en/drivers/antonio-giovinazzi/_jcr_content/image.img.1920.medium.jpg/1554818879413.jpg', country: 'ita', driverNr: 99, abbr: 'GIO' }
    ];

    private driverTeams: { [driverId: string]: TeamPeriod[] } = {
        '0d7d5187': [{ teamId: '2c813876', from: new Date(2019, 1, 1) }],
        '1b195770': [{ teamId: '0726a832', from: new Date(2019, 1, 1) }],
        '08aa3490': [{ teamId: '6e23e4fa', from: new Date(2019, 1, 1) }],
        '0715a751': [{ teamId: 'aff375c9', from: new Date(2019, 1, 1) }],
        'c881e187': [{ teamId: '37b10128', from: new Date(2019, 1, 1) }],
        '36c2fbdb': [{ teamId: '9cfc36a9', from: new Date(2019, 1, 1) }],
        'a07d6aef': [{ teamId: '48543e1f', from: new Date(2019, 1, 1) }],
        'a4174229': [{ teamId: '6e23e4fa', from: new Date(2019, 1, 1) }],
        'ea85f062': [{ teamId: '48543e1f', from: new Date(2019, 1, 1) }],
        '6cd0d5e2': [{ teamId: '37b10128', from: new Date(2019, 1, 1) }],
        '2fa0dbd7': [{ teamId: '63c25685', from: new Date(2019, 1, 1) }],
        '1fdeab2d': [{ teamId: '9cfc36a9', from: new Date(2019, 1, 1) }],
        'dd7ffa3d': [{ teamId: '2c813876', from: new Date(2019, 1, 1) }],
        '0917c96d': [{ teamId: '63c25685', from: new Date(2019, 1, 1) }],
        'f5929551': [{ teamId: '6c445b98', from: new Date(2019, 1, 1) }],
        'e7128eb8': [{ teamId: '0726a832', from: new Date(2019, 1, 1) }],
        '12101146': [{ teamId: 'a9489bb1', from: new Date(2019, 1, 1) }],
        '916e71f5': [{ teamId: '6c445b98', from: new Date(2019, 1, 1) }],
        '2e74b7db': [{ teamId: 'a9489bb1', from: new Date(2019, 1, 1) }],
        '4e21b59d': [{ teamId: 'aff375c9', from: new Date(2019, 1, 1) }],
    };

    getDrivers(): Observable<Driver[]> {
        return of(this.drivers.map(d => {
            return {
                ...d,
                referenceDate: new Date(),
                teamId: this.getDriverTeam(d.id)
            };
        })).pipe(
            delay(300),
            map(x => {
                if (Math.random() < .5) {
                    throw new Error('darn! something went wrong trying to download data...')
                } else {
                    return x;
                }
            })
        );
    }

    private getDriverTeam(driverId: string, referenceDate: Date = new Date()): string {
        const periods: TeamPeriod[] = this.driverTeams[driverId];
        const period = periods.find(p => p.from <= referenceDate && (p.to == null || referenceDate < p.to));
        return period ? period.teamId : null;
    }

    getTeamDrivers(teamId: string, referenceDate: Date = new Date()): Observable<string[]> {
        const drivers = Object.entries(this.driverTeams)
            .filter(([_, periods]) => periods
                .find(p => p.teamId === teamId && p.from <= referenceDate && (p.to == null || referenceDate < p.to))
            )
            .map(([driver, _]) => driver);
        return of(drivers);
    }
}