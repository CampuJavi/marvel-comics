import { useSelector } from "react-redux";
import {BrowserRouter, Routes, Route} from "react-router-dom"
import Loading from "../components/Loading/Loading";
import Error from "../components/Error/Error";

import Home from "../views/Home"
import Login from "../views/Login"
import Show from "../views/Show"
import Singup from "../views/Singup";
import Favorites from "../views/FavoriteList";




const RoutesComponent=()=>{
    const auth = useSelector((state) => state.authSlice);
    
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/singup" element={auth.logged ? <Home/>  : <Singup/>}/>
                <Route path="/login" element={<Login/>}/>
                
                <Route path="/" element={auth.logged ? <Home/> : <Login/>}/>
                <Route path="/Home" element={auth.logged? <Home/> : <Login/>}/>
                <Route path="/favorites" element={<Favorites/>}/>
                <Route path="/detail" element={<Show/>}>
                    <Route path=":comicId" element={<Show/>}/>
                </Route>

                <Route path="/error" element={<Error/>}/>
                <Route path="/loading" element={<Loading/>}/>
                
            </Routes>
        </BrowserRouter>
    );
}

export default RoutesComponent;