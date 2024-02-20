
import Bg from '~image/signup-banner.jpg';

export default function HomeBanner(){

    return(
        
        <div className="home-banner-slider">
            <div className="banner-item">
                <div className="movie-main-banner">
                    <img className="home-banner-bg" src={Bg.src} />
                    <div class="row h-100 position-relative" style={{zIndex:10}}>
                        <div class="col-md-7">
                            <div class="home-banner-description">
                                <h2>Welcome Banner</h2>
                                <p> Some Lame as Description</p>
                                <button className="btn btn-outline-light px-4 d-flex align-items-center">Watch Now</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )

}