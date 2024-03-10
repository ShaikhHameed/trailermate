'use client';

import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function Logout(){

    const router = useRouter();

    useEffect(()=>{
        async function getuserloggedout(){
        const logoutUser = await fetch('api/auth/logout',{
            method:'GET',
            headers: {
                'Content-Type': 'application/json',
            }
        })

        const reponse = await (logoutUser.json());
        if(reponse.status==200){
            router.push('/login',undefined,{ shallow: false });
        }else{
            router.push('/',undefined,{ shallow: false });
        }
    }
        getuserloggedout();

    },[]);
    
    

    return(
        <><h1>LOL</h1></>
    )

}