import Image from "next/image";

export default function Details() {
    return (
        <div className={`flex w-full flex-col px-6 py-12 md:px-28`}>
            <div className="flex flex-col-reverse md:flex-row items-start justify-center gap-x-24 px-4  gap-y-16 md:gap-y-28">
                {/* Image Section */}
                <img
                    className="w-full md:w-[675px] h-[350px] md:h-[607px] rounded-lg object-cover object-center"
                    src="/img/p2.png"
                    loading="lazy"
                    alt="Library Stool Chair"
                />
        
                {/* Text and Details Section */}
                <div className="font-inter flex flex-grow flex-col items-start gap-y-8 tracking-[0px] text-black max-w-[545px]">
                    {/* Title */}
                    <div className="flex w-full items-start text-4xl md:text-[60px] font-bold capitalize leading-[1.1]">
                        <p>Library Stool Chair</p>
                    </div>
        
                    {/* Price */}
                    <div className="rounded-[100px] bg-[#1eabb0] px-4 py-2 text-center text-xl font-semibold capitalize leading-[1.1] text-white">
                        $20.00 USD
                    </div>

                    {/* Divider Line */}
                    <div className="w-full h-[1px] bg-gray-400 mt-5"></div>
        
                    {/* Description */}
                    <div className="self-stretch pl-0.5 pt-7">
                        <div className="flex items-center text-xl md:text-[22px] text-[#272343] font-normal leading-normal">
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam tincidunt erat enim. Lorem ipsum dolor sit amet, consectetur adipiscing.
                            </p>
                        </div>
                    </div>
        
                    {/* Add to Cart Button */}
                    <div className="flex items-center mt-6">
                        <div className="flex items-center justify-center gap-x-[9px] rounded-lg bg-[#1eabb0] px-7 py-[17px]">
                            {/* SVG Icon */}
                            <Image src={'/img/cart2.png'} width={29} height={29} alt="" className="text-white"/>
                            {/* Button Text */}
                            <div className="text-xl font-semibold capitalize leading-[1.1] text-white">
                                Add to Cart
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Header Section */}
            <div className="pt-16 md:pt-36 flex items-center justify-between gap-x-8 font-bold leading-[normal] text-2xl md:text-[28px] uppercase tracking-[3.2px]">
                <div>Featured Products</div>
                <div className="flex flex-col items-center gap-y-[7px]">
                    <div className="text-lg text-center">View all</div>
                    {/* Divider Line */}
                    <div className="h-0.5 bg-gray-400 w-full"></div>
                </div>
            </div>

            {/* Product Items Section */}
            <div className="pt-12 md:pt-20 flex flex-wrap items-center justify-center gap-x-2 pb-28 gap-y-6 md:gap-y-[26px] capitalize leading-[1.3] text-black">
                {/* Product Card 1 */}
                <div className="flex flex-col items-start gap-y-3.5 w-full md:w-[250px]">
                    <div className="bg-image h-[270px] w-full md:w-[250px] rounded-md bg-cover bg-center">
                        <img
                            src="/img/p5.png"
                            alt="Library Stool Chair"
                            className="h-full w-full object-cover"
                        />
                    </div>
                    <div className="flex items-center justify-between w-full mt-3">
                        <div className="text-indigo-950 text-sm md:text-base">
                            Library Stool Chair
                        </div>
                        <div className="flex items-center justify-center h-11 w-11 rounded-lg bg-[#ffffff] text-black text-lg font-semibold">
                            $20
                        </div>
                    </div>
                </div>

                {/* Product Card 2 */}
                <div className="flex flex-col items-start gap-y-3.5 w-full md:w-[250px]">
                    <div className="bg-image h-[270px] w-full md:w-[250px] rounded-md bg-cover bg-center">
                        <img
                            src="/img/p1.png"
                            alt="Library Stool Chair"
                            className="h-full w-full object-cover"
                        />
                    </div>
                    <div className="flex items-center justify-between w-full mt-3">
                        <div className="text-indigo-950 text-sm md:text-base">
                            Library Stool Chair
                        </div>
                        <div className="flex items-center justify-center h-11 w-11 rounded-lg bg-[#ffffff] text-black  text-lg font-semibold">
                            $20
                        </div>
                    </div>
                </div>

                {/* Product Card 3 */}
                <div className="flex flex-col items-start gap-y-3.5 w-full md:w-[250px]">
                    <div className="bg-image h-[270px] w-full md:w-[250px] rounded-md bg-cover bg-center">
                        <img
                            src="/img/top3.png"
                            alt="Library Stool Chair"
                            className="h-full w-full object-cover"
                        />
                    </div>
                    <div className="flex items-center justify-between w-full mt-3">
                        <div className="text-indigo-950 text-sm md:text-base">
                            Library Stool Chair
                        </div>
                        <div className="flex items-center justify-center h-11 w-11 rounded-lg bg-[#ffffff] text-black  text-lg font-semibold">
                            $20
                        </div>
                    </div>
                </div>

                {/* Product Card 4 */}
                <div className="flex flex-col items-start gap-y-3.5 w-full md:w-[250px]">
                    <div className="bg-image h-[270px] w-full md:w-[250px] rounded-md bg-cover bg-center">
                        <img
                            src="/img/item1.png"
                            alt="Library Stool Chair"
                            className="h-full w-full object-cover"
                        />
                    </div>
                    <div className="flex items-center justify-between w-full mt-3">
                        <div className="text-indigo-950 text-sm md:text-base">
                            Library Stool Chair
                        </div>
                        <div className="flex items-center justify-center h-11 w-11 rounded-lg bg-[#ffffff] text-black  text-lg font-semibold">
                            $20
                        </div>
                    </div>
                </div>

                {/* Product Card 5 */}
                <div className="flex flex-col items-start gap-y-3.5 w-full md:w-[250px]">
                    <div className="bg-image h-[270px] w-full md:w-[250px] rounded-md bg-cover bg-center">
                        <img
                            src="/img/top1.png"
                            alt="Library Stool Chair"
                            className="h-full w-full object-cover"
                        />
                    </div>
                    <div className="flex items-center justify-between w-full mt-3">
                        <div className="text-indigo-950 text-sm md:text-base">
                            Library Stool Chair
                        </div>
                        <div className="flex items-center justify-center h-11 w-11 rounded-lg bg-[#ffffff] text-black  text-lg font-semibold">
                            $20
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

