'use client';
import ListVideoCard from "@/app/components/listVideocard";
import { useEffect, useState } from "react";


export default function WatchList(){

    const [watchList,setWatclist] = useState([]);

    useEffect(()=>{

        async function getWatchList(){
            const getWatch = await fetch('/api/getWatclist',{method:'GET',});
            const watchResponse = await getWatch.json();
            setWatclist(watchResponse);
        }
        getWatchList();
    },[]);

    return(<>

            <div className="row justify-content-center">
                <div className="col-md-8">
                    <div className="list-box">
                        <h2 className="fs-2 fw-normal">My WatchList</h2>
                        <div className="row gy-4 my-4">
                            {
                            watchList.length > 0? (
                            watchList.map((movie)=>(
                               <ListVideoCard key={movie._id} movie={movie} />
                            ))
                            ): (
                                <h4 className="text-center fw-normal">You Haven't added any movie yet.</h4>
                            )
                            }


                        
                        </div>
                    </div>
                </div>
            </div>

    </>)

}