import { Route, Routes } from "react-router";
import Layout from "./components/Layout";
import EventsPage from "./pages/EventsPage/EventsPage";
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage";
import EventDetailPage from "./pages/EventDetailPage/EventDetailPage";
import HomePage from "./pages/Homepage/Homepage";
import LoginPage from "./pages/LoginPage/LoginPage";
import RegisterPage from "./pages/RegisterPage/RegisterPage";

export default function AppRoutes() {

    return (
        <Routes>
            <Route element={<Layout />}>
                <Route index element={<HomePage />} />
                <Route path="events" element={<EventsPage/>}/>
                <Route path="events/:event_id" element={<EventDetailPage/>}/>
                <Route path="login" element={<LoginPage/>} />
                <Route path="register" element={<RegisterPage/>} />
                <Route path="*" element={<NotFoundPage/>} />
            </Route>
        </Routes>
    )
}