import { Outlet } from "react-router-dom";
import {lazy, Suspense} from "react";

const Header = lazy( () => import('../components/common/Header'));
const Footer = lazy( () => import('../components/common/Footer'));

const PublicLayout = () => {
    return(
        <div className="public">
            <Suspense fallback={''}><Header /></Suspense>
            <Outlet />
            <Suspense fallback={''}><Footer /></Suspense>
        </div>
    )
}
export default PublicLayout;