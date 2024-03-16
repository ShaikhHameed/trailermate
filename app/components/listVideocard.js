import Link from "next/link";


export default function ListVideoCard({movie}){

    return(<>

        <div className="col-12">
            <Link href={`/watch-movie?id=${movie._id}`}>
            <div className="row gy-2">
                <div className="col-md-4">
                    <img className="list-thumbnail" src={movie.poster} />
                </div>
                <div className="col-md-8">
                    <div className="h-100 d-flex flex-column justify-content-center">
                        <h4>{movie.name}</h4>
                        <p className="m-0 small">{movie.description}</p>
                    </div>
                </div>
            </div>
            </Link>
        </div>
    
    </>)

}