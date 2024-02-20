import React, { Suspense } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import HeaderLayout from './commons/headerLayout';



export const metadata = {
  title: "Trailer Mate",
  description: "Watch Trailer, NOW",
};

export default function RootLayout({ children }) {

  return (
    
       <React.StrictMode>
        <HeaderLayout/>
        <div className="body-content-wrap">
            {children}
        </div>
        </React.StrictMode>
  );
}
