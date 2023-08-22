import Footer from "@/components/footer";
import Navigation from "@/components/navigation";
import { NavProvider } from "@/context/navigation-context";
import Home from "@/pages/home";
import { useEffect, useState } from "react";

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
                <main>
                    <Home />
                </main>
                <Footer />
            </NavProvider>
        </>
    );
}

export default Root;