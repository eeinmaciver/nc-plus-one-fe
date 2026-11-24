const BASE_URL = import.meta.env.VITE_API_URL ?? "http://localhost:8000/api";

export async function apiFetch<T>(path: string): Promise<T> {
    const res = await fetch(`${BASE_URL}${path}`, {
        headers: {"Content-Type": "application/json"}
    });

    //
    if (!res.ok) {
        const body = await res.json().catch(() => ({}));
        throw new Error(body.detail ?? `Request failed: ${res.status}`);
    }

    if (res.status === 204) return undefined as T;
    return res.json();
}