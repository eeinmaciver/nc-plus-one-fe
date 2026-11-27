import { describe, test, expect } from "vitest";
import { formatDate } from "./formatDate";

describe("formatDate", () => {
    test("formats an ISO date to a more readable format", () => {
        expect(formatDate("2026-06-18T18:30:00+01:00")).toBe("Thu 18 Jun, 18:30");
    });
});