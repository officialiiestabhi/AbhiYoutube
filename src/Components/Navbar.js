import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { toggleMenu } from '../utils/appSlice';
import { YOUTUBE_SEARCH_API } from '../utils/BaseUrl';
const Navbar = () => {
  const [searchQuery,setSearchQuery]=useState("");
  const[suggetions,setSuggestions]=useState([]);
  const[showSuggestions,setShowSuggestions]=useState(false);

  useEffect(()=>{
    const timer=setTimeout(()=>getSearchsuggestions(),200);
    return ()=>{
      clearTimeout(timer);
    };
    // eslint-disable-next-line
  },[searchQuery]);

  const getSearchsuggestions=async()=>{
    console.log(searchQuery);
    const data=await fetch(YOUTUBE_SEARCH_API+searchQuery);
    const json=await data.json();
    setSuggestions(json[1]);
    
  }

  const dispatch=useDispatch();

   function toggleMenuHandler(){
    dispatch(toggleMenu());
   }
  return (
   
    <div className='grid grid-flow-col shadow-lg p-2 '>
       <div className='flex col-span-1 gap-1'>
        <img   
        src='https://www.svgrepo.com/show/312300/hamburger-menu.svg'
        alt="hamburger"
        onClick={toggleMenuHandler}
        className="h-8 cursor-pointe"/>
        <a href="/">
        <img src='https://cdn.worldvectorlogo.com/logos/youtube-6.svg' alt='yticon'
        className="h-8 ml-1 cursor-pointer bg-black" /></a>

       </div>

       <div className='col-span-10 px-10 ml-12'>
        <div >
        <input type='text' placeholder='search' 
        value={searchQuery}
        onChange={(e)=>setSearchQuery(e.target.value)}
        onFocus={()=>setShowSuggestions(true)}
        onBlur={()=>setShowSuggestions(false)}
        className='h-8  p-2 w-[37rem] rounded-l-full border'/>
        
        <button className="h-8 rounded-r-full border px-3 border-gray-400 bg-gray-200">
        🔍
        </button>
        </div>
        <div className='fixed bg-white shadow-lg rounded-lg  w-[37rem]'>
          <ul>
          {
            showSuggestions && (
            suggetions.map((s)=>(
              <li  key={s} className="py-2 px-3 shadow-sm hover:bg-gray-200">🔍 {s}</li>
            ))
            )
          }
          </ul>
        </div>
       </div>

       <div className='col-span-1 '>
        <img src="https://www.pngitem.com/pimgs/m/24-248226_computer-icons-user-profile-clip-art-login-user.png" alt='profile' 
        className="h-8"/>
       </div>
    </div>
  )
}

export default Navbar
