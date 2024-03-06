"use client"
import Link from "next/link";
import { useState } from "react"
import { signIn } from "next-auth/react";


export default function Login(){
    const [credStatus,setCredStatus] = useState(false);
    const [credemail,SetEmail] = useState('');
    const [password, Setpassword] = useState('');

   

    const enterEmail = (e) =>{
        const Useremail = e.target.value;

        SetEmail(Useremail);
    }

    const enterPassword =(e)=>{
        const userpassword = e.target.value;
        Setpassword(userpassword);
    }


    const ClearForm = ()=>{
        SetEmail("");
        Setpassword("");
    }
    

    const submitSignup = async(e)=>{
        e.preventDefault();

        await signIn("credentials", { redirect: false, credemail, password });


        //  const currForm = e.target;
        

        // (async()=>{
        //     try{
        //         const Formdata = {'email':credemail,'password':password};

        //         const Data = JSON.stringify(Formdata);
        //         console.log(Data);    
        //         const submitUser = await fetch('/api/login-user',{
        //             method:"POST",
        //             body:Data,
        //             headers: {
        //                 'Content-Type': 'application/json',
        //             }
        //     });

        //     const response = await (submitUser.json());
        //     if(response.status == 'ok'){
        //         ClearForm();
        //     }

        // }
        // catch(err){
        //     console.log(err);
        // }
        // })();

    }


    return <>
            <div className="sign-box">
            <form onSubmit={submitSignup}>
                <div  >
                    <div className="form-group">
                        <label>Email</label>
                        <input type="email" name="email" onChange={enterEmail} value={credemail} placeholder="Enter Your Password" />
                    </div>
                    <div className="form-group">
                        <label>Password</label>
                        <input type="password" name="password" onChange={enterPassword} value={password} placeholder="Enter Your Password" />
                    </div>

                    <div className="form-group">
                        <button type="submit" className="mb-4"  disabled={credStatus}>Login</button>
                        <button className="btn btn-light w-100 mt-2">Login with Google</button>
                        <button className="btn btn-primary w-100 mt-2">Login with Facebook</button>
                    </div>

                    <div className="form-group">
                        <p className="text-center w-100 m-0">New to TrailerMate? <Link href="/signup" className="text-white fw-semibold">Join Now</Link></p>
                        <p className="text-center w-100 m-0">Back to <Link href="/" className="text-white fw-semibold">Home</Link></p>
                    </div>
                </div>
            </form>
            </div>

    </>

}