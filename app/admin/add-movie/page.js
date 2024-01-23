"use client";

import { useState } from "react";







export default function addMovie(){

    const [formdata,setFormData] = useState({
        'name':'',
        'description':'',
        'trailer':'',
    });
    
    const [btnStatus, setBtnStatus] = useState(false);

    const Addmovie = async (e)=>{
       e.preventDefault();
       const currForm = e.target;

       setBtnStatus(true);
       
       const Data = JSON.stringify(formdata);
       console.log(Data);
       try{

        const Submit = await fetch('/api/add-movie',{
            method:'POST',
            body: Data, // Convert the data to JSON string
            headers: {
                'Content-Type': 'application/json' // Set the content type to JSON
            }
        });

        const response = await(Submit.json());
        console.log(response);
        setBtnStatus(false);
        currForm.reset();
        

       }
       catch(err){
        console.log(err);
       }

    }

    const handleInputChange = (e) =>{
        const {name, value} = e.target;
        setFormData({...formdata,[name]:value});
    }
 
    return(<>

        <h1 className="text-center">Add movie</h1>

        <form onSubmit={Addmovie}> 
            <div className="row justify-content-center">
                <div className="col-md-8">
                    <div className="form-group my-4">
                        <label>Movie Name:</label>
                        <input type="text" name="name" onChange={handleInputChange} className="form-control" />
                    </div>
                    <div className="form-group my-4">
                        <label>Movie Poster - <span className="small">Paste a URL</span>:</label>
                        <textarea name="poster" onChange={handleInputChange} className="form-control" ></textarea>
                    </div>
                    <div className="form-group my-4">
                        <label>Movie Description:</label>
                        <textarea  name="description" onChange={handleInputChange} className="form-control" ></textarea>
                    </div>
                    <div className="form-group my-4">
                        <label>Movie Trailer:</label>
                        <textarea  name="trailer" onChange={handleInputChange} className="form-control" ></textarea>
                    </div>
                    <div className="form-group my-4">
                        <input type="submit" className="btn btn-primary d-block ms-auto" disabled={btnStatus} value={btnStatus ? 'Please Wait..' : 'Submit' } />
                    </div>

                </div>
            </div>
        </form>
    
    </>)

}