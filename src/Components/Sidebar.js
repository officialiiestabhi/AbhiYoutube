import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom';
const Sidebar = () => {
  const isMenuOpen=useSelector((store)=>store.app.isMenuOpen);
  if(!isMenuOpen)return null;
  return (
    
    <div className='shadow-lg w-[14rem] p-5 mr-8'>
      <nav>
        <ul className='font-bold text-lg '>
          <Link to="/">Home</Link></ul>
        <ul className='font-bold'>Shorts</ul>
        <ul className='font-bold'>Subscription</ul>

        <ul className='mt-2'>Library</ul>
        <ul>History</ul>
        <ul>Your Videos</ul>
        <ul>Watch Later</ul>
      </nav>
    </div>
    
  )
}

export default Sidebar
