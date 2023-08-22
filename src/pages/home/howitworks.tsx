import { HOW_IT_WORKS } from '@/constants';
import { useEffect, useState } from 'react';


function HowItWorks() {

    const [active, setActive] = useState(0);
    const how_it_works_length = HOW_IT_WORKS.length - 1;

    useEffect(() => {
        const timeout = setTimeout(() => {
            setActive(active + 1);
            if (active === how_it_works_length) {
                setActive(0);
            }
        }, 7000)

        return () => clearTimeout(timeout)
    }, [active, how_it_works_length])






    const handleActiveChange = (id: number) => {
        setActive(id);
    }

    let horizontal_active_progress: string = "hidden absolute w-0 h-0.5 top-1/2 -translate-y-1/2 bg-white transition-all duration-500 ease-out md:block";
    let vertical_active_progress: string = "absolute w-0.5 h-0 left-1/2 -translate-x-1/2 bg-white transition-all duration-500 ease-out md:hidden";

    if (active > 0 && active < how_it_works_length) {
        const width = `w-${active}/${how_it_works_length}`;
        const height = `h-${active}/${how_it_works_length}`;
        horizontal_active_progress = `hidden absolute ${width} h-0.5 top-1/2 -translate-y-1/2 bg-white transition-all duration-500 ease-out md:block`;
        vertical_active_progress = `absolute w-0.5 ${height} left-1/2 -translate-x-1/2 bg-white transition-all duration-500 ease-out md:hidden`;
    }

    if (active === how_it_works_length) {
        horizontal_active_progress = "hidden absolute w-full h-0.5 top-1/2 -translate-y-1/2 bg-white transition-all duration-500 ease-out md:block";
        vertical_active_progress = "absolute w-0.5 h-full left-1/2 -translate-x-1/2 bg-white transition-all duration-500 ease-out md:hidden";
    }




    return <section className='mt-20'>
        <div className="mx-auto bg-primary-300 md:rounded-lg md:w-11/12">
            <div className="py-20">
                <div className="w-5/6 md:w-1/2 mx-auto">
                    <div className="text-left md:text-center text-white mb-10">
                        <h1 className="text-3xl font-semibold mb-5">How it works</h1>
                        <p className="text-sm leading-relaxed">Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat, aliquam iste ratione culpa, repellendus unde, necessitatibus non ad tenetur voluptatum dolorum atque in. Placeat, amet quod est rerum corporis molestias!</p>
                    </div>
                    <div className='flex gap-5 flex-row md:flex-col sm:gap-10 md:gap-0'>
                        {/* PROGRESS */}
                        <div className="relative h-[26rem] flex flex-col justify-between md:h-fit md:flex-row md:mb-10">
                            {/* PROGRESS LINE NOT ACTIVE */}
                            <div className="absolute h-full w-[0.2px] bg-gray-300 translate-x-1/2 left-1/2 md:left-0 md:top-1/2 md:-translate-y-1/2 md:translate-x-0 md:w-full md:h-[0.2px] "></div>
                            {/* PROGRESS LINE ACTIVE */}
                            <div className={horizontal_active_progress}></div>
                            <div className={vertical_active_progress}></div>
                            {/* h-0.5 bg-red-700 absolute top-1/2 -translate-y-1/2 */}

                            {/* STEPS */}
                            {HOW_IT_WORKS.map(({ id }) => <button
                                key={id}
                                type="button"
                                className={id <= active ? 'step-active' : 'step-inactive'}
                                onClick={() => handleActiveChange(id)}
                            >{`0${id + 1}`}</button>)}

                        </div>

                        {/* TITLE AND DESCRIPTION */}
                        <div className="flex-1 flex flex-col justify-center md:items-center gap-3 text-white md:flex-row md:justify-between md:gap-10">
                            {/* TITLE */}
                            <h4 className='text-2xl font-semibold md:basis-1/3'>
                                {HOW_IT_WORKS[active].title}
                            </h4>

                            {/* DESCRIPTION */}
                            <p className='text-sm font-thin leading-relaxed md:basis-2/3'>{HOW_IT_WORKS[active].description}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>;
}

export default HowItWorks;