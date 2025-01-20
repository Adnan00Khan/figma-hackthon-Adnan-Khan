"use client";

import { client } from "@/sanity/lib/client";
import Image from "next/image";
import Link from "next/link";
import dynamic from "next/dynamic";
import { useEffect, useState } from "react";

const Modal = dynamic(() => import("../components/Modal"), { ssr: false });

interface BlogDetail {
  title: string;
  imageUrl: string;
  _id: string;
  price: number;
  description: string;
}

interface DetailProps {
  data: BlogDetail;
}

export function Detail({ data }: DetailProps) {
  const [data1, setData] = useState<BlogDetail[]>([]);
  const [showModal, setShowModal] = useState(false);
  const [modalMessage, setModalMessage] = useState("");

  // Fetch additional products on component mount
  useEffect(() => {
    async function fetchData() {
      try {
        const result = await client.fetch(`*[_type == 'products']{
          title,
          price,
          _id,
          "imageUrl": image.asset->url,
          description
        }`);
        setData(result);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }

    fetchData();
  }, []);

  function handleAddToCart(product: BlogDetail) {
    if (typeof window === "undefined") return;

    const cart = JSON.parse(localStorage.getItem("cart") || "[]");
    const existingItem = cart.find((item: BlogDetail) => item._id === product._id);

    if (existingItem) {
      existingItem.quantity += 1;
    } else {
      cart.push({ ...product, quantity: 1 });
    }

    localStorage.setItem("cart", JSON.stringify(cart));
    setModalMessage(`${product.title} has been added to your cart.`);
    setShowModal(true);
  }

  function closeModal() {
    setShowModal(false);
  }

  if (!data) return <div>Loading...</div>;

  return (
    <div className="flex w-full flex-col px-6 py-12 md:px-28">
      {/* Product Details */}
      <div className="flex flex-col-reverse md:flex-row items-start justify-center gap-x-24 px-4 gap-y-16 md:gap-y-28">
        <img
          className="w-full md:w-[675px] h-[350px] md:h-[607px] rounded-lg object-cover object-center"
          src={data.imageUrl}
          alt={data.title}
        />
        <div className="font-inter flex flex-grow flex-col items-start gap-y-8">
          <div className="text-4xl md:text-[60px] font-bold">{data.title}</div>
          <div className="bg-[#1eabb0] px-4 py-2 text-xl text-white">
            ${data.price} USD
          </div>
          <div className="pt-7 text-xl">{data.description}</div>
          <div
            onClick={() => handleAddToCart(data)}
            className="flex items-center gap-x-3 bg-[#1eabb0] px-7 py-4 cursor-pointer rounded-lg"
          >
            <Image src="/img/cart2.png" width={29} height={29} alt="Cart" />
            <div className="text-xl text-white">Add to Cart</div>
          </div>
        </div>
      </div>

      {/* Featured Products */}
      <div className="pt-16 md:pt-36">
        <div className="text-2xl md:text-3xl font-bold uppercase">
          Featured Products
        </div>
        <div className="flex flex-wrap pt-12">
          {data1.slice(0, 5).map((val) => (
            <Link key={val._id} href={`/details/${val._id}`}>
              <div className="flex flex-col items-start gap-y-3 w-[250px]">
                <Image
                  src={val.imageUrl}
                  alt={val.title}
                  width={250}
                  height={270}
                  className="rounded-md"
                />
                <div className="text-indigo-950">{val.title}</div>
                <div className="text-lg font-semibold">${val.price}</div>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {showModal && <Modal message={modalMessage} onClose={closeModal} />}
    </div>
  );
}
