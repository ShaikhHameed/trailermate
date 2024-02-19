'use client';
import './auth.css';
import 'bootstrap/dist/css/bootstrap.css';
import React from 'react';
import Bg from '~image/signup-banner.jpg';


export default function RootLayout({ children }) {


  return (
    <html lang="en">
      <body >
       <React.StrictMode>
        <div className="sign-up-page text-white" style={{backgroundImage:`url(${Bg.src})`}} >
            {children}
        </div>
        </React.StrictMode>
        </body>
    </html>
  );
}
