import { describe, test, expect, vi, beforeEach} from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import LoginPage from "./LoginPage";
import { MemoryRouter, Routes, Route } from "react-router";
import { AuthContext, type AuthContextValue } from "../../context/AuthContext";

// check inputs and button exist
// successful login
// wrongs password error
// button disabled when submitting

const mockLogin = vi.fn<AuthContextValue["login"]>();

function renderLogin() {
    const fakeAuth: AuthContextValue = {
        token: null,
        isLoggedIn: false,
        login: mockLogin,
        logout: vi.fn(),
    };

    render(
        <MemoryRouter initialEntries={["/login"]}>
            <AuthContext value={fakeAuth}>
                <Routes>
                    <Route path="/login" element={<LoginPage/>} />
                    <Route path="/events" element={<h1>Events</h1>} />
                </Routes>
            </AuthContext>
        </MemoryRouter>
    );
}

beforeEach(() => {
    vi.resetAllMocks();
});


describe("LoginPage", () => {
    test("login page has email and password inputs", () => {
        renderLogin(); 

        expect(screen.getByLabelText(/email/i)).toBeInTheDocument();
        expect(screen.getByLabelText(/password/i)).toBeInTheDocument();
    });

    test("successful login that redirects to /events", async () => {
        const user = userEvent.setup();
        mockLogin.mockResolvedValue();
        renderLogin();

        await user.type(screen.getByLabelText(/email/i), "alice@example.com");
        await user.type(screen.getByLabelText(/password/i), "password123");
        await user.click(screen.getByRole("button", { name: /login/i }));

        expect(mockLogin).toHaveBeenCalledWith("alice@example.com", "password123");
        expect(await screen.findByText("Events")).toBeInTheDocument();
    });

    test("incorrect password displays error", async () => {
        const user = userEvent.setup();
        mockLogin.mockRejectedValue(new Error("Email not found or password incorrect"));
        renderLogin();

        await user.type(screen.getByLabelText(/email/i), "alice@example.com");
        await user.type(screen.getByLabelText(/password/i), "wrongpassword123");
        await user.click(screen.getByRole("button", { name: /login/i }));

        expect(await screen.findByRole("alert")).toHaveTextContent("Email not found or password incorrect");
    });

    test("incorrect password displays error", async () => {
        const user = userEvent.setup();
        mockLogin.mockReturnValue(new Promise (() => {}));
        renderLogin();

        await user.type(screen.getByLabelText(/email/i), "alice@example.com");
        await user.type(screen.getByLabelText(/password/i), "wrongpassword123");
        await user.click(screen.getByRole("button", { name: /login/i }));

        expect(await screen.findByRole("button", { name: /logging in/i})).toBeDisabled();
    });

})