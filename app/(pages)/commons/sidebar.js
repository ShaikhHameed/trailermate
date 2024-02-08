'use client'

import Link from "next/link";
import { useEffect } from "react";
import { SlMagnifier } from "react-icons/sl";
import { SlHome } from "react-icons/sl";
import { SlHeart } from "react-icons/sl";
import { SlList } from "react-icons/sl";
import { SlUser } from "react-icons/sl";
import { SlUserFollow } from "react-icons/sl";





export default function SideBar({sideStatus}){


    useEffect(()=>{
        
        let SidebarLinksElems = document.querySelectorAll('.sidebar-links li');

        SidebarLinksElems.forEach((item,itemInddex)=>{
            item.addEventListener('mousemove',(e)=>{
                let mouseX = e.clientX;
                let mouseY = e.clientY;
                let glowElement = item.querySelector('.glow-link');
                console.log(e);
                if (glowElement) {
                    // glowElement.style.top =  mouseY + 'px';
                    glowElement.style.left =  mouseX + 'px';
                }
            })
        })

    },[])

    return(
        <>
            <div className={`sidebar ${sideStatus ===1 ? 'active': '' } `}>
                <ul className="sidebar-links">
                    <li> <SlMagnifier /> Search</li>
                    <Link href='/'><li> <SlHome /> Home <div className="glow-link"></div></li></Link>
                    <li> <SlHeart /> Liked</li>
                    <li> <SlList /> Watchlist</li>
                    <Link href='/login'><li><SlUser/> Login</li></Link>
                    <Link href='/signup'><li><SlUserFollow /> Signup</li></Link>
                </ul>
            </div>
        </>
    )
}