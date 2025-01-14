"use client";

import { useEffect, useState } from "react";
import { client } from "@/sanity/lib/client";
import Image from "next/image";
import Link from "next/link";

// Define types for the data
interface BlogData {
  title: string;
  imageUrl: string;
  currentSlug: string;
  sd: string;
  ld: string;
  name:string;
  description:string;
}
export default function FeaturedProducts() {
  const [data, setData] = useState<BlogData[]>([]);

  // Fetch data on component mount
  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await client.fetch(`*[_type == 'product']{
          name,
          "imageUrl": image.asset->url,
          "currentSlug": slug.current,
          sd,
          description
        }`);
        setData(result); // Store the fetched data in state
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []); 
    return (
      <div
        className={`font-inter flex w-full flex-col items-start gap-y-11 space-x-5 pt-[4.5px] capitalize tracking-[0px] py-20 md:px-20 px-5`}
      >
        <div className="text-[32px] font-semibold leading-[1.1]  text-indigo-950">
          Featured Products
        </div>
        {data.map((val, i) => (
        <div key={i} className="flex flex-grow flex-wrap items-center justify-center md:gap-x-4 gap-y-6 leading-[1.3] min-[1910px]:flex-nowrap">
          {/* Product 1 */}
          <Link href={'../detail'}>
          <div className="flex flex-col items-start gap-y-3.5 self-stretch">
            <div className="bg-image h-80 w-80 flex-shrink-0 rounded-md bg-cover bg-center relative ">
              <div className="rounded bg-green-600 px-2.5 py-1.5 text-center text-[13px] font-medium leading-[1.1] text-white absolute top-4 left-4">
                New
              </div>
              <img
                src="/img/p1.png"
                alt="Library Stool Chair"
                className="h-[312px] w-[312px] object-cover"
              />
            </div>
            <div className="flex items-center justify-center gap-x-32">
              <div className="flex flex-grow flex-col items-start gap-y-2.5 [max-width:256px]">
                <div className="self-stretch text-[teal]">{val.name}</div>
                <div className="text-lg font-semibold leading-[1.1] text-indigo-950">
                  $20
                </div>
              </div>
              <div className="flex h-11 w-11 flex-shrink-0 flex-col items-center justify-center rounded-lg bg-[cadetblue] p-2.5">
              <Image src={'/img/cart.png'} width={24} height={24} alt=""/>
              </div>
            </div>
          </div></Link>
  
          {/* Product 2 */}
        
  
          {/* Product 3 */}
        
  
          {/* Product 4 */}
        
        </div>   ))}
      </div>
    );
  }
  
  