import Link from "next/link";


export default function  TallMovieCard({movieId,movieName,movieInfo,moviePoster}){

    return(<>

         <Link href={`/watch-movie?id=${movieId}`}><div className="movie-card tall-card"  >
            <div className="movie-info">
              <h4 className="card-movie-title">{movieName}</h4>
              <div className="movie-card-description">{movieInfo}</div>
            </div>
            <div className="movie-card-thumbnail">
              <img width={100} height={100} className="w-100"  src={moviePoster}  />
            </div>
            
          </div></Link>

    </>)

}