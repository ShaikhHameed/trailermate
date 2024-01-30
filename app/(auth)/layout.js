'use client';
import './auth.css'
import React from 'react';
import Bg from '~image/signup-banner.jpg';


export default function RootLayout({ children }) {

  console.log(Bg);

  return (
    <html lang="en">
      <body >
       <React.StrictMode>
        <div class="sign-up-page" style={{backgroundImage:`url(${Bg.src})`}} >
            {children}
        </div>
        </React.StrictMode>
        </body>
    </html>
  );
}
