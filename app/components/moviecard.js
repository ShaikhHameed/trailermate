'use client';
import Link from "next/link";
import SingleMovieloading from "./singleMovieLoad";

export default function MovieCard({data}){

    console.log(data);

    return(
        <>
        {data?(
            <Link href={`watch-movie?id=${data._id}`} ><div className="movie-card"  >
            <div className="movie-info">
              <h4 className="card-movie-title">{data.name}</h4>
              <div className="movie-card-description">{data.description}</div>
            </div>
            <div className="movie-card-thumbnail">
              <img width={100} height={100} className="w-100"  src={data.poster} alt={data.name} />
            </div>
            
          </div></Link>
          ):(
          <SingleMovieloading/>
          )}
        </>

    )

}