import logo from './logo.svg';
import './App.css';
import { useContext,useEffect } from 'react';
import { ContextProvider } from './context/AppContext';
import { Route, Routes, useLocation, useSearchParams } from 'react-router-dom';
import Home from './page/Home'
import BlogPage from './page/BlogPage'
import TagPage from './page/TagPage'
import CategoryPage from './page/CategoryPage'
function App() {
  const {fetchBlogApi }=useContext(ContextProvider)
  const [searchParams,setSearchParams]=useSearchParams();
  const location=useLocation();
  useEffect(() => {
    const page=searchParams.get('page') ?? 1;

    if(location.pathname.includes('tags')){
      const tag=location.pathname.split('/').at(-1).replaceAll('-',' ');
      fetchBlogApi(Number(page),tag)
    }
     else if(location.pathname.includes('categories')){
      const category=location.pathname.split('/').at(-1).replaceAll('-',' ');
      fetchBlogApi(Number(page),null,category)
    }

    else{
      fetchBlogApi(Number(page));
    }
  
  }, [location.pathname,location.search])
  

  return (
    <div className="bg-gray-100">

      <Routes>
    <Route path='/' exact element={<Home/>}/>
    <Route path='/blog/:blogId' element={<BlogPage/>}/>
    <Route path='/tags/:tag' element={<TagPage/>}/>
    <Route path='/categories/:category' element={<CategoryPage/>}/>

      </Routes>
          </div>
  );
};
export default App