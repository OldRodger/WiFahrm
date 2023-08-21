import { Bars3BottomRightIcon } from "@heroicons/react/24/solid";

function MobileNav() {
    return <div className="fixed top-5 right-9 inline-block p-3 rounded-full bg-primary-500" >
        <Bars3BottomRightIcon className="w-8 h-8 text-white" />
    </div>;
}

export default MobileNav;