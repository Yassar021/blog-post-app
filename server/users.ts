export const getUsers = async () => {
  const res = await fetch("https://gorest.co.in/public/v2/users");
  return res.json();
}

export const getPost = async () => {
  const res = await fetch("https://gorest.co.in/public/v2/posts");
  return res.json();
}