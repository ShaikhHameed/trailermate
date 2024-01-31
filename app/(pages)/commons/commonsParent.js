'use client'
import React, { useState } from "react";
import Header from "./header";
import SideBar from "./sidebar";


export default function parentCommons(){
    
    const [sideWidth,setSideWidth] = useState(false);

    const handleHeaderStateChange = (newState) => {
        // Update the shared state when the Header state changes
        // setSharedState(newState);
        alert(newState);
      };
    
    return(
        <> 
        <Header onStateChange ={handleHeaderStateChange} />
        <SideBar sideStatus ={sideStatus}/>
        </>   
    )
}