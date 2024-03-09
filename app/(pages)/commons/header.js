import Link from 'next/link';
import { Cross as Hamburger, Turn } from 'hamburger-react';
import '../styles/navbar.css';
import { useState, useEffect } from 'react';
import { FaRegUser } from "react-icons/fa";
import { IoIosLogOut } from "react-icons/io";







export default function Header({onSideclick,userCheck}){

    const [userLogged, setUserLogged] = useState(true);
    const [userFirtsname,setuserFirstname] =useState(null);
    const [showDropdown,setshowDropdown] = useState(false);
    const getUserDetails = async()=>{
        const getuserId = {user:userCheck.userId}
        const userData = JSON.stringify(getuserId);
        const getuserInfo = await fetch('api/user/getuserinfo',{
            method:'POST',
            body:userData,
            headers: {
                'Content-Type': 'application/json',
            }
        })

        const userInfo = await (getuserInfo.json());
        setuserFirstname(userInfo.user_info.firstname);
    }
    
    useEffect(()=>{


        // check if user Id Exists 

        if(userCheck.userId){
            setUserLogged(true);
            getUserDetails();
        }
        else{
            setUserLogged(false);
        }
    },[])


    return(
        <>
            <nav id="main-nav">
                <div className="navbar-wrap"> 
                <div className="nav-control">
                    <div className="nav-logo-control">
                        <div className='me-3' onClick={onSideclick}>                            
                            <Hamburger  size={40} />
                        </div>
                    <div className="nav-logo">
                        <Link href='/'><h4 className='brand-logo-text'>The Watchlist</h4></Link>                        
                    </div>
                    </div>
                    <div className="nav-contents">
                        {userLogged ==true?(
                            <>
                            <div>
                                <h4 className="fw-light m-0">Howdy, <span className='text-capitalize'>{userFirtsname}</span></h4>
                            </div>

                            <div className="profile-image ms-3 " >
                                <img className="profile-image cursor-pointer" alt="my-profile" onClick={()=>{showDropdown? setshowDropdown(false):setshowDropdown(true)}} src="https://wallpapers.com/images/hd/netflix-profile-pictures-5yup5hd2i60x7ew3.jpg" />

                                {showDropdown && (
                                <ul class="profile-dropdown ">
                                    <li><FaRegUser  /> My Account</li>
                                    <li><IoIosLogOut/> Logout</li>
                                </ul>
                                )}
                            </div>
                            
                            </>
                        ):(
                            <Link href="/login"><button className='btn btn-danger px-4'>Login</button></Link>

                        )}

                    </div>
                    

                </div>
                </div>  
            </nav>
        </>
    )

}