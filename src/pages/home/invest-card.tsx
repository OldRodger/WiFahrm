import { investmentType } from "@/shared/types";
import { Link } from "react-router-dom";


function InvestmentCard({ topic, title, description, buttonText, id, path }: investmentType) {
    const cardBackground = id === 1 ? "bg-invest-background-1" : "bg-invest-background-2";

    return <figure className={`flex-1 px-10 py-12 rounded-lg shadow-md text-white bg-cover ${cardBackground}`}>
        <div>
            <h4 className=" text-primary-300 text-md uppercase after:block after:w-1/6 after:h-1 after:bg-white after:rounded-md after:mt-3">{topic}</h4>
            <div className="sm:w-2/5">
                <h1 className="text-3xl font-semibold mt-10 leading-normal">{title}</h1>
            </div>

            <p className="w-3/5 text-sm mt-5">{description}</p>
        </div>

        <div className="mt-10">
            <Link
                className="text-primary-300 bg-white py-3 px-8 rounded-md"
                to={path}
            >
                {buttonText}
            </Link>
        </div>

    </figure>
}

export default InvestmentCard;