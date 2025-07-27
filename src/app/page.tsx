"use client";
import { useQuery } from '@tanstack/react-query';
import React from 'react';

const Page = () => {

  const query = useQuery({
    queryKey: ['']
  })
  return (
    <div className='container mx-auto'>
      <h1>Page</h1>
    </div>
  );
};

export default Page;