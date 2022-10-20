
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useState } from "react";

import "./index.css"
import Comic from "../../assets/comic.png"
import { loginUser } from "../../redux/slices/authSlice";



const Login =()=>{
    const [name, setName] = useState('');
    const [pass, setPass] = useState('');

    const navigate =useNavigate();
    const dispatch = useDispatch();

    const handleInputNameChange=({target:{value}})=>{
        setName(value);
    }
    const handleInputPassChange=({target:{value}})=>{
        setPass(value);
    }

    const handleSingUpClick=()=>{
        navigate("/singup");
     }

     const handleSingInClick=(e)=>{
        e.preventDefault();
        dispatch(
            loginUser({
               name: name,
               pass: pass
            })
        );
     }

    return(
        <div className="login-ctn flex">
            <div className="row">
                <div className="col-12">
                    <img src={Comic} alt="Avatar" className="avatar"/>
                </div>
                <div className="col-12 mt-5 form-ctn">
                    <form className="row g-3" onSubmit={handleSingInClick}>
                    <div className="mb-3">
                        <label htmlFor="formGroupExampleInput" className="form-label">Name</label>
                        <input type="text" className="form-control"  value={name} onChange={handleInputNameChange}/>
                        </div>
                        <div className="mb-3">
                        <label htmlFor="formGroupExampleInput2" className="form-label">Password</label>
                        <input type="password" className="form-control"  value={pass} onChange={handleInputPassChange} />
                        </div>
                        <div className="col-6">
                            <button type="submit" className="btn btn-danger" >Sign In</button>
                        </div>
                        <div className="col-6">
                            <button type="button" className="btn btn-outline-danger" onClick={handleSingUpClick}>Sign Up</button>
                        </div>
                    </form>
                </div>

                
            </div>
        </div>
    );
}

export default Login;