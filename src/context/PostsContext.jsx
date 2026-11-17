import { createContext, useContext, useEffect, useState } from "react";


const PostsContext = createContext();

export function PostsProvider({children}) {
  const [posts, setPosts] = useState(() => {
    const savedPosts = localStorage.getItem("posts");

    if (savedPosts) {
      return JSON.parse(savedPosts);
    }

 return [
    {
        id: 1,
        title: "明子さん、おんがくが好きですか",
        text: "- 明子さん、おんがくが好きですか。- 大好きです。",
        author: "Lily",
    },
    {
        id: 2,
        title: "meow",
        text: "猫の目が緑です",
        author: "sirenhead",
    }
  ];
  });

    useEffect(() => {
    localStorage.setItem(
      "posts",
      JSON.stringify(posts)
    );
  }, [posts]);

  return (
    <PostsContext.Provider value={{ posts, setPosts }}>
        {children}
    </PostsContext.Provider>
  );
}

export function usePosts() {
  return useContext(PostsContext);
}