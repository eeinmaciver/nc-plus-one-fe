import { Route, Routes } from "react-router";
import Layout from "./components/Layout";
import EventsPage from "./pages/EventsPage";
import NotFoundPage from "./pages/NotFoundPage";
import EventDetailPage from "./pages/EventDetailPage";


export default function AppRoutes() {

    return (
        <Routes>
            <Route element={<Layout />}>
                <Route index element={<EventsPage />} />
                <Route path="events" element={<EventsPage/>}/>
                <Route path="events/:event_id" element={<EventDetailPage/>}/>
                <Route path="*" element={<NotFoundPage/>} />
            </Route>
        </Routes>
    )

}