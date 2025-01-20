"use client";

import React, { useEffect, useState } from "react";
import { client } from "@/sanity/lib/client";
import {Detail} from "@/app/detail/page";

// Define types for the data
interface BlogDetail {
  title: string;
  imageUrl: string;
  _id: string;
  price: number;
  description: string;
}

interface PageProps {
  params: Promise<{
    _id: string;
  }>;
}

const Page: React.FC<PageProps> = ({ params }) => {
  const [data, setData] = useState<BlogDetail | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [slug, setSlug] = useState<string | null>(null);

  useEffect(() => {
    const unwrapParams = async () => {
      try {
        const resolvedParams = await params;
        setSlug(resolvedParams._id); // Unwrap params and set slug
      } catch (error) {
        console.error("Error unwrapping params:", error);
      }
    };

    unwrapParams();
  }, [params]);

  useEffect(() => {
    if (!slug) return; // Ensure slug is available before fetching data

    const fetchData = async () => {
      try {
        const query = `*[_type == 'products' && _id == $id][0]{
          title,
          price,
          _id,
          "imageUrl": image.asset->url,
          description
        }`;
        const result = await client.fetch(query, { id: slug });
        setData(result || null); // Set fetched data or null if not found
      } catch (error) {
        console.error("Error fetching blog data:", error);
        setData(null);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [slug]);

  if (loading) return <div>Loading...</div>;
  if (!data) return <div>Blog not found!</div>;

  return (
    <div>
      <Detail data={data} />
    </div>
  );
};

export default Page;
