import type { EventItem } from "../types";
import { formatDate } from "../formatDate";

interface EventCardProps {
    event: EventItem;
}

export default function EventCard({ event }: EventCardProps) {

    const desc = event.description ?? 'Event description not available.';

    return (
        <li>
            <h2>{event.title}</h2>
            <p>{desc}</p>
            <p><time dateTime={event.starts_at}>{formatDate(event.starts_at)}</time></p>
            <p><time dateTime={event.ends_at}>{formatDate(event.ends_at)}</time></p>
        </li>
    );
}