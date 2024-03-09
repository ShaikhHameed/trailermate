'use client';
import { useState } from "react";
import Header from "./header";
import SideBar from "./sidebar";


export default function HeaderLayout({userLoginCheck}) {

    const [sideState, setSideState] = useState(0);
    const chnageSideState = ()=>{
            sideState ===1 ? setSideState(0) : setSideState(1);
            console.log(sideState);
    }


    return <>
            
            <Header onSideclick = {chnageSideState} userCheck={userLoginCheck} sideStatus={sideState}/>
            <SideBar sideStatus={sideState} userCheck={userLoginCheck} />
    
    </>
}