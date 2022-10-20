import { useNavigate, useParams } from "react-router-dom";
import { useFetchComicDetailQuery } from "../../redux/api/comic";
import Loading from "../Loading/Loading";
import "./index.css"




const Detail =()=>{
    const navigate =useNavigate();
    const {comicId}= useParams(); 
    

    const handleBackClick=()=>{
        navigate("/home");
     }

     const {data, isLoading, isSuccess, isFetching, error  } = useFetchComicDetailQuery(comicId);

    return(
        <>
        {isLoading&&<div><Loading/></div>}
        {!isLoading&& 
        
        <div className="detail-ctn">
            
        <div className="row">
            <div className="col-xl-4 col-lg-4 col-md-4 col-sm-12 col-xs-12">
                <img src={`${data?.data.results[0].images[0]?.path}.jpg`} alt={data?.data.results[0].title} className="card-img-top"></img>
            </div>
            <div className="col col-xl-8 col-lg-8 col-md-8 col-sm-12 col-xs-12 d-flex align-items-xl-center">
                <div className="col">
                    <h4>{data?.data.results[0]?.title}</h4>
                    <p> {data?.data.results[0]?.description}</p>
                    <h5>{`Price: $ ${data?.data.results[0]?.prices[0].price}`}</h5>
                    <div className="row">
                    <div className="col-12">
                        <button type="button" className="btn btn-lg btn-secondary" onClick={handleBackClick}>Back</button>
                    </div>
                </div>
                </div>
                
            </div>

            
        </div>
    </div>
        }
        
        </>
    );
}

export default Detail;