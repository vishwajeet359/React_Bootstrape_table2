import React,{useState} from 'react'
import { Link } from 'react-router-dom';
import * as BsIcons from "react-icons/bs";
import  {SidebarData}  from "./SidebarData"
import './Navbar.css';
function Navbar() {
    const[sidebar,setSidebar]=useState(false)
    const showSidebar=()=>setSidebar(!sidebar)
    return (
        <>
            <div className="navbar">
                <Link to="#" className='menu-bar'>
                    <BsIcons.BsPlusSquareFill onClick={showSidebar} />
                </Link>
               <nav className={sidebar? 'nav-menu active':'nav-menu'}>
                   <ul className='nav-bar-item' onClick={showSidebar}>
                       <li className='navbar-toggle'>
                           <Link to="#" className='menu-bar'>
                               <BsIcons.BsXCircleFill />

                           </Link>
                       </li>
                       {SidebarData.map((item,index)=>{
                           return(
                               <li key={index} className={item.cName}>
                                   <Link to={item.path}>
                                       <span>{item.title}</span>
                                   </Link>
                               </li>
                           )
                       })}
                   </ul>
                   </nav>
            </div>
        </>
    )
}

export default Navbar;
