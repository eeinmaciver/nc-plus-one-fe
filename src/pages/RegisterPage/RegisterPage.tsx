import { useState, type SubmitEvent } from "react";
import { useNavigate } from "react-router";
import { useAuth } from "../../hooks/useAuth";

export default function RegisterPage () {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState<string | null>(null);
    const [isSubmitting, setIsSubmitting] = useState(false);

    const { register } = useAuth();
    const navigate = useNavigate();

    async function handleSubmit(e: SubmitEvent<HTMLFormElement>) {
        e.preventDefault();
        setError(null);
        setIsSubmitting(true);

        try {
            await register(name, email, password);
            navigate("/events");
        } catch (err) {
            setError(err instanceof Error ? err.message: "Registration failed");
        } finally {
            setIsSubmitting(false);
        }
    }

    return (
        <section>
            <h1>Register</h1>
            <form onSubmit={handleSubmit}>
                <label htmlFor="name">Name: </label>
                <input id="name"
                type="name" 
                value={name} 
                onChange={(e) => setName(e.target.value)}
                required
                autoComplete="name"
                />
                <br></br>
                <label htmlFor="email">Email: </label>
                <input id="email"
                type="email" 
                value={email} 
                onChange={(e) => setEmail(e.target.value)}
                required
                autoComplete="email"
                />
                <br></br>
                <label htmlFor="password">Password: </label>
                <input id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                autoComplete="new-password"
                />
                <br></br>
                <button type="submit" disabled={isSubmitting}>{isSubmitting ? "Registering..." : "Register"}</button>
            </form>
            {error && <p role="alert">{error}</p>}
        </section>
    );
}