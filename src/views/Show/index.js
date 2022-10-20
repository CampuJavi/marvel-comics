import Banner from "../../components/Banner/Banner";
import Detail from "../../components/Detail/Detail";


const Show =()=>{
    return(
        <div >
            <div className="row d-flex justify-content-center align-items-center">
                <div className="col-12">
                    <Banner/>
                </div>
                <div className="show-comp-ctn">
                    <div className="col-12">
                        <h1>Comic's Details</h1>
                    </div>
                    <div className="col-12">
                        <center>
                            <Detail/>
                        </center> 
                    </div>
                </div>
                
            </div>
        </div>
    );
}

export default Show;