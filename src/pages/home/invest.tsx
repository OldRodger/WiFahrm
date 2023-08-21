import { INVESTMENTS } from "@/constants";
import InvestmentCard from "./invest-card";

function Invest() {
    return <section className="py-20 md:py-28">
        <div className="mx-auto w-5/6">
            <div>
                <div className="md:w-2/5">
                    <h1 className="text-4xl font-semibold capitalize">Invest in your convenience</h1>
                    <p className="mt-8">Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque ea quas, harum consequatur iusto ratione tempora.</p>
                </div>

                <div className="mt-20 flex gap-8 flex-col md:flex-row ">
                    {INVESTMENTS.map(investment => <InvestmentCard key={investment.id} {...investment} />)}
                </div>
            </div>
        </div>
    </section>;
}

export default Invest;