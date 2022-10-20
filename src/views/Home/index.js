import Card from "../../components/Card/Card";
import Banner from "../../components/Banner/Banner";
import "./index.css"
import { useDispatch } from "react-redux";
import { logautUser } from "../../redux/slices/authSlice";
import { useFetchComicsQuery } from "../../redux/api/comic";
import Loading from "../../components/Loading/Loading"
import Error from "../../components/Error/Error"
import { Link } from "react-router-dom";

const Home =()=>{
    const dispatch = useDispatch();

    const {data, isLoading, isSuccess, isFetching, error  } = useFetchComicsQuery();

    const logOut=(e)=>{
        e.preventDefault();
        dispatch(
            logautUser()
        );
    }

    return(
        <div className="home-comp-ctn">
            
            <div className="row">
                <div className="col-12">
                    <Banner/>
                </div>
                <div className="col-12">
                    <h1>Comic's List</h1>
                </div>
                <div className="row m-5">
                    <div className="col-6">
                        <Link to={"/favorites"} className="btn btn-danger">Favorites List</Link>
                    </div>
                    <div className="col-6">
                        <button type="buttom" className="btn btn-outline-danger" onClick={logOut}>Log out</button>
                    </div>
                </div>
                <div className="col-12 cards-ctn">
                    <div className="row d-flex justify-content-center">
                        {error && <Error/>}
                        {isLoading || isFetching ? <Loading/>: undefined}
                        {isSuccess && data.data.results ? <Card data={data?.data.results}/> : undefined}
                    </div>
                </div>
            </div>   
        </div>
    );
}

export default Home;