
type ISODateString = string;

export interface TokenPayload {
    sub: string;
    exp: number;
}

export interface EventItem {
    event_id: number;
    title: string;
    description: string | null;
    starts_at: ISODateString;
    ends_at: ISODateString;
    organiser_id: number | null;
    venue_id: number | null;
    created_at: ISODateString
};

export interface EventsList {
    events: EventItem[];
}