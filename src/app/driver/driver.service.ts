import { Driver } from './driver.model';
import { Observable, of } from 'rxjs';

export class DriverService {

    private drivers: Driver[] = [
        { name: 'Daniel Ricciardo', image: 'https://www.formula1.com/content/fom-website/en/drivers/daniel-ricciardo/_jcr_content/image.img.1920.medium.jpg/1554819092086.jpg', country: 'aus', driverNr: 3, abbr: 'RIC' },
        { name: 'Lando Norris', image: 'https://www.formula1.com/content/fom-website/en/drivers/lando-norris/_jcr_content/image.img.1920.medium.jpg/1567085899345.jpg', country: 'gbr', driverNr: 4, abbr: 'NOR' },
        { name: 'Sebastian Vettel', image: 'https://www.formula1.com/content/fom-website/en/drivers/sebastian-vettel/_jcr_content/image.img.1920.medium.jpg/1567175200601.jpg', country: 'deu', driverNr: 5, abbr: 'VET' },
        { name: 'Kimi Raikkonen', image: 'https://www.formula1.com/content/fom-website/en/drivers/kimi-raikkonen/_jcr_content/image.img.1920.medium.jpg/1554819054944.jpg', country: 'fin', driverNr: 7, abbr: 'RAI' },
        { name: 'Romain Grosjean', image: 'https://www.formula1.com/content/fom-website/en/drivers/romain-grosjean/_jcr_content/image.img.1920.medium.jpg/1568719868304.jpg', country: 'fra', driverNr: 8, abbr: 'GRO' },
        { name: 'Pierre Gasly', image: 'https://www.formula1.com/content/fom-website/en/drivers/pierre-gasly/_jcr_content/image.img.1920.medium.jpg/1566295417688.jpg', country: 'fra', driverNr: 10, abbr: 'GAS' },
        { name: 'Sergio Perez', image: 'https://www.formula1.com/content/fom-website/en/drivers/sergio-perez/_jcr_content/image.img.1920.medium.jpg/1554818944774.jpg', country: 'mex', driverNr: 11, abbr: 'PER' },
        { name: 'Charles Leclerc', image: 'https://www.formula1.com/content/fom-website/en/drivers/charles-leclerc/_jcr_content/image.img.1920.medium.jpg/1567179277948.jpg', country: 'mco', driverNr: 16, abbr: 'LEC' },
        { name: 'Lance Stroll', image: 'https://www.formula1.com/content/fom-website/en/drivers/lance-stroll/_jcr_content/image.img.1920.medium.jpg/1554818895505.jpg', country: 'can', driverNr: 18, abbr: 'STR' },
        { name: 'Kevin Magnussen', image: 'https://www.formula1.com/content/fom-website/en/drivers/kevin-magnussen/_jcr_content/image.img.1920.medium.jpg/1568719901149.jpg', country: 'dnk', driverNr: 20, abbr: 'MAG' },
        { name: 'Alex Albon', image: 'https://www.formula1.com/content/fom-website/en/drivers/alexander-albon/_jcr_content/image.img.1920.medium.jpg/1566295320855.jpg', country: 'tha', driverNr: 23, abbr: 'ALB' },
        { name: 'Daniil Kvyat', image: 'https://www.formula1.com/content/fom-website/en/drivers/daniil-kvyat/_jcr_content/image.img.1920.medium.jpg/1554819075478.jpg', country: 'rus', driverNr: 26, abbr: 'KVY' },
        { name: 'Nico Hulkenberg', image: 'https://www.formula1.com/content/fom-website/en/drivers/nico-hulkenberg/_jcr_content/image.img.1920.medium.jpg/1554818995713.jpg', country: 'deu', driverNr: 27, abbr: 'HUL' },
        { name: 'Max Verstappen', image: 'https://www.formula1.com/content/fom-website/en/drivers/max-verstappen/_jcr_content/image.img.1920.medium.jpg/1554819019533.jpg', country: 'nld', driverNr: 33, abbr: 'VER' },
        { name: 'Lewis Hamilton', image: 'https://www.formula1.com/content/fom-website/en/drivers/lewis-hamilton/_jcr_content/image.img.1920.medium.jpg/1554818913486.jpg', country: 'gbr', driverNr: 44, abbr: 'HAM' },
        { name: 'Carlos Sainz Jr.', image: 'https://www.formula1.com/content/fom-website/en/drivers/carlos-sainz/_jcr_content/image.img.1920.medium.jpg/1567085905449.jpg', country: 'esp', driverNr: 55, abbr: 'SAI' },
        { name: 'George Russell', image: 'https://www.formula1.com/content/fom-website/en/drivers/george-russell/_jcr_content/image.img.1920.medium.jpg/1554818804832.jpg', country: 'gbr', driverNr: 63, abbr: 'RUS' },
        { name: 'Valtteri Bottas', image: 'https://www.formula1.com/content/fom-website/en/drivers/valtteri-bottas/_jcr_content/image.img.1920.medium.jpg/1554818929157.jpg', country: 'fin', driverNr: 77, abbr: 'BOT' },
        { name: 'Robert Kubica', image: 'https://www.formula1.com/content/fom-website/en/drivers/robert-kubica/_jcr_content/image.img.1920.medium.jpg/1554818824881.jpg', country: 'pol', driverNr: 88, abbr: 'KUB' },
        { name: 'Antonio Giovinazzi', image: 'https://www.formula1.com/content/fom-website/en/drivers/antonio-giovinazzi/_jcr_content/image.img.1920.medium.jpg/1554818879413.jpg', country: 'ita', driverNr: 99, abbr: 'GIO' }
    ]

    getDrivers() : Observable<Driver[]>{
        return of(this.drivers.slice());
    }
}