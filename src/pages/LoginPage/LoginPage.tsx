import { useState, type SubmitEvent } from "react";
import { useNavigate } from "react-router";
import { useAuth } from "../../hooks/useAuth";



export default function LoginPage () {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState<string | null>(null);
    const [isSubmitting, setIsSubmitting] = useState(false);

    const { login } = useAuth();
    const navigate = useNavigate();

    async function handleSubmit(e: SubmitEvent<HTMLFormElement>) {
        e.preventDefault();
        setError(null);
        setIsSubmitting(true);

        try {
            await login(email, password);
            navigate("/events");
        } catch (err) {
            setError(err instanceof Error ? err.message: "Login failed");
        } finally {
            setIsSubmitting(false);
        }
    }

    return (
        <section>
            <h2>Sign In</h2>
            <form onSubmit={handleSubmit}>
                <label htmlFor={email}>Email: </label>
                <input id="email"
                type="email" 
                value={email} 
                onChange={(e) => setEmail(e.target.value)}
                />
                <br></br>
                <label htmlFor={password}>Password: </label>
                <input id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                />
                <br></br>
                <button type="submit" disabled={isSubmitting}>Login</button>
            </form>
            {error && <p role="alert">{error}</p>}
        </section>
    );

}