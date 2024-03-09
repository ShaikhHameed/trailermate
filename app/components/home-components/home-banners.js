
import Bg from '~image/Dune-Part-Two-Movie-Poster-Tease-feature-816x459.jpg';

export default function HomeBanner(){

    return(
        

        <div className="home-banner-slider">
             <div className="banner-item">
               <div className="movie-main-banner">
                <div className="featured-lable">Featured Movie</div>
                 <img className="home-banner-bg" src={Bg.src} />
                 <div className="row h-100 position-relative" style={{zIndex:10}}>
                         <div className="col-md-7">
                             <div className="home-banner-description">
                                 <h2 className='h1'>DUNE: PART TWO</h2>
                                 <p className='small'> Paul Atreides unites with Chani and the Fremen while seeking revenge against the conspirators who destroyed his family. Facing a choice between the love of his life and the fate of the universe, he must prevent a terrible future only he can foresee.</p>
                                 <button className="btn btn-outline-light px-4 d-flex align-items-center">Watch Now</button>
                             </div>
                         </div>
                     </div>
                </div>
            </div>
        </div>         
        

    )

}