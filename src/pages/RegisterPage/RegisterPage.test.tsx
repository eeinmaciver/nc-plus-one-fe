import { describe, test, expect, vi, beforeEach} from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import RegisterPage from "./RegisterPage";
import { MemoryRouter, Routes, Route } from "react-router";
import { AuthContext, type AuthContextValue } from "../../context/AuthContext";

// check inputs and button exist
// successful login
// wrongs password error
// button disabled when submitting

const mockRegister = vi.fn<AuthContextValue["register"]>();

function renderRegister() {
    const fakeAuth: AuthContextValue = {
        token: null,
        isLoggedIn: false,
        login: vi.fn(),
        logout: vi.fn(),
        register: mockRegister,
    };

    render(
        <MemoryRouter initialEntries={["/register"]}>
            <AuthContext value={fakeAuth}>
                <Routes>
                    <Route path="/register" element={<RegisterPage/>} />
                    <Route path="/events" element={<h1>Events</h1>} />
                </Routes>
            </AuthContext>
        </MemoryRouter>
    );
}

beforeEach(() => {
    vi.resetAllMocks();
});


describe("RegisterPage", () => {
    test("register page has name, email and password inputs", () => {
        renderRegister(); 

        expect(screen.getByLabelText(/email/i)).toBeInTheDocument();
        expect(screen.getByLabelText(/password/i)).toBeInTheDocument();
        expect(screen.getByLabelText(/name/i)).toBeInTheDocument();
    });

    test("successful registration that redirects to /events", async () => {
        const user = userEvent.setup();
        mockRegister.mockResolvedValue();
        renderRegister();

        await user.type(screen.getByLabelText(/name/i), "Guy Mann");
        await user.type(screen.getByLabelText(/email/i), "guymann@business.com");
        await user.type(screen.getByLabelText(/password/i), "fakepassword");
        await user.click(screen.getByRole("button", { name: /register/i }));

        expect(mockRegister).toHaveBeenCalledWith("Guy Mann", "guymann@business.com", "fakepassword");
        expect(await screen.findByText("Events")).toBeInTheDocument();
    });

    // test("incorrect password displays error", async () => {
    //     const user = userEvent.setup();
    //     mockLogin.mockRejectedValue(new Error("Email not found or password incorrect"));
    //     renderLogin();

    //     await user.type(screen.getByLabelText(/email/i), "alice@example.com");
    //     await user.type(screen.getByLabelText(/password/i), "wrongpassword123");
    //     await user.click(screen.getByRole("button", { name: /login/i }));

    //     expect(await screen.findByRole("alert")).toHaveTextContent("Email not found or password incorrect");
    // });

    // test("incorrect password displays error", async () => {
    //     const user = userEvent.setup();
    //     mockLogin.mockReturnValue(new Promise (() => {}));
    //     renderLogin();

    //     await user.type(screen.getByLabelText(/email/i), "alice@example.com");
    //     await user.type(screen.getByLabelText(/password/i), "wrongpassword123");
    //     await user.click(screen.getByRole("button", { name: /login/i }));

    //     expect(await screen.findByRole("button", { name: /logging in/i})).toBeDisabled();
    // });

})