import axios from "axios";

const baseURL = "https://gorest.co.in/public/v2";
type Props = {
  user?: string;
  token?: string | null;
  email?: string;
  body?: object;
  page?: number;
  per_page?: number;
  userId?: string | null;
  postId?: number;
}

export const login = async ({user, token, email}: Props) => {
  const res = await axios.post(`${baseURL}/users?access-token=${token}`, {
    name: user, 
    email: email, 
    gender: "male",
    status: "active",
  });
  return res;
}

export const getPost = async ({ page, per_page, userId, token }: Props) => {
  const res = await axios.get(`${baseURL}/users/${userId}/posts?page=${page}&per_page=${per_page}&access-token=${token}`);

  return res.data;
}

export const createPost = async ({userId, token, body} : Props) => {
  const res = await axios.post(`${baseURL}/users/${userId}/posts?access-token=${token}`, body);

  return res;
}

export const editPost = async ({token, postId, body} : Props) => {
  const res = await axios.put(`${baseURL}/posts/${postId}?access-token=${token}`, body);

  return res;
}

export const deletePost = async ({token, postId} : Props) => {
  const res = await axios.delete(`${baseURL}/posts/${postId}?access-token=${token}`);

  return res;
}