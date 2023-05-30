export const serverUrl =
  process.env.NODE_ENV === "production"
    ? "https://merkle-tree-gift-list-one.vercel.app/api"
    : "http://localhost:3000/api";
