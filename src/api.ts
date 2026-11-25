import type { EventsList } from "./types";
import type { EventDetailResponse } from "./types";

const BASE_URL = import.meta.env.VITE_API_URL ?? "http://localhost:8000/api";

export async function apiFetch<T>(path: string): Promise<T> {
    const response = await fetch(`${BASE_URL}${path}`, {
        headers: {"Content-Type": "application/json"}
    });

    //
    if (!response.ok) {
        const body = await response.json().catch(() => ({}));
        throw new Error(body.detail ?? `Request failed: ${response.status}`);
    }

    if (response.status === 204) return undefined as T;
    return response.json();
}

export function getEvents() {
    return apiFetch<EventsList>("/events")
}

export function getEventId(id: string) {
    return apiFetch<EventDetailResponse>(`/events/${id}`)
}