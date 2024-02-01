'use client'
import Link from 'next/link';
import '../styles/navbar.css';

export default function Header(){


    return(
        <>
            <nav id="main-nav">
                <div className="container"> 
                <div className="nav-control">
                    <div className="nav-logo">
                        <Link href='/'><h4>TrailerMate</h4></Link>
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