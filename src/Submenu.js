import React, { useState, useRef, useEffect } from 'react'
import { useGlobalContext } from './context'

const Submenu = () => {
  const {isSubmenuOpen,page,links,location} = useGlobalContext();
  const subMenuRef = useRef(null);
  useEffect(()=>{
     subMenuRef.current.style.left=location.left;
  },[location])
  return <aside className={`${isSubmenuOpen?'submenu show':'submenu'}`} ref={subMenuRef}>
        <section>
           <h4>{page}</h4>
           <div className={`submenu-center col-${links.length}`}>
             {
               links.map((link,index)=>{
                   const {label,icon,url} = link;
                   return <a href={url} key={index}>
                     {icon}
                     {label}
                   </a>
               })
             }
           </div>
        </section>
  </aside>
}

export default Submenu
