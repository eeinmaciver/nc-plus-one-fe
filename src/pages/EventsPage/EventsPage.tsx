import { useEffect, useState } from "react"
import { getEvents } from "../../api"
import type { EventItem } from "../../types"
import EventCard from "../../components/EventCard/EventCard";
// import { login } from "../../api";

export default function EventsPage() {
    const [events, setEvents] = useState<EventItem[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        // login("alice@example.com", "password123").then(console.log).catch(console.error);
        getEvents()
            .then((data) => {
                setEvents(data.events);
            })
            .catch((err) => {
                setError(err instanceof Error ? err.message : "Something went wrong");
            })
            .finally(() => {
                setIsLoading(false);
            });
    }, []);

    if (isLoading) return <p>Loading events...</p>;
    if (error) return <p>Error: {error}</p>;
    if (events.length === 0) return <p>No events yet.</p>;

    return (
        <section>
            <h1>Events</h1>
            <ul>
                {events.map((event) => (<EventCard key={event.event_id} event={event} />))}
            </ul>
        </section>
        );
}