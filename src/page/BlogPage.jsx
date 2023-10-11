import React, { useContext, useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom';
import { ContextProvider } from '../context/AppContext';
import Header from '../component/Header';
import Spinner from '../component/Spinner';
import BlogDetails from '../component/BlogDetails';

const BlogPage = () => {
  const newBaseUrl='https://codehelp-apis.vercel.app/api/'

const {isLoading,setIsLoading}=useContext(ContextProvider)
  const [blogs,setBlogs]=useState(null);
  const [relatedBlogs,setRelatedBlogs]=useState([]);
  const location=useLocation();
  const navigate=useNavigate();


  const blogId=location.pathname.split('/').at(-1);

  async function fetchRelatedBlogs(){
    setIsLoading(true);
    const url=`${newBaseUrl}get-blog?blogId=${blogId}`
 try{
      const res=await fetch(url);
      const data=await res.json();
      setBlogs(data.blog)
      setRelatedBlogs(data.relatedBlogs)

 }catch(err){
    console.log(`error in BlogPage`, err)

 }
 setIsLoading(false);

  }
 useEffect(()=>{
 if(blogId){
  fetchRelatedBlogs();
 }
 },[location.pathname])
  return (
    <div>
      <Header/>
      <button onClick={()=>{navigate(-1)}}></button>
      {
        isLoading?(<Spinner/>):blogs?(
        <div>
          <BlogDetails post={blogs}/>
        <h2 className='text-2xl font-semibold mb-5'>Related Blog</h2>
        {
          relatedBlogs.map((post)=>(
            <div key={post.id}>
             <BlogDetails post={post}/>
            </div>
          ))
        }
          
        </div>
        
        
        ):(<p>No blog found</p>)
      }
    </div>
  )
}

export default BlogPage