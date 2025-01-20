// src/app/detail/page.tsx
'use client';

import React, { useEffect, useState } from 'react';
import { client } from '@/sanity/lib/client';
import DetailPage from '@/app/detail/page';


interface BlogDetail {
  title: string;
  imageUrl: string;
  _id: string;
  price: number;
  description: string;
}

interface PageProps {
  params: Promise<{ _id: string }>;
}

const Page: React.FC<PageProps> = ({ params }) => {
  const [data, setData] = useState<BlogDetail | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [slug, setSlug] = useState<string | null>(null);

  useEffect(() => {
    const unwrapParams = async () => {
      const resolvedParams = await params;
      setSlug(resolvedParams._id); // Set the slug after unwrapping
    };

    unwrapParams();
  }, [params]);

  useEffect(() => {
    if (!slug) return;

    const fetchData = async () => {
      try {
        const result = await client.fetch(
          `*[_type == "products" && _id == $id]{
            title,
            "imageUrl": image.asset->url,
            price,
            description,
            _id
          }[0]`,
          { id: slug }
        );
        setData(result);
      } catch (error) {
        console.error('Error fetching product details:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [slug]);

  if (loading) return <div>Loading...</div>;
  if (!data) return <div>Product not found!</div>;

  return <DetailPage data={data} />; // Pass data prop to Detail component
};

export default Page;
