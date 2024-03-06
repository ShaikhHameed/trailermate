import Link from 'next/link';
import { Cross as Hamburger } from 'hamburger-react';
import '../styles/navbar.css';
import { useState, useEffect } from 'react';





export default function Header({onSideclick,userCheck}){

    const [userLogged, setUserLogged] = useState(true);    
    useEffect(()=>{
        if(userCheck.userId){
            setUserLogged(true);
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
                                <h4 className="fw-light m-0">Howdy, Shaikh</h4>
                            </div>

                            <div className="profile-image ms-3">
                                <img className="profile-image" alt="my-profile" src="https://wallpapers.com/images/hd/netflix-profile-pictures-5yup5hd2i60x7ew3.jpg" />
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