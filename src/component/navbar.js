import React from 'react'
import { Link } from 'react-router-dom'
import {FaBars, FaTimes} from "react-icons/fa"
import { useState } from "react";

const Navbar = () => {
    const [click,setClick]=useState(false)
    const[color,setColor]=useState(false)
    const changeColor=()=>{
        if(window.scrollY >=100){
            setColor(true)

        }else{
            setColor(false)
        }
    }
    window.addEventListener("scroll",changeColor)

    const handleClick=()=>{
      
        setClick(!click)
    }
    return (<>
        <div className={color ?"header header-bg ":"header"}>
            <Link to="/"><h1>Port<span>Folio</span></h1></Link>
            <ul className={ click ?"nav-menu active": "nav-menu"}>
                <li><Link to="/">Home</Link> </li>
                <li><Link to="/about"  >About</Link></li>
                <li><Link to="/project"  >Project</Link></li>
                <li><Link to="/contact"  >Contact</Link></li>
            </ul>
            <div className='hamburger'>
                {click ? <FaTimes onClick={handleClick}/>:
               
                <FaBars onClick={handleClick}/>}
                
            </div>
        </div>
    </>)
}

export default Navbar
