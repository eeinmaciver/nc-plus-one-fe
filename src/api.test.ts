import { describe, test, expect, vi, afterEach } from "vitest";
import { apiFetch } from "./api";



afterEach(() => {
    vi.restoreAllMocks();
});

describe("apiFetch", () => {
    test("sends method, JSON body and bearer token", async () => {
        const fetchSpy = vi.spyOn(globalThis, "fetch").mockResolvedValue(
            new Response(JSON.stringify({ ok: true }), { status: 200 })
        );

        await apiFetch("/auth/login", {
            method: "POST",
            body: { email: "email@email.com"},
            token: "faketoken123",
        });

        const [url, init] = fetchSpy.mock.calls[0];
        expect(url).toBe("http://localhost:8000/api/auth/login");
        expect(init?.method).toBe("POST");
        expect(init?.body).toBe(JSON.stringify({ email: "email@email.com" }));
        expect(init?.headers).toEqual({
            "Content-Type": "application/json",
            Authorization: "Bearer faketoken123",
        });
    });

    test("GET with no headers or body", async () => {
        const fetchSpy = vi.spyOn(globalThis, "fetch").mockResolvedValue(
            new Response(JSON.stringify({ ok: true }), { status: 200 })
        );

        await apiFetch("/events");

        const [, init] = fetchSpy.mock.calls[0];
        expect(init?.method).toBe("GET");
        expect(init?.headers).toEqual({});
        expect(init?.body).toBe(undefined);
    });

    test("throws error when response is not ok", async () => {
        vi.spyOn(globalThis, "fetch").mockResolvedValue(
            new Response(JSON.stringify({ error: "Event not found" }), { status: 404 })
        );
        await expect(apiFetch("/events/999")).rejects.toThrow("Event not found");
    });

    test("return undefined for 204 response", async () => {
        vi.spyOn(globalThis, "fetch").mockResolvedValue(
            new Response(null, { status: 204 })
        );
        await expect(apiFetch("/events/1/rsvp/me", { method: "DELETE"})).resolves.toBe(undefined);
    });

});