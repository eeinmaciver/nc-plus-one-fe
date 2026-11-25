import type { EventItem } from "../types";
import { formatDate } from "../formatDate";
import { Link } from "react-router";

interface EventCardProps {
    event: EventItem;
}

export default function EventCard({ event }: EventCardProps) {

    const desc = event.description ?? 'Event description not available.';

    return (
        <li>
            <h2><Link to={`/events/${event.event_id}`}>{event.title}</Link></h2>
            <p>{desc}</p>
            <p><time dateTime={event.starts_at}>{formatDate(event.starts_at)}</time></p>
        </li>
    );
}

            // <p><time dateTime={event.ends_at}>{formatDate(event.ends_at)}</time></p>