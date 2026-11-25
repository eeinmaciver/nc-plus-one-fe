import { describe, test, expect } from "vitest";
import { render, screen} from "@testing-library/react";
import EventCard from "./EventCard";
import type { EventItem } from "../types";

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

describe("EventCard", () => {
    test("shows event title as heading", () => {
        render(<ul><EventCard event={testEvent} /></ul>);

        expect(
            screen.getByRole("heading", { name: "Counter-Strike 2 LAN Party"})
        ).toBeInTheDocument();
    });

    test("start time is formatted properly", () => {
        render(<ul><EventCard event={testEvent} /></ul>);

        expect(
            screen.getByText("Sun 20 Dec, 17:00")
        ).toBeInTheDocument();
    });

    test("missing description", () => {
        render(<ul><EventCard event={testEvent} /></ul>);

        expect(
            screen.getByText("Event description not available.")
        ).toBeInTheDocument();
    });
});