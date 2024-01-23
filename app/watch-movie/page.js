'use client';
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react"
import DOMPurify from "dompurify";


export default function watchMovie(){


    const [movie,setMovie] = useState([]);
    const [trailer,setTrailer] = useState('');

    const searchParam = useSearchParams();
    const movieId = searchParam.get("id");
 
    useEffect(()=>{
        const getMovie = async()=>{

            const fetchMovie = await fetch(`/api/getsingleMovie?id=${movieId}`,{
                method:"GET",
            });

            const Response = await fetchMovie.json();
            setTrailer(Response.movies.trailer);
        }

        getMovie();
    },[])

    const sanitizedTrailer = DOMPurify.sanitize(trailer);

    
    return(

        <>
            <div className="row">
                <div className="col-md-8">
                    <iframe className="rounded-4" width="100%" height="550"  src={trailer}/>
                </div>
            </div>
        </>

    )

}