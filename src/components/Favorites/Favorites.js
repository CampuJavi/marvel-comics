
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";





const Favorites =()=>{
    const fav = useSelector((state) => state.authSlice);
    
    const getFavorites = () => {

    }

    let  user = localStorage.getItem("USER_LOGGED");
    let miData = JSON.parse(fav.users);
    console.log("Fav logged",fav.logged);
    console.log("user",miData.find( dat => dat.name === user));
    console.log("favorite",miData.favorite);
    //let favorites = JSON.parse(miData.favorite);

    
    const currentUser = JSON.parse(fav.users).find( dat => dat.name === user );
    console.log(currentUser);
    const userFavorites = JSON.parse(currentUser?.favorite);

   

    
     return userFavorites.length > 0 ? userFavorites?.map((data,index)=>(
        <div key={index} className="card-ctn" id={data.code} >
            <div className="row">
                <div className="col-12">
                    <img src={data.image} alt={data.title} className="card-img-top"></img>
                </div>
                <div className="col-12 name-ctn">
                    <h6 className="">{data.title}</h6>
                </div>
                <div className="col-12 d-flex justify-content-center">
                    <div className="row ">
                        <div className="col-6">
                            <Link to={"/detail/"+data.code} className="btn btn-dark">Detail</Link>
                        </div>
                        <div className="col-6">
                            <Link to={"/Home"} className="btn btn-danger">Back</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
     )) : <>No se ha seleccionado ningún favorito</>;
}

export default Favorites;