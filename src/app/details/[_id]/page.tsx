'use client'

import React, { useEffect, useState } from 'react';
import { client } from '@/sanity/lib/client';
import Detail from '@/app/detail/page';

// Define types for the data and params
interface BlogData {
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
  const [data, setData] = useState<BlogData | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [slug, setSlug] = useState<string | null>(null);

  useEffect(() => {
    // Unwrap the params Promise using React.use()
    const getSlug = async () => {
      const unwrappedParams = await params; // Wait for params to resolve
      setSlug(unwrappedParams._id); // Set the slug after unwrapping
    };
    
    getSlug();
  }, [params]);

  useEffect(() => {
    if (!slug) return; // Wait for slug to be available

    const fetchData = async () => {
      try {
        const result = await client.fetch(`*[_type == 'products']{
  title,
    price,
    inventory,
    _id,
    "imageUrl": image.asset->url,
    description,
    }`);
        const blogData = result.find((item: BlogData) => item._id === slug);
        setData(blogData || null);
      } catch (error) {
        console.error('Error fetching blog data:', error);
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