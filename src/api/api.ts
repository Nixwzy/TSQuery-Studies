import { Post } from "@/types/Post";
import { User } from "@/types/User";
import axios from "axios";

const req = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com/",
});

// fetch de todos os posts
export const getPosts = async (): Promise<Post[]> => {
  const response = await req.get("/posts");
  return response.data;
};

// fetch de um unico post especifico - nao retorna promise de array
export const getPost = async (id: number): Promise<Post> => {
  const response = await req.get(`/posts/${id}`); // tmp string concatenando para id
  return response.data;
};

// fetch de users
export const getUsers = async (): Promise<User[]> => {
  const response = await req.get("/users");
  return response.data;
};
