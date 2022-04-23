import React, { useState, useContext } from 'react'
import sublinks from './data'

const AppContext = React.createContext();

const AppProvider = ({children})=>{
    const [isSidebarOpen,setIsSidebarOpen] = useState(false);
    const [isSubmenuOpen,setIsSubmenuOpen] = useState(false);
    const [page,setPage] = useState('');
    const [links,setLinks] = useState([]);
    const [location,setLocation] = useState({left:''});

    const openSidebar=()=>{
        setIsSidebarOpen(true);
    }
    const closeSidebar=()=>{
        setIsSidebarOpen(false);
    }
    const openSubmenu = ()=>{
        setIsSubmenuOpen(true);
    }
    const closeSubmenu = ()=>{
        setIsSubmenuOpen(false);
    }
    return <AppContext.Provider 
    value={{isSidebarOpen,
            isSubmenuOpen,
            openSidebar,
            closeSidebar,
            openSubmenu,
            closeSubmenu,
            page,
            setPage,
            links,
            setLinks,
            location,
            setLocation
           }}
    >
        {children}
    </AppContext.Provider>
}

const useGlobalContext = ()=>{
    return useContext(AppContext);
}

export {AppProvider,useGlobalContext};
