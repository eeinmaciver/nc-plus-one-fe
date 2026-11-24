import { Route, Routes } from "react-router";
import Layout from "./components/Layout";
import EventsPage from "./pages/EventsPage";
import NotFoundPage from "./pages/NotFoundPage";


export default function AppRoutes() {

    return (
        <Routes>
            <Route element={<Layout />}>
                <Route index element={<EventsPage />} />
                <Route path="events" element={<EventsPage/>}/>
                <Route path="*" element={<NotFoundPage/>} />
            </Route>
        </Routes>
    )

}