import { NavLink, Outlet } from "react-router";
import { useAuth } from "../hooks/useAuth";




export default function Layout() {

    const { isLoggedIn, logout} = useAuth();
    
    return (
        <>
            <header>
                <nav>
                    <NavLink to="/">Home</NavLink>
                    &nbsp;
                    <NavLink to="/events">Events</NavLink>
                    &nbsp;
                    {isLoggedIn ? (<button onClick={logout}>Log out</button>
                ) : (<>
                <NavLink to="/login">Login</NavLink>
                &nbsp;
                <NavLink to="/register">Register</NavLink>
                </>)}
                </nav>
            </header>
            <main>
                <Outlet/>
            </main>
        </>
    )
}