import { createBrowserRouter } from "react-router-dom";
import App from "../layout/App";
import HomePage from "../../features/home/HomePage";
import ContactPage from "../../features/contact/ContactPage";
import Catalog from "../../features/catalog/Catalog";
import AboutPage from "../../features/about/AboutPage";
import ProductDetail from "../../features/catalog/ProductDetail";

export const router = createBrowserRouter([
    {
        path: '/', element: <App />, children: [
            { path: '', element: <HomePage/> },
            { path: '/catalog', element: <Catalog/> },
            { path: '/catalog/:id', element: <ProductDetail/> },
            { path: '/contact', element: <ContactPage/> },
            { path: '/about', element: <AboutPage/> },
        ]
    }
])