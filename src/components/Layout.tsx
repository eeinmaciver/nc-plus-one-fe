import { NavLink, Outlet } from "react-router";
import { useAuth } from "../hooks/useAuth";




export default function Layout() {

    const { isLoggedIn, login, logout} = useAuth();
    
    return (
        <>
            <header>
                <nav>
                    <NavLink to="/">Home</NavLink>
                    &nbsp;
                    <NavLink to="/events">Events</NavLink>
                    {isLoggedIn ? (<button onClick={logout}>Log out</button>
                ) : (<button onClick={() => login("alice@example.com", "password123")}>Login</button>)}
                </nav>
            </header>
            <main>
                <Outlet/>
            </main>
        </>
    )
}