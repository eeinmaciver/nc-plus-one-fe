
type ISODateString = string;

export interface TokenPayload {
    sub: string;
    exp: number;
};

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
};

export interface EventDetail {
    event_id: number;
    title: string;
    description: string | null;
    starts_at: ISODateString;
    ends_at: ISODateString;
    venue_name: string | null;
    address: string | null;
    capacity: number | null;
    created_at: ISODateString
};

export interface EventDetailResponse {
    event: EventDetail;
};