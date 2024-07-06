"use client";
import { useTheme } from "next-themes";
import Image from "next/image";
import { FaRegCheckCircle } from "react-icons/fa";
import { FaArrowRightLong } from "react-icons/fa6";

const GraphicDesign = () => {
    const { theme } = useTheme();
    return (
        <main className="">
            <section
                className={`bg-white dark:bg-[#183D3D] ${
                    theme == "light" ? "" : "dotstyle"
                }`}
            >
                <div
                    className={`py-10 lg:py-20 flex flex-col lg:flex-row items-center justify-between gap-20 container mx-auto`}
                >
                    <div className="lg:w-1/2">
                        <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold tracking-tight text-gray-900 dark:text-primary sm:text-4xl">
                            Graphic Design
                        </h2>
                        <p className="text-base text-primary dark:text-gray-200 md:text-lg whitespace-normal lg:max-w-xl">
                            Growolys creative arena, where graphic design
                            crosses borders to visually capture and transmit
                            your brands soul. Our talented graphic designers
                            specialised in creating eye-catching visual
                            identities that connect with your target audience.
                            From logos that tell your brands story to
                            eye-catching marketing collateral, we flawlessly
                            combine artistry and smart thinking. At Growoly, we
                            understand the significance of images in delivering
                            messages, thus we make certain that each design
                            element flows effortlessly with your brand
                            narrative. Elevate your brands aesthetics with our
                            inventive graphic design solutions, designed to
                            leave a lasting impression and develop a strong
                            visual identity in the competitive digital market.
                            Choose Growoly for a visual experience that turns
                            ideas into breathtaking reality.
                        </p>
                        <section className="mt-8 grid grid-cols-2 gap-5">
                            <div className="flex items-center gap-3">
                                <div>
                                    <FaRegCheckCircle className="text-2xl dark:text-primary" />
                                </div>
                                <p className="font-semibold">
                                    Custom Visual Identity
                                </p>
                            </div>
                            <div className="flex items-center gap-3">
                                <div>
                                    <FaRegCheckCircle className="text-2xl dark:text-primary" />
                                </div>
                                <p className="font-semibold">
                                    Creative Graphic Solutions
                                </p>
                            </div>
                            <div className="flex items-center gap-3">
                                <div>
                                    <FaRegCheckCircle className="text-2xl dark:text-primary" />
                                </div>
                                <p className="font-semibold">
                                    Templates and Presets
                                </p>
                            </div>
                            <div className="flex items-center gap-3">
                                <div>
                                    <FaRegCheckCircle className="text-2xl dark:text-primary" />
                                </div>
                                <p className="font-semibold">
                                    User-Centric Design
                                </p>
                            </div>
                            <div className="flex items-center gap-3">
                                <div>
                                    <FaRegCheckCircle className="text-2xl dark:text-primary" />
                                </div>
                                <p className="font-semibold">
                                    Print and Digital Integration
                                </p>
                            </div>
                            <div className="flex items-center gap-3">
                                <div>
                                    <FaRegCheckCircle className="text-2xl dark:text-primary" />
                                </div>
                                <p className="font-semibold">Image Editing</p>
                            </div>
                            <div className="flex items-center gap-3">
                                <div>
                                    <FaRegCheckCircle className="text-2xl dark:text-primary" />
                                </div>
                                <p className="font-semibold">Logo Design</p>
                            </div>
                            <div className="flex items-center gap-3">
                                <div>
                                    <FaRegCheckCircle className="text-2xl dark:text-primary" />
                                </div>
                                <p className="font-semibold">Vector Design</p>
                            </div>
                        </section>
                    </div>
                    <div className="mb-5 mx-auto">
                        <Image
                            src="https://images.pexels.com/photos/955798/pexels-photo-955798.jpeg?auto=compress&cs=tinysrgb&w=600"
                            alt="image"
                            height={300}
                            width={600}
                            className="lg:w-auto lg:h-[700px] md:h-[500px] h-[300px]"
                        />
                    </div>
                </div>
            </section>

            {/* Step Section */}
            <section className="bg-white dark:bg-[#040D12] dark:text-[#4d9d30] md:py-20 py-10">
                <div className="py-16 mx-auto lg:py-20 container">
                    <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-20">
                        <div>
                            <p className="inline-block px-3 py-px mb-4 text-lg bg-[#BFD8AF]  font-semibold tracking-wider text-teal-900 uppercase rounded-full bg-teal-accent-400">
                                working process
                            </p>
                        </div>
                        <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-primary sm:text-4xl md:mx-auto">
                            <span className="relative inline-block">
                                <svg
                                    viewBox="0 0 52 24"
                                    fill="currentColor"
                                    className="absolute top-0 left-0 z-0 hidden w-32 -mt-8 -ml-20 text-blue-gray-100 lg:w-32 lg:-ml-28 lg:-mt-10 sm:block"
                                >
                                    <defs>
                                        <pattern
                                            id="b902cd03-49cc-4166-a0ae-4ca1c31cedba"
                                            x="0"
                                            y="0"
                                            width=".135"
                                            height=".30"
                                        >
                                            <circle cx="1" cy="1" r=".7" />
                                        </pattern>
                                    </defs>
                                    <rect
                                        fill="url(#b902cd03-49cc-4166-a0ae-4ca1c31cedba)"
                                        width="52"
                                        height="24"
                                    />
                                </svg>
                                <span className="relative">
                                    The process we working through !
                                </span>
                            </span>
                        </h2>
                    </div>
                    <div className="flex flex-col lg:flex-row gap-5">
                        <div
                            className={`p-5 dark:bg-[#1B4242] ${
                                theme == "light" ? "" : "boxglow"
                            } lg:w-[300px] md:w-1/2 w-full mx-auto border-2 dark:border hover:scale-110 transition-all duration-200 border-[#BFD8AF] rounded-lg bg-[#EEEEEE] shadow-lg`}
                        >
                            <div className="flex items-center justify-between mb-6">
                                <p className="text-2xl font-bold dark:text-primary">
                                    Step 1
                                </p>
                            </div>
                            <p className="text-gray-600 dark:text-gray-200">
                                At first, We try to Understanding client
                                requirements, target audience, and project
                                objectives through thorough research and
                                analysis.
                            </p>
                        </div>
                        <div className="flex items-center justify-center">
                            <FaArrowRightLong className="text-3xl lg:rotate-0 rotate-90" />
                        </div>
                        <div
                            className={`p-5 dark:bg-[#1B4242] ${
                                theme == "light" ? "" : "boxglow"
                            } lg:w-[300px] md:w-1/2 w-full mx-auto border-2 dark:border hover:scale-110 transition-all duration-200 border-[#BFD8AF] rounded-lg bg-[#EEEEEE] shadow-lg`}
                        >
                            <div className="flex items-center justify-between mb-6">
                                <p className="text-2xl font-bold dark:text-primary">
                                    Step 2
                                </p>
                            </div>
                            <p className="text-gray-600 dark:text-gray-200">
                                After that, Our creative designer Generating
                                creative ideas and concepts based on the
                                gathered information and client requerments,
                                exploring various design directions.
                            </p>
                        </div>
                        <div className="flex items-center justify-center">
                            <FaArrowRightLong className="text-3xl lg:rotate-0 rotate-90" />
                        </div>
                        <div
                            className={`p-5 dark:bg-[#1B4242] ${
                                theme == "light" ? "" : "boxglow"
                            } lg:w-[300px] md:w-1/2 w-full mx-auto border-2 dark:border hover:scale-110 transition-all duration-200 border-[#BFD8AF] rounded-lg bg-[#EEEEEE] shadow-lg`}
                        >
                            <div className="flex items-center justify-between mb-6">
                                <p className="text-2xl font-bold dark:text-primary">
                                    Step 3
                                </p>
                            </div>
                            <p className="text-gray-600 dark:text-gray-200">
                                Third, Our highly qualified designer Bringing
                                concepts to life through the use of design tools
                                and techniques, refining and iterating on drafts
                                to achieve the desired outcome.
                            </p>
                        </div>
                        <div className="flex items-center justify-center">
                            <FaArrowRightLong className="text-3xl lg:rotate-0 rotate-90" />
                        </div>
                        <div
                            className={`p-5 dark:bg-[#1B4242] ${
                                theme == "light" ? "" : "boxglow"
                            } lg:w-[300px] md:w-1/2 w-full mx-auto border-2 dark:border hover:scale-110 transition-all duration-200 border-[#BFD8AF] rounded-lg bg-[#EEEEEE] shadow-lg`}
                        >
                            <div className="flex items-center justify-between mb-6">
                                <p className="text-2xl font-bold dark:text-primary">
                                    Step 4
                                </p>
                            </div>
                            <p className="text-gray-600 dark:text-gray-200">
                                At last we Presenting the final design to the
                                client for review and feedback, making necessary
                                revisions to ensure satisfaction before final
                                delivery.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default GraphicDesign;
