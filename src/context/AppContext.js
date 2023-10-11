import { createContext, useState } from "react";
import { BaseUrl } from "../baseUrl";
import { useNavigate } from "react-router-dom";
export const ContextProvider = createContext();

export default function AppContext({ children }) {
  const navigate=useNavigate();
  const [posts, setPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [page, setPage] = useState("");
  const [totalPages, setTotalPages] = useState(null);
  const [filteredPosts, setFilteredPosts] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  async function fetchBlogApi(page = 1,category,tag=null) {
    setIsLoading(true);
let url=`${BaseUrl}?page=${page}`;
if(tag){
  url+=`&tag=${tag}`
}

if(category){
  url+=`&category=${category}`;
}
    try {
      const response = await fetch(url);
      const result = await response.json();
      if(!result.posts || result.posts.length===0)
      throw new Error("Something Went Wrong !")
    console.log('response',result)
      setPosts(result.posts);
      setPage(result.page);
      setPosts(result.posts);
setFilteredPosts(result.posts);
      setTotalPages(result.totalPages);
      setFilteredPosts(result.posts);
      console.log(result);
    } catch (err) {
      console.log(`Error Occur in fetch API ${err}`);
      setPosts([]);
      setPage("");
      setFilteredPosts([]);
    }

    setIsLoading(false);
  }

  function handlePageChange(page) {
    navigate({search:`?page=${page}`})
    setPage(page);
    console.log('from App context',page)
    // fetchBlogApi(page);
  }
 

  const value = {
    posts,
    setPosts,
    isLoading,
    setIsLoading,
    page,
    setPage,
    totalPages,
    setTotalPages,
    fetchBlogApi,
    handlePageChange,
    filteredPosts, setFilteredPosts,
    searchQuery, setSearchQuery
  };
  return (
    <ContextProvider.Provider value={value}>
      {children}
    </ContextProvider.Provider>
  );
}
