import { Driver } from './driver.model';

export class DriverService {

    private drivers: Driver[] = [
        { name: 'Daniel Ricciardo', image: 'https://cdn-6.motorsport.com/images/mgl/0oOMgGo0/s8/daniel-ricciardo-renault-sport-1.jpg', country: 'aus', driverNr: 3 },
        { name: 'Lando Norris', image: 'https://cdn-5.motorsport.com/images/mgl/6AEMxJq6/s8/lando-norris-mclaren-1.jpg', country: 'gbr', driverNr: 4 },
        { name: 'Sebastian Vettel', image: 'https://cdn-3.motorsport.com/images/mgl/6l9pEqN0/s8/sebastian-vettel-ferrari-1.jpg', country: 'deu', driverNr: 5 },
        { name: 'Kimi Raikkonen', image: 'https://cdn-3.motorsport.com/images/mgl/2549DvM0/s8/kimi-raikkonen-alfa-romeo-raci-1.jpg', country: 'fin', driverNr: 7 },
        { name: 'Romain Grosjean', image: 'https://cdn-8.motorsport.com/images/mgl/0qXmG586/s8/romain-grosjean-haas-f1-team-1.jpg', country: 'fra', driverNr: 8 },
        { name: 'Pierre Gasly', image: 'https://cdn-8.motorsport.com/images/mgl/YXR777Q0/s8/pierre-gasly-toro-rosso-1.jpg', country: 'fra', driverNr: 10 },
        { name: 'Sergio Perez', image: 'https://cdn-8.motorsport.com/images/mgl/0rGe1mm2/s8/sergio-perez-racing-point-1.jpg', country: 'mex', driverNr: 11 },
        { name: 'Charles Leclerc', image: 'https://cdn-9.motorsport.com/images/mgl/2QzXOJOY/s8/charles-leclerc-ferrari-1.jpg', country: 'mco', driverNr: 16 },
        { name: 'Lance Stroll', image: 'https://cdn-3.motorsport.com/images/mgl/6n93mxRY/s8/lance-stroll-racing-point-1.jpg', country: 'can', driverNr: 18 },
        { name: 'Kevin Magnussen', image: 'https://cdn-1.motorsport.com/images/mgl/0k7b1AA0/s8/kevin-magnussen-haas-f1-team-1.jpg', country: 'dnk', driverNr: 20 },
        { name: 'Alex Albon', image: 'https://cdn-4.motorsport.com/images/mgl/6O1VVVP2/s8/alex-albon-red-bull-racing-1.jpg', country: 'tha', driverNr: 23 },
        { name: 'Daniil Kvyat', image: 'https://cdn-0.motorsport.com/images/mgl/2GzBZQE0/s8/daniil-kvyat-scuderia-toro-ros-1.jpg', country: 'rus', driverNr: 26 },
        { name: 'Nico Hulkenberg', image: 'https://cdn-0.motorsport.com/images/mgl/YKEyRQk0/s8/nico-hulkenberg-renault-f1-tea-1.jpg', country: 'deu', driverNr: 27 },
        { name: 'Max Verstappen', image: 'https://cdn-8.motorsport.com/images/mgl/YP3V1J82/s8/max-verstappen-red-bull-racing-1.jpg', country: 'nld', driverNr: 33 },
        { name: 'Lewis Hamilton', image: 'https://cdn-8.motorsport.com/images/mgl/2jXO8LN6/s8/lewis-hamilton-mercedes-amg-f1-1.jpg', country: 'gbr', driverNr: 44 },
        { name: 'Carlos Sainz Jr.', image: 'https://cdn-1.motorsport.com/images/mgl/YN1jVLe2/s8/carlos-sainz-jr-mclaren-1.jpg', country: 'esp', driverNr: 55 },
        { name: 'George Russell', image: 'https://cdn-9.motorsport.com/images/mgl/2d1ROK7Y/s8/george-russell-williams-1.jpg', country: 'gbr', driverNr: 63 },
        { name: 'Valtteri Bottas', image: 'https://cdn-1.motorsport.com/images/mgl/2549DxD0/s8/valtteri-bottas-mercedes-amg-f-1.jpg', country: 'fin', driverNr: 77 },
        { name: 'Robert Kubica', image: 'https://cdn-0.motorsport.com/images/mgl/2wBJOVK0/s8/robert-kubica-williams-1.jpg', country: 'pol', driverNr: 88 },
        { name: 'Antonio Giovinazzi', image: 'https://cdn-5.motorsport.com/images/mgl/2jXO89P6/s8/antonio-giovinazzi-alfa-romeo--1.jpg', country: 'ita', driverNr: 99 }
    ]

    getDrivers() {
        return this.drivers.slice();
    }
}