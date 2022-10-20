
import { useNavigate,Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import "./index.css"

import { addFavorite } from "../../redux/slices/authSlice";
import finalPropsSelectorFactory from "react-redux/es/connect/selectorFactory";


const Card =({data})=>{
    const dispatch = useDispatch();
    const navigate =useNavigate();

    const handleFavoriteClick=(data)=>{
        
        const {title,thumbnail} = data;
        const image = thumbnail.path + ".jpg";
        
        dispatch(
            addFavorite({
               title: title,
               image: image,
               code: data.id,
               
            })
        );
        alert("Se ha agregado correctamente!!");
     }

     
    
     return data?.map((data,index)=>(
        <div key={index} className="card-ctn" id={data.id} >
            <div className="row">
                <div className="col-12">
                    <img src={`${data.thumbnail.path}.jpg`} alt={data.series.name} className="card-img-top"></img>
                </div>
                <div className="col-12 name-ctn">
                    <h6 className="">{data.series.name}</h6>
                </div>
                <div className="col-12 d-flex justify-content-start">
                    <div className="row ">
                        <div className="col-6">
                            <Link to={"/detail/"+data.id} className="btn btn-dark">Detail</Link>
                        </div>
                        <div className="col-6">
                            <button onClick={()=>{
                                handleFavoriteClick(data);
                            }} className="btn btn-danger">Favorite</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
     ));
}

export default Card;