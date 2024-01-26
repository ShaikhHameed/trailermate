'use client';

import './auth.css'
import React from 'react';


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body >
       <React.StrictMode>
        <div class="sign-up-page">
            {children}
        </div>
        </React.StrictMode>
        </body>
    </html>
  );
}
