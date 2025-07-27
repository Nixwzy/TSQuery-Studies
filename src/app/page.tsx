"use client";

import { usePost, usePosts } from "@/utils/queries";

import React from "react";

const Page = () => {
  const posts = usePosts();

  return (
    <div className="container mx-auto">
      {posts.isLoading && "Carregando..."}

      {posts.data && (
        <ul>
          {posts.data.map((item) => (
            <li key={item.id}>Post Title {item.id} - {item.title}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Page;
