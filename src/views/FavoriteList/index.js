
import Banner from "../../components/Banner/Banner";
import Favorites from "../../components/Favorites/Favorites";
//import "./index.css"


const FavoriteList =()=>{
    

    return(
        <div className="home-comp-ctn">
            <div className="row">
                <div className="col-12">
                    <Banner/>
                </div>
                <div className="col-12">
                    <h1>Favorites Comic's List</h1>
                </div>
                <div className="col-12 cards-ctn">
                    <div className="row d-flex justify-content-center">
                        <Favorites/>
                    </div>
                </div>
            </div>   
        </div>
    );
}

export default FavoriteList;