import { NavLink, Outlet } from "react-router";


export default function Layout() {
    return (
        <>
            <header>
                <nav>
                    <NavLink to="/">NC Plus One</NavLink>
                    <NavLink to="/events">Events</NavLink>
                </nav>
            </header>
            <main>
                <Outlet/>
            </main>
        </>
    )
}