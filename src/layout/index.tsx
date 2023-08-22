import Navigation from "@/components/navigation";
import { NavProvider } from "@/context/navigation-context";
import { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";

function Root() {
    const [isTopOfPage, setIsTopOfPage] = useState(true);
    const [isNavOpen, setNavOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (scrollY !== 0) {
                setIsTopOfPage(false);
            }

            if (scrollY === 0) {
                setIsTopOfPage(true);
            }
        }
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [])

    const toggleNavOpen = () => {
        setNavOpen(!isNavOpen)
    }



    return (
        <>
            <NavProvider value={{
                isTopOfPage,
                isNavOpen,
                toggleNavOpen
            }}>
                <Navigation />
            </NavProvider>
            <main>
                <Outlet />
            </main>
            {/* <Footer /> */}
        </>
    );
}

export default Root;