import { describe, test, expect } from "vitest";
import { render, screen} from "@testing-library/react";
import type { EventItem } from "../../types";
import { getEvents } from "../../api";
import EventsPage from "./EventsPage";
import { vi } from "vitest";
import { MemoryRouter } from "react-router";

vi.mock("../../api");

const mockEvents = vi.mocked(getEvents);

const testEvent: EventItem = {
    event_id: 1,
    title: "Counter-Strike 2 LAN Party",
    description: null,
    starts_at: "2026-12-20T17:00:00",
    ends_at: "2026-12-20T23:00:00",
    organiser_id: 1,
    venue_id: 1,
    created_at: "2026-11-25T11:50:00",
};

describe("EventsPage", () => {
    test("displays event card when loaded", async () => {
        mockEvents.mockResolvedValue({ events: [testEvent] });
        render(<MemoryRouter><EventsPage/></MemoryRouter>);
        expect(await screen.findByRole("heading", { name: "Counter-Strike 2 LAN Party"})).toBeInTheDocument();
    });
});