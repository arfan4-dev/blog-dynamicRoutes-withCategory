import React, { useContext } from 'react'
import Header from '../component/Header'
import Footer from '../component/Footer'
import SearchBar from '../component/SearchBar'
import Blog from '../component/Blog'
import { ContextProvider } from '../context/AppContext'

const Home = () => {
  const {posts }=useContext(ContextProvider)
console.log('from Home', posts)
  return (
    <div>
     <Header />
      <Footer />
      {/* <SearchBar />  */}
      <Blog /> 
    
    </div>
  )
}

export default Home