export interface Session {
    type: SessionType;
    date: Date;
}

export enum SessionType {
    FP1, FP2, FP3, Q1, Q2, Q3, R
}

export class GrandPrix {
    constructor(public id: string, public name: string, public country: string, public timezone: string, public sessions: Session[]) { }

    private _from: Date;
    private _to: Date;

    get from(): Date {
        if (!this._from) {
            this._from = this.sessions.map(s => s.date).reduce((min, date) => date < min ? date : min, new Date(9999, 1, 1));
        }
        return this._from;
    }
    get to(): Date {
        if (!this._to) {
            this._to = this.sessions.map(s => s.date).reduce((max, date) => date > max ? date : max, new Date(1900, 1, 1));
        }
        return this._to;
    }
}