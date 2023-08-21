import { BENEFITS } from "@/constants";
import BenefitCard from "./benefit-card";

function Benefits() {


    return <section className="bg-benefits-background bg-top bg-cover">
        <div className="pt-20 pb-16 md:pb   -28 mx-auto w-5/6 border-b-2 border-gray-100">
            <div>
                {/* HEADING AND BENEFITS*/}
                <div>
                    {/* HEADING */}
                    <div className="text-center sm:w-2/5 mx-auto">
                        <h1 className="font-semibold text-4xl">New Opportunities</h1>
                        <p className="mt-8">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum sequi harum totam non perspiciatis expedita pariatur.
                        </p>
                    </div>
                </div>
                <div className="mt-20 flex flex-col md:flex-row mx-auto gap-8 ">
                    {/* BENEFITS */}
                    {BENEFITS.map(({ title, description, icon, isActive }) => <BenefitCard
                        key={title}
                        icon={icon}
                        title={title}
                        description={description}
                        isActive={isActive} />

                    )}
                </div>
            </div>
        </div>
    </section>;
}

export default Benefits;