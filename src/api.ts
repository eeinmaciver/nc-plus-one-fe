import { type LoginResponse, type EventsList, type EventDetailResponse, type RegisterResponse,  } from "./types";

const BASE_URL = import.meta.env.VITE_API_URL ?? "http://localhost:8000/api";

interface ApiMethods {
    method?: "GET" | "POST" | "PATCH" | "DELETE";
    body?: unknown;
    token?: string | null;
}

export async function apiFetch<T>(path: string, methods: ApiMethods = {}): Promise<T> {
    const { method = "GET", body, token } = methods

    const headers: Record<string, string> = {};
    if (body !== undefined) headers["Content-Type"] = "application/json";
    if (token) headers["Authorization"] = `Bearer ${token}`;

    const response = await fetch(`${BASE_URL}${path}`, {
        method: method,
        body: body !== undefined ? JSON.stringify(body) : undefined,
        headers: headers,
    });

    if (!response.ok) {
        const backEndError = await response.json().catch(() => ({}));
        throw new Error(backEndError.error ?? `Request failed: ${response.status}`);
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

export function login(email: string, password: string) {
    return apiFetch<LoginResponse>("/auth/login", {method: "POST", body: { email, password },});
}

export function register(name: string, email: string, password: string) {
    return apiFetch<RegisterResponse>("/auth/register", {method: "POST", body: { name, email, password }});
}