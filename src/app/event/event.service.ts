import { GrandPrix, Session, SessionType } from './event.model';
import { Observable, of } from 'rxjs';

export class EventService {

    private grandsPrix: GrandPrix[] = [
        new GrandPrix('4206e14b', 'Australian GP', 'aus', [
            { type: SessionType.FP1, date: new Date(2019, 2, 15, 12) },
            { type: SessionType.FP2, date: new Date(2019, 2, 15, 16) },
            { type: SessionType.FP3, date: new Date(2019, 2, 16, 14) },
            { type: SessionType.Q1, date: new Date(2019, 2, 16, 17) },
            { type: SessionType.R, date: new Date(2019, 2, 17, 16, 10) }
        ])
    ];

    getGrandsPrix(): Observable<GrandPrix[]> {
        return of(this.grandsPrix);
    }
}