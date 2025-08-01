"use client";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { ReactNode } from "react";

type Props = {
    children: ReactNode;
}

export const Providers = ({ children }: Props) => {
    const queryClient = new QueryClient();
    
    return (
       <QueryClientProvider client={queryClient}>
        {children}
        {/* dEVtOOLS */}
        <ReactQueryDevtools initialIsOpen={false}/>

       </QueryClientProvider>
    );
}