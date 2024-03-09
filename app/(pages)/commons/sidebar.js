'use client'

import Link from "next/link";
import { useEffect,useState } from "react";
import { SlMagnifier } from "react-icons/sl";
import { SlHome } from "react-icons/sl";
import { SlHeart } from "react-icons/sl";
import { SlList } from "react-icons/sl";
import { SlUser } from "react-icons/sl";
import { SlUserFollow } from "react-icons/sl";
import { FcLike } from "react-icons/fc";






export default function SideBar({sideStatus,userCheck}){

    const [userLogged, setUserLogged] = useState(true);    


    useEffect(()=>{

        if(userCheck.userId){
            setUserLogged(true);
        }
        else{
            setUserLogged(false);
        }
        
        let SidebarLinksElems = document.querySelectorAll('.sidebar-links li');
        SidebarLinksElems.forEach((item,itemInddex)=>{
            item.addEventListener('mousemove',(e)=>{
                let mouseX = e.clientX;
                let mouseY = e.clientY;
                let glowElement = item.querySelector('.glow-link');
                if (glowElement) {
                    glowElement.style.top =  mouseY/15 + 'px';
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
                    <li> <SlHeart /> Liked <div className="glow-link"></div></li>
                    <li> <SlList /> Watchlist <div className="glow-link"></div></li>
                    {setUserLogged? (<>
                        <Link href='/'><li><SlUser/> My Account <div className="glow-link"></div></li></Link>
                    </>):(
                     <>  
                        <Link href='/login'><li><SlUser/> Login <div className="glow-link"></div></li></Link>
                        <Link href='/signup'><li><SlUserFollow /> Signup <div className="glow-link"></div></li></Link>
                    </> 
                    )}
                </ul>
            </div>
        </>
    )
}