import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Header from './commons/header';
import SideBar from './commons/sidebar';
import '../globals.css'



export const metadata = {
  title: "Trailer Mate",
  description: "Watch Trailer, NOW",
};

export default function RootLayout({ children }) {

  return (
    
       <React.StrictMode>
        <Header/>
        <SideBar/>
        <div className="body-content-wrap">
            {children}
        </div>
        </React.StrictMode>
  );
}
