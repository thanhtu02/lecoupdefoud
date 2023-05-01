import { ShoppingCartIcon, XMarkIcon } from "@heroicons/react/24/solid";
import { Link, Outlet, useLocation } from "react-router-dom";
import { useLayoutEffect } from "react";
import FooterPage from "./footer";
import HeaderPage from "./header";
import CartProvider from "../store/cartcontext";

const Wrapper = ({ children }) => {
    const location = useLocation();
    useLayoutEffect(() => {
        document.documentElement.scrollTo(0, 0);
    }, [location.pathname]);
    return children
}

const Layout = () => {
    return <div>
        <Wrapper>
            <CartProvider>
                <HeaderPage />
                <div> <Outlet /> </div>
                <FooterPage />
            </CartProvider>
        </Wrapper>
    </div>
}

export default Layout;