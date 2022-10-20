
import "./index.css"
import Marvel from "../../assets/marvel.png"

const Banner =()=>{
    return(
        <div className="banner-ctn">
            <div className="row">
                <div className="col-12">
                    <img src={Marvel} alt="Mervel Logo" className="card-img-top"></img>
                </div>
            </div>
        </div>
    );
}

export default Banner;