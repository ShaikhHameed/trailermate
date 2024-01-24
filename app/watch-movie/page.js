'use client';
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react"
import { Suspense } from "react";
import DOMPurify from "dompurify";


export default function WatchMovie(){

    const [Trailer,setTrailer] = useState(null);

    const searchParam = useSearchParams();
    const movieId = searchParam.get('id');
 
    useEffect(()=>{
        const getMovie = async()=>{

            const fetchMovie = await fetch(`/api/getsingleMovie?id=${movieId}`,{
                method:"GET",
            });

            const Response = await fetchMovie.json();
            setTrailer(Response.movies.trailer);
        }

        getMovie();
    },[]);


    
    return(

        <>
        <Suspense fallback={<div>Loading...</div>}>
            <div className="row">
                <div className="col-md-8">
                    <iframe className="rounded-4" src={Trailer} title="YouTube video player"  frameBorder ="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen  />
                </div>
            </div>
        </Suspense>
        </>

    )

}