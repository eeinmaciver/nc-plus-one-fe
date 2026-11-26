import { Route, Routes } from "react-router";
import Layout from "./components/Layout";
import EventsPage from "./pages/EventsPage/EventsPage";
import NotFoundPage from "./pages/NotFoundPage";
import EventDetailPage from "./pages/EventDetailPage";
import HomePage from "./pages/Homepage";
import LoginPage from "./pages/LoginPage/LoginPage";

export default function AppRoutes() {

    return (
        <Routes>
            <Route element={<Layout />}>
                <Route index element={<HomePage />} />
                <Route path="events" element={<EventsPage/>}/>
                <Route path="events/:event_id" element={<EventDetailPage/>}/>
                <Route path="login" element={<LoginPage/>} />
                <Route path="*" element={<NotFoundPage/>} />
            </Route>
        </Routes>
    )

}