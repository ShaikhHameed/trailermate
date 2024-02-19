"use client"
import { useState } from "react"
import Link from "next/link";



export default function Signup(){
    
    const [credStatus,setCredStatus] = useState(false);
    const [errMsg, setErrMsg] = useState(true);

    const [credemail,SetEmail] = useState('');
    const [password, Setpassword] = useState('');
    const [confirmPass,setConfirmPass] = useState('')

   

    const enterEmail = (e) =>{
        const Useremail = e.target.value;

        SetEmail(Useremail);
    }

    const enterPassword =(e)=>{
        const userpassword = e.target.value;
        Setpassword(userpassword);
    }

    const validateconfirmpassword = (user,confirm)=>{
         if(user === confirm){ 
            setCredStatus(false); 
            setErrMsg(true);
            
        } else{ 
            setCredStatus(true);  
            setErrMsg(false); 
        }
    }

    const confirmPassword = (e) =>{
        const userConfirmPassword  = e.target.value;
        setConfirmPass(userConfirmPassword);
        validateconfirmpassword(password,userConfirmPassword);
    }

    const ClearForm = ()=>{
        SetEmail("");
        Setpassword("");
        setConfirmPass("");
    }
    

    const submitSignup = (e)=>{
        e.preventDefault();
         const currForm = e.target;
        

        (async()=>{
            try{
                const Formdata = {'email':credemail,'password':password};

                const Data = JSON.stringify(Formdata);
                console.log(Data);    
                const submitUser = await fetch('/api/addusers',{
                    method:"POST",
                    body:Data,
                    headers: {
                        'Content-Type': 'application/json',
                    }
            });

            const response = await (submitUser.json());
            console.log(response);

            if(response.status == 'ok'){
                ClearForm();
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
                    <div >
                        <div className="form-group">
                            <label>Email</label>
                            <input type="email" name="email" onChange={enterEmail} value={credemail} placeholder="Enter Your Password"/>
                        </div>
                        <div className="form-group">
                            <label>Password</label>
                            <input type="password" name="password" onChange={enterPassword} value={password} placeholder="Enter Your Password" />
                        </div>
                        <div className="form-group">
                            <label>Confirm Password</label>
                            <input type="password" name="password-confirm" onChange={confirmPassword} value={confirmPass}  placeholder="Confirm Your Password" />
                            {errMsg !==true && <p className="text-danger">Password does not Match</p>}
                        </div>

                        <div className="form-group">
                            <button type="submit"  disabled={credStatus}>SignUp</button>
                        </div>
                        <div className="form-group">
                            <p className="text-center w-100">Already a user? <Link href="/login" className="text-white fw-semibold">Login</Link> </p>
                        </div>
                    </div>
                </form>
            </div>
    </>

}