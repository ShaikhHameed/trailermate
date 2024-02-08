'use client'
import Link from 'next/link';
import { Cross as Hamburger } from 'hamburger-react';
import '../styles/navbar.css';

export default function Header({onSideclick,sideStatus}){

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
                        <Link href='/'><h4 className='brand-logo-text'>TrailerMate</h4></Link>
                    </div>
                    </div>
                    <div className="nav-contents">
                        
                        <div><form>
                            <input type="search" className="input-search" name="search" />
                        </form></div>

                        <div className="profile-image ms-3">
                            <img className="profile-image" src="https://wallpapers.com/images/hd/netflix-profile-pictures-5yup5hd2i60x7ew3.jpg" />
                        </div>

                    </div>
                    

                </div>
                </div>  
            </nav>
        </>
    )

}