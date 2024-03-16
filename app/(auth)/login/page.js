"use client"
import Link from "next/link";
import { useState } from "react"
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";


export default function Login(){

    const { push } = useRouter();

    const [credStatus,setCredStatus] = useState(false);
    const [credemail,SetEmail] = useState('');
    const [password, Setpassword] = useState('');

    const [btnText, setBtntext] = useState(true);

   const [errMsg,setErrMSg] = useState('');
   const [showMsg,setShowMSg] = useState(false);


   const [succsessMsg,setSuccessMg] = useState('');
   const [showSuccess,setShowSuccess] = useState(false);

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

         const currForm = e.target;
         
         setBtntext(false);

        (async()=>{
            try{
                const Formdata = {'email':credemail,'password':password};

                const Data = JSON.stringify(Formdata);
                console.log(Data);    
                const submitUser = await fetch('/api/auth/login',{
                    method:"POST",
                    body:Data,
                    headers: {
                        'Content-Type': 'application/json',
                    }
            });
 
            const response = await (submitUser.json());
            if(response.status == 'ok'){
                ClearForm();
                setBtntext(true);
                setSuccessMg("Login Successful!");
                setShowSuccess(true);
                push('/',undefined,{ shallow: false });
            }
            else{
                setErrMSg('Invalid Credentials!');
                setShowMSg(true);
                setBtntext(true);

                setTimeout(()=>{
                    setShowMSg(false);
                },3000);
            }

        }
        catch(err){
            console.log(err);
        }
        })();

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

                    <div className="form-group mb-4">
                        <button type="submit" className="btn-theme w-100 mb-2"  disabled={credStatus}><span>{btnText?'Login':'Please Wait..'}</span></button>
                        {showSuccess? (<><div className="h6 fw-bold text-success text-center">{succsessMsg}</div></>) : (<></>)}
                        {showMsg? (
                            <><div className="h6 fw-bold text-danger text-center">{errMsg}</div></>
                        ) :(<></>) }
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