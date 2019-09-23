import { Driver } from './driver.model';

export class DriverService {

    private drivers: Driver[] = [
        { name: 'Daniel Ricciardo', image: 'https://cdn-6.motorsport.com/images/mgl/0oOMgGo0/s8/daniel-ricciardo-renault-sport-1.jpg' },
        { name: 'Lando Norris', image: 'https://cdn-5.motorsport.com/images/mgl/6AEMxJq6/s8/lando-norris-mclaren-1.jpg' },
        { name: 'Sebastian Vettel', image: 'https://cdn-3.motorsport.com/images/mgl/6l9pEqN0/s8/sebastian-vettel-ferrari-1.jpg' },
        { name: 'Kimi Raikkonen', image: 'https://cdn-3.motorsport.com/images/mgl/2549DvM0/s8/kimi-raikkonen-alfa-romeo-raci-1.jpg' },
        { name: 'Romain Grosjean', image: 'https://cdn-8.motorsport.com/images/mgl/0qXmG586/s8/romain-grosjean-haas-f1-team-1.jpg' },
        { name: 'Pierre Gasly', image: 'https://cdn-8.motorsport.com/images/mgl/YXR777Q0/s8/pierre-gasly-toro-rosso-1.jpg' },
        { name: 'Sergio Perez', image: 'https://cdn-8.motorsport.com/images/mgl/0rGe1mm2/s8/sergio-perez-racing-point-1.jpg' },
        { name: 'Charles Leclerc', image: 'https://cdn-9.motorsport.com/images/mgl/2QzXOJOY/s8/charles-leclerc-ferrari-1.jpg' },
        { name: 'Max Verstappen', image: 'https://cdn-8.motorsport.com/images/mgl/YP3V1J82/s8/max-verstappen-red-bull-racing-1.jpg' }
    ]

    getDrivers() {
        return this.drivers.slice();
    }
}