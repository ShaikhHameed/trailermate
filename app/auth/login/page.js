"use client"
import { useState } from "react"


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
    

    const submitSignup = (e)=>{
        e.preventDefault();
         const currForm = e.target;
        

        (async()=>{
            try{
                const Formdata = {'email':credemail,'password':password};

                const Data = JSON.stringify(Formdata);
                console.log(Data);    
                const submitUser = await fetch('/api/login-user',{
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
            <div>
            <form onSubmit={submitSignup}>
                <div className="sign-box">
                    <div className="form-group">
                        <label>Email</label>
                        <input type="email" name="email" onChange={enterEmail} value={credemail} placeholder="Enter Your Password" />
                    </div>
                    <div className="form-group">
                        <label>Password</label>
                        <input type="password" name="password" onChange={enterPassword} value={password} placeholder="Enter Your Password" />
                    </div>

                    <div className="form-group">
                        <button type="submit"  disabled={credStatus}>SignUp</button>
                    </div>
                </div>
            </form>
            </div>

    </>

}