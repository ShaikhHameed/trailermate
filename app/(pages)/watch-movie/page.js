'use Server';
import MoviePage from "./moviePage";
import { cookies } from 'next/headers'
import jwt from 'jsonwebtoken';


export default function WatchMovie() {

    const cookieStore = cookies()
    const token = cookieStore.get('jwt');
    if(token){
      const DecodeuserToken = jwt.verify(token.value,process.env.JWT_SECRET); 
      var userId = DecodeuserToken.userId;
    }
    else{
      userId = false;
    }
  
  return(<>
      <MoviePage user={userId}/>
      </>
      );
}
