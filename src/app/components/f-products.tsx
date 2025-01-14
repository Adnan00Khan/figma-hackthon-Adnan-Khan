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
  name: string;
  description: string;
}

export default function FeaturedProducts() {
  const [data, setData] = useState<BlogData[]>([]);

  // Fetch data on component mount
  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await client.fetch(`*[_type == 'product' && rating <3]{
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
    <div className="font-inter flex flex-col items-start gap-y-11 px-5 py-20 md:px-20">
      <div className="text-[32px] font-semibold leading-[1.1] text-indigo-950">
        Featured Products
      </div>
      <div className="flex flex-wrap justify-center gap-16">
        {data.slice(0, 4).map((val, i) => ( // Display only the first 4 products
          <Link
            href={`../detail/${val.currentSlug}`}
            key={i}
            className="flex flex-col items-start gap-y-3.5 w-72"
          >
            <div className="relative h-80 w-full rounded-md bg-cover bg-center">
              <div className="absolute top-4 left-4 rounded bg-green-600 px-2.5 py-1.5 text-center text-[13px] font-medium leading-[1.1] text-white">
                New
              </div>
              <img
                src={val.imageUrl || "/img/p1.png"}
                alt={val.name}
                className="h-full w-full object-cover rounded-md"
              />
            </div>
            <div className="flex justify-between items-center w-full">
              <div className="flex flex-col">
                <div className="text-teal-700 text-sm">{val.name}</div>
                <div className="text-lg font-semibold leading-[1.1] text-indigo-950">
                  $20
                </div>
              </div>
              <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-cadetblue p-2.5">
                <Image
                  src="/img/cart.png"
                  width={24}
                  height={24}
                  alt="Add to cart"
                />
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
