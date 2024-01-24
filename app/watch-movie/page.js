'use client';
import { useRouter, useSearchParams } from 'next/navigation';
import { useEffect, useState, Suspense } from 'react';
import DOMPurify from 'dompurify';

export default function WatchMovie() {
  // const [trailer, setTrailer] = useState(null);
  // const searchParam = useSearchParams();
  // const movieId = searchParam.get('id');

  // const router = useRouter();

  // // const {id} = router.query();

  // // alert(id);

  // useEffect(() => {
  //   const getMovie = async () => {
  //     const fetchMovie = await fetch(`/api/getsingleMovie?id=${movieId}`, {
  //       method: 'GET',
  //     });

  //     const response = await fetchMovie.json();
  //     setTrailer(response.movies.trailer);
  //   };

  //   getMovie();
  // }, [movieId]);

  return (
    <>
      {/* <div className="row">
        <div className="col-md-8">
          <iframe
            width="100%"
            height="550px"
            className="rounded-4"
            src={trailer}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          />
        </div>
      </div> */}
      <h1>Hello World</h1>
      </>
  );
}
