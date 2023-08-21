import Navigation from "@/components/navigation";
import { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";

function Root() {
    const [isTopOfPage, setIsTopOfPage] = useState(true);

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



    return (
        <>
            <Navigation isTopOfPage={isTopOfPage} />
            <main>
                <Outlet />
            </main>
            {/* <Footer /> */}
        </>
    );
}

export default Root;