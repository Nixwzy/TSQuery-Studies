"use client";
import { getPosts } from "@/api/api";
import { useQuery } from "@tanstack/react-query";
import React from "react";

const Page = () => {
  const query = useQuery({ queryKey: ["posts"], queryFn: getPosts });

  return (
    <div className="container mx-auto">
      <h1>Page</h1>

      {query.isLoading && "Carregando..."}
      {query.data && (
        <ul>
          {query.data.map((item) => (
            <li key={item.id}>{item.title}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Page;
