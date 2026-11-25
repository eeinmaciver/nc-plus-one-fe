import { useEffect, useState } from "react"
import { getEventId } from "../api"
import type { EventDetail } from "../types"
import { useParams } from "react-router";
import { formatDate } from "../formatDate";

export default function EventDetailPage() {
    const [event, setEvent] = useState<EventDetail | null>(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
    const { event_id } = useParams();

    useEffect(() => {
        if (!event_id) return;

        getEventId(event_id)
            .then((data) => {
                setEvent(data.event);
            })
            .catch((err) => {
                setError(err instanceof Error ? err.message : "Something went wrong");
            })
            .finally(() => {
                setIsLoading(false);
            });
    }, [event_id]);

    if (isLoading) return <p>Loading events...</p>;
    if (error) return <p>Error: {error}</p>;
    if (!event) return null;

    return (
        <section>
            <h1>{event.title}</h1>
            <ul>
                <li>{event.description}</li>
                <li>Start time: <time dateTime={event.starts_at}>{formatDate(event.starts_at)}</time></li>
                <li>End time: <time dateTime={event.starts_at}>{formatDate(event.ends_at)}</time></li>
                <li>Venue: {event.venue_name}</li>
                <li>Address {event.address}</li>
                <li>Capacity: {event.capacity}</li>
            </ul>
        </section>
        );
}

// Come back to refactor start/end time (eg. Thu 18 Jun, 18:30 - 21:00)