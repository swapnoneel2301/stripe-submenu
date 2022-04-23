import React from 'react'
import logo from './images/logo.svg'
import { FaBars } from 'react-icons/fa'
import { useGlobalContext } from './context'
import data from './data'

const Navbar = () => {
  const {openSidebar,openSubmenu,closeSubmenu,setPage,setLinks,setLocation} = useGlobalContext();

  const handleCloseSubmenu = (e)=>{
       if(!e.target.classList.contains('link-btn')){
         closeSubmenu();
       }
  }
  const handleOpenSubmenu = (e)=>{
        const page=e.target.textContent;
        setPage(page);
        const links = data.find(item=>item.page===page).links;
        setLinks(links);
        const left = e.target.getBoundingClientRect().left;
        const right = e.target.getBoundingClientRect().right;
        const center = (left+right)/2;
        setLocation({left:`${center}px`});
        
        openSubmenu();
  }
  return <nav className='nav' onMouseOver={handleCloseSubmenu}>
     <div className='nav-center'>
       <div className='nav-header'>
          <img src={logo} className='nav-logo' alt='logo'></img>
          <button className='btn toggle-btn' onClick={openSidebar}>
            <FaBars />
          </button>
       </div>
       <ul className='nav-links'>
         <li>
           <button className='link-btn' onMouseOver={handleOpenSubmenu}>products</button>
         </li>
         <li>
           <button className='link-btn' onMouseOver={handleOpenSubmenu}>developers</button> 
         </li>
         <li>
           <button className='link-btn' onMouseOver={handleOpenSubmenu}>company</button>
         </li>
       </ul>
       <button className='btn signin-btn'>Sign in</button>
     </div>
  </nav> 
}

export default Navbar
