export interface Session {
    type: SessionType;
    date: Date;
}

export enum SessionType {
    FP1, FP2, FP3, Q1, Q2, Q3, R
}

export class GrandPrix {
    id: string;
    name: string;
    country: string;
    timezone: string;
    sessions: Session[];
}