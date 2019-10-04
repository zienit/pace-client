import { GrandPrix, Session, SessionType } from './event.model';
import { Observable, of } from 'rxjs';

export class EventService {

    private grandsPrix: GrandPrix[] = [
        new GrandPrix('4206e14b', 'Australian GP', 'aus', 'australia/melbourne', [
            { type: SessionType.FP1, date: new Date(Date.UTC(2019, 2, 15, 12 - 11)) },
            { type: SessionType.FP2, date: new Date(Date.UTC(2019, 2, 15, 16 - 11)) },
            { type: SessionType.FP3, date: new Date(Date.UTC(2019, 2, 16, 14 - 11)) },
            { type: SessionType.Q1, date: new Date(Date.UTC(2019, 2, 16, 17 - 11)) },
            { type: SessionType.R, date: new Date(Date.UTC(2019, 2, 17, 16 - 11, 10)) }
        ]),
        new GrandPrix('6b9e2e54', 'Bahrain GP', 'bhr', 'asia/bahrain', [
            { type: SessionType.FP1, date: new Date(Date.UTC(2019, 2, 29, 14 - 3)) },
            { type: SessionType.FP2, date: new Date(Date.UTC(2019, 2, 29, 18 - 3)) },
            { type: SessionType.FP3, date: new Date(Date.UTC(2019, 2, 30, 15 - 3)) },
            { type: SessionType.Q1, date: new Date(Date.UTC(2019, 2, 30, 18 - 3)) },
            { type: SessionType.R, date: new Date(Date.UTC(2019, 2, 31, 18 - 3, 10)) }
        ]),
        new GrandPrix('32ff9147', 'Chinese GP', 'chn', 'asia/shanghai', [
            { type: SessionType.FP1, date: new Date(Date.UTC(2019, 3, 12, 10 - 8)) },
            { type: SessionType.FP2, date: new Date(Date.UTC(2019, 3, 12, 14 - 8)) },
            { type: SessionType.FP3, date: new Date(Date.UTC(2019, 3, 13, 11 - 8)) },
            { type: SessionType.Q1, date: new Date(Date.UTC(2019, 3, 13, 14 - 8)) },
            { type: SessionType.R, date: new Date(Date.UTC(2019, 3, 14, 14 - 8, 10)) }
        ]),
        new GrandPrix('199c429f', 'Azerbaijan GP', 'aze', 'asia/baku', [
            { type: SessionType.FP1, date: new Date(Date.UTC(2019, 3, 26, 13 - 4)) },
            { type: SessionType.FP2, date: new Date(Date.UTC(2019, 3, 26, 17 - 4)) },
            { type: SessionType.FP3, date: new Date(Date.UTC(2019, 3, 27, 14 - 4)) },
            { type: SessionType.Q1, date: new Date(Date.UTC(2019, 3, 27, 17 - 4)) },
            { type: SessionType.R, date: new Date(Date.UTC(2019, 3, 28, 16 - 4, 10)) }
        ]),
        new GrandPrix('da25e95c', 'Spanish GP', 'esp', 'europe/madrid', [
            { type: SessionType.FP1, date: new Date(Date.UTC(2019, 4, 10, 11 - 2)) },
            { type: SessionType.FP2, date: new Date(Date.UTC(2019, 4, 10, 15 - 2)) },
            { type: SessionType.FP3, date: new Date(Date.UTC(2019, 4, 11, 12 - 2)) },
            { type: SessionType.Q1, date: new Date(Date.UTC(2019, 4, 11, 15 - 2)) },
            { type: SessionType.R, date: new Date(Date.UTC(2019, 4, 12, 15 - 2, 10)) }
        ])
    ];

    getGrandsPrix(): Observable<GrandPrix[]> {
        return of(this.grandsPrix);
    }
}