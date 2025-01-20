'use client';

import Detail from '@/app/detail/page';
import { client } from '@/sanity/lib/client';
import React, { use, useEffect, useState } from 'react';

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
  const unwrappedParams = use(params); // Use the `use` hook to unwrap the Promise
  const { _id } = unwrappedParams;

  const [data, setData] = useState<BlogData | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
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
          { id: _id }
        );

        setData(result);
      } catch (error) {
        console.error('Error fetching product details:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [_id]);

  if (loading) return <div>Loading...</div>;
  if (!data) return <div>Product not found!</div>;

  return <Detail data={data} />;
};

export default Page;
