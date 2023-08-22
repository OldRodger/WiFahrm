import { Image7 } from "@/assets";

function Hero() {
    return <header className=" py-10 md:bg-hero-background bg-center bg-cover h-full">
        <div className="w-5/6 mx-auto h-full items-center md:h-5/6 md:flex">
            {/* MAIN HEADER */}
            <div className="md:basis-3/5 mt-20 md:mt-0 flex items-center">
                <div className="sm:w-3/5 ">
                    <h1 className="text-4xl font-semibold capitalize">a new way to invest in agriculture</h1>
                    <p className="mt-4">
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Earum deleniti eos itaque perferendis cumque, nisi temporibus magnam.
                    </p>
                    <button className="text-white mt-8 py-3 px-8 bg-primary-300 rounded-md">
                        Invest Now
                    </button>
                </div>
            </div>

            {/* IMAGE */}
            <div className="flex basis-3/5 justify-center md:mt-16 md:justify-items-end">
                <img src={Image7} alt="home-page-graphic" className="scale-90" />
            </div>
        </div>
    </header>;
}

export default Hero;    