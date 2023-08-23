import { footerConstantType, navLinkType } from "@/shared/types";
import { ChevronDownIcon } from "@heroicons/react/24/solid";
import { useState } from 'react';
import { Link } from "react-router-dom";

function FooterItem({ links, title }: footerConstantType) {
    const [open, setOpen] = useState(false);
    const linksStyle = open ?
        "h-auto" :
        "h-0 md:h-auto";

    const iconStyle = open ? "-rotate-180" : "rotate-0 ";

    return <ul className="space-y-5 border-b-2 py-4 md:border-b-0 md:py-0">
        <div className="flex items-center justify-between">
            <li className="uppercase md:font-semibold">{title}</li>
            <ChevronDownIcon className={`${iconStyle} w-5 h-5 transform transition-transform duration-300 ease-out md:hidden`} onClick={() => setOpen(!open)} />
        </div>
        <div className={`${linksStyle} space-y-5 overflow-hidden text-gray-500`}>
            {links.map(({ id, path, title }: navLinkType) => <li key={id}>
                <Link to={path}>{title}</Link>
            </li>)}
        </div>
    </ul>
}

export default FooterItem;