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
        ]),
        new GrandPrix('a43405b0', 'Monaco GP', 'mco', 'europe/monaco', [
            { type: SessionType.FP1, date: new Date(Date.UTC(2019, 4, 23, 11 - 2)) },
            { type: SessionType.FP2, date: new Date(Date.UTC(2019, 4, 23, 15 - 2)) },
            { type: SessionType.FP3, date: new Date(Date.UTC(2019, 4, 25, 12 - 2)) },
            { type: SessionType.Q1, date: new Date(Date.UTC(2019, 4, 25, 15 - 2)) },
            { type: SessionType.R, date: new Date(Date.UTC(2019, 4, 26, 15 - 2, 10)) }
        ]),
        new GrandPrix('c2d98fd9', 'Canadian GP', 'can', 'america/montreal', [
            { type: SessionType.FP1, date: new Date(Date.UTC(2019, 5, 7, 10 + 4)) },
            { type: SessionType.FP2, date: new Date(Date.UTC(2019, 5, 7, 14 + 4)) },
            { type: SessionType.FP3, date: new Date(Date.UTC(2019, 5, 8, 11 + 4)) },
            { type: SessionType.Q1, date: new Date(Date.UTC(2019, 5, 8, 14 + 4)) },
            { type: SessionType.R, date: new Date(Date.UTC(2019, 5, 9, 14 + 4, 10)) }
        ]),
        new GrandPrix('c8afdaf5', 'French GP', 'fra', 'europe/paris', [
            { type: SessionType.FP1, date: new Date(Date.UTC(2019, 5, 21, 11 - 2)) },
            { type: SessionType.FP2, date: new Date(Date.UTC(2019, 5, 21, 15 - 2)) },
            { type: SessionType.FP3, date: new Date(Date.UTC(2019, 5, 22, 12 - 2)) },
            { type: SessionType.Q1, date: new Date(Date.UTC(2019, 5, 22, 15 - 2)) },
            { type: SessionType.R, date: new Date(Date.UTC(2019, 5, 23, 15 - 2, 10)) }
        ]),
        new GrandPrix('74bd7ae5', 'Austrian GP', 'aut', 'europe/vienna', [
            { type: SessionType.FP1, date: new Date(Date.UTC(2019, 5, 28, 11 - 2)) },
            { type: SessionType.FP2, date: new Date(Date.UTC(2019, 5, 28, 15 - 2)) },
            { type: SessionType.FP3, date: new Date(Date.UTC(2019, 5, 29, 12 - 2)) },
            { type: SessionType.Q1, date: new Date(Date.UTC(2019, 5, 29, 15 - 2)) },
            { type: SessionType.R, date: new Date(Date.UTC(2019, 5, 30, 15 - 2, 10)) }
        ]),
        new GrandPrix('3fc34931', 'British GP', 'gbr', 'europe/london', [
            { type: SessionType.FP1, date: new Date(Date.UTC(2019, 6, 12, 10 - 1)) },
            { type: SessionType.FP2, date: new Date(Date.UTC(2019, 6, 12, 14 - 1)) },
            { type: SessionType.FP3, date: new Date(Date.UTC(2019, 6, 13, 11 - 1)) },
            { type: SessionType.Q1, date: new Date(Date.UTC(2019, 6, 13, 14 - 1)) },
            { type: SessionType.R, date: new Date(Date.UTC(2019, 6, 14, 14 - 1, 10)) }
        ]),
        new GrandPrix('26b49e5a', 'German GP', 'deu', 'europe/berlin', [
            { type: SessionType.FP1, date: new Date(Date.UTC(2019, 6, 26, 11 - 2)) },
            { type: SessionType.FP2, date: new Date(Date.UTC(2019, 6, 26, 15 - 2)) },
            { type: SessionType.FP3, date: new Date(Date.UTC(2019, 6, 27, 12 - 2)) },
            { type: SessionType.Q1, date: new Date(Date.UTC(2019, 6, 27, 15 - 2)) },
            { type: SessionType.R, date: new Date(Date.UTC(2019, 6, 28, 15 - 2, 10)) }
        ]),
        new GrandPrix('a578a636', 'Hungarian GP', 'hun', 'europe/budapest', [
            { type: SessionType.FP1, date: new Date(Date.UTC(2019, 7, 2, 11 - 2)) },
            { type: SessionType.FP2, date: new Date(Date.UTC(2019, 7, 2, 15 - 2)) },
            { type: SessionType.FP3, date: new Date(Date.UTC(2019, 7, 3, 12 - 2)) },
            { type: SessionType.Q1, date: new Date(Date.UTC(2019, 7, 3, 15 - 2)) },
            { type: SessionType.R, date: new Date(Date.UTC(2019, 7, 4, 15 - 2, 10)) }
        ]),
        new GrandPrix('b2c7e61c', 'Belgian GP', 'bel', 'europe/brussels', [
            { type: SessionType.FP1, date: new Date(Date.UTC(2019, 7, 30, 11 - 2)) },
            { type: SessionType.FP2, date: new Date(Date.UTC(2019, 7, 30, 15 - 2)) },
            { type: SessionType.FP3, date: new Date(Date.UTC(2019, 7, 31, 12 - 2)) },
            { type: SessionType.Q1, date: new Date(Date.UTC(2019, 7, 31, 15 - 2)) },
            { type: SessionType.R, date: new Date(Date.UTC(2019, 8, 1, 15 - 2, 10)) }
        ]),
        new GrandPrix('d880fe0a', 'Italian GP', 'ita', 'europe/rome', [
            { type: SessionType.FP1, date: new Date(Date.UTC(2019, 8, 6, 11 - 2)) },
            { type: SessionType.FP2, date: new Date(Date.UTC(2019, 8, 6, 15 - 2)) },
            { type: SessionType.FP3, date: new Date(Date.UTC(2019, 8, 7, 12 - 2)) },
            { type: SessionType.Q1, date: new Date(Date.UTC(2019, 8, 7, 15 - 2)) },
            { type: SessionType.R, date: new Date(Date.UTC(2019, 8, 8, 15 - 2, 10)) }
        ]),
        new GrandPrix('16e88cc8', 'Singapore GP', 'sgp', 'asia/singapore', [
            { type: SessionType.FP1, date: new Date(Date.UTC(2019, 8, 20, 16 - 8, 30)) },
            { type: SessionType.FP2, date: new Date(Date.UTC(2019, 8, 20, 20 - 8, 30)) },
            { type: SessionType.FP3, date: new Date(Date.UTC(2019, 8, 21, 18 - 8)) },
            { type: SessionType.Q1, date: new Date(Date.UTC(2019, 8, 21, 21 - 8)) },
            { type: SessionType.R, date: new Date(Date.UTC(2019, 8, 22, 20 - 8, 10)) }
        ]),
        new GrandPrix('c914dc10', 'Russian GP', 'rus', 'europe/moscow', [
            { type: SessionType.FP1, date: new Date(Date.UTC(2019, 8, 27, 11 - 3)) },
            { type: SessionType.FP2, date: new Date(Date.UTC(2019, 8, 27, 15 - 3)) },
            { type: SessionType.FP3, date: new Date(Date.UTC(2019, 8, 28, 12 - 3)) },
            { type: SessionType.Q1, date: new Date(Date.UTC(2019, 8, 28, 15 - 3)) },
            { type: SessionType.R, date: new Date(Date.UTC(2019, 8, 29, 14 - 3, 10)) }
        ]),
        new GrandPrix('f852e221', 'Japanese GP', 'jpn', 'asia/tokyo', [
            { type: SessionType.FP1, date: new Date(Date.UTC(2019, 9, 11, 10 - 9)) },
            { type: SessionType.FP2, date: new Date(Date.UTC(2019, 9, 11, 14 - 9)) },
            { type: SessionType.FP3, date: new Date(Date.UTC(2019, 9, 12, 12 - 9)) },
            { type: SessionType.Q1, date: new Date(Date.UTC(2019, 9, 12, 15 - 9)) },
            { type: SessionType.R, date: new Date(Date.UTC(2019, 9, 13, 14 - 9, 10)) }
        ]),
        new GrandPrix('47d2a17d', 'Mexican GP', 'mex', 'america/mexico_city', [
            { type: SessionType.FP1, date: new Date(Date.UTC(2019, 9, 25, 10 + 5)) },
            { type: SessionType.FP2, date: new Date(Date.UTC(2019, 9, 25, 14 + 5)) },
            { type: SessionType.FP3, date: new Date(Date.UTC(2019, 9, 26, 10 + 5)) },
            { type: SessionType.Q1, date: new Date(Date.UTC(2019, 9, 26, 13 + 5)) },
            { type: SessionType.R, date: new Date(Date.UTC(2019, 9, 27, 13 + 6, 10)) }
        ]),
        new GrandPrix('c5cbcea2', 'United States GP', 'usa', 'america/chicago', [
            { type: SessionType.FP1, date: new Date(Date.UTC(2019, 10, 1, 11 + 5)) },
            { type: SessionType.FP2, date: new Date(Date.UTC(2019, 10, 1, 15 + 5)) },
            { type: SessionType.FP3, date: new Date(Date.UTC(2019, 10, 2, 13 + 5)) },
            { type: SessionType.Q1, date: new Date(Date.UTC(2019, 10, 2, 16 + 5)) },
            { type: SessionType.R, date: new Date(Date.UTC(2019, 10, 3, 13 + 6, 10)) }
        ]),
        new GrandPrix('e8ae2940', 'Brazilian GP', 'bra', 'america/sao_paulo', [
            { type: SessionType.FP1, date: new Date(Date.UTC(2019, 10, 15, 11 + 2)) },
            { type: SessionType.FP2, date: new Date(Date.UTC(2019, 10, 15, 15 + 2)) },
            { type: SessionType.FP3, date: new Date(Date.UTC(2019, 10, 16, 12 + 2)) },
            { type: SessionType.Q1, date: new Date(Date.UTC(2019, 10, 16, 15 + 2)) },
            { type: SessionType.R, date: new Date(Date.UTC(2019, 10, 17, 13 + 2, 10)) }
        ]),
        new GrandPrix('e77165e5', 'Abu Dhabi GP', 'are', 'asia/dubai', [
            { type: SessionType.FP1, date: new Date(Date.UTC(2019, 10, 29, 13 - 4)) },
            { type: SessionType.FP2, date: new Date(Date.UTC(2019, 10, 29, 17 - 4)) },
            { type: SessionType.FP3, date: new Date(Date.UTC(2019, 10, 30, 14 - 4)) },
            { type: SessionType.Q1, date: new Date(Date.UTC(2019, 10, 30, 17 - 4)) },
            { type: SessionType.R, date: new Date(Date.UTC(2019, 11, 1, 17 - 4, 10)) }
        ])
    ];

    getGrandsPrix(): Observable<GrandPrix[]> {
        return of(this.grandsPrix);
    }
}