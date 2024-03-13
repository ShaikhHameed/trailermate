import React, { Suspense } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import HeaderLayout from './commons/headerLayout';
import HeaderConfig from './commons/headerConfig';



export const metadata = {
  title: "The Wishlist",
  description: "Watch Trailer, NOW",
};

export default function RootLayout({ children }) {

  return (
    
       <React.StrictMode>
        <HeaderConfig/>
        <div className="body-content-wrap">
            {children}
        </div>
        </React.StrictMode>
  );
}
