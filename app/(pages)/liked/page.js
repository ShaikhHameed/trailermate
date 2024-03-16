'use client';
import ListVideoCard from "@/app/components/listVideocard";
import { useEffect, useState } from "react";


export default function Liked(){

    const [LikedMovies,setLikedMovies] = useState([]);

    useEffect(()=>{

        async function getLikedMovies(){
            const getLiked = await fetch('/api/getLiked',{method:'GET',});
            const likedResponse = await getLiked.json();
            setLikedMovies(likedResponse);
        }
        getLikedMovies();
    },[]);

    return(<>

            <div className="row justify-content-center">
                <div className="col-md-8">
                    <div className="list-box">
                        <h2 className="fs-2 fw-normal">Liked Movies</h2>
                        <div className="row gy-4 my-4">
                        {LikedMovies.length > 0 ? (
                                LikedMovies.map((movie) => (
                                <ListVideoCard key={movie._id} movie={movie} />
                                ))
                            ) : (
                                <h4 className="text-center fw-normal">You Haven't liked any movie yet.</h4>
                            )}
                        </div>
                    </div>
                </div>
            </div>

    </>)

}