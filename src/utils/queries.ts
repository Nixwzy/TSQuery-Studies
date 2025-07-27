import { getPost, getPosts } from "@/utils/api";
import { useQuery } from "@tanstack/react-query";

export const usePosts = () => {
  const query = useQuery({ queryKey: ["posts"], queryFn: getPosts });
  return query;
};

export const usePost = (id: number) =>
  useQuery({
    queryKey: ["posts", id],
    queryFn: () => getPost(id),
  });
