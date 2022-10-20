import { useNavigate } from "react-router-dom";
import { useState } from "react";
import "./index.css"
import Comic from "../../assets/comic.png"
import { useDispatch } from "react-redux";
import { createUser } from "../../redux/slices/authSlice";



const Singup =()=>{
    const [name, setName] = useState('');
    const [pass, setPass] = useState('');
    const [id, setId] = useState('');
    const [email, setEmail] = useState('');
    const dispatch = useDispatch();

    const navigate =useNavigate();

    const handleInputNameChange=({target:{value}})=>{
        setName(value);
    }
    const handleInputPassChange=({target:{value}})=>{
        setPass(value);
    }
    const handleInputIdChange=({target:{value}})=>{
        setId(value);
    }
    const handleInputEmailChange=({target:{value}})=>{
        setEmail(value);
    }

    const handleSingUpClick=(e)=>{
        e.preventDefault();
        dispatch(
            createUser({
               name: name,
               pass: pass,
               id: id,
               email: email
            })
        );
     }

     const handleBackSingUpClick=()=>{
        navigate("/");

     }
    return(
        <div className="login-ctn flex">
            <div className="row">
                <div className="col-12">
                    <img src={Comic} alt="Avatar" className="avatar"/>
                </div>
                <div className="col-12 mt-5 form-ctn">
                    <form className="row g-3" onSubmit={handleSingUpClick}>
                        <div className="row mb-3">
                            <label htmlFor="inputEmail3" className="col-sm-3 col-form-label">Name</label>
                            <div className="col-sm-9">
                                <input type="text" className="form-control"  value={name} onChange={handleInputNameChange}/>
                            </div>
                        </div>
                        <div className="row mb-3">
                            <label htmlFor="inputEmail3" className="col-sm-3 col-form-label">Id</label>
                            <div className="col-sm-9">
                                <input type="text" className="form-control" value={id} onChange={handleInputIdChange} />
                            </div>
                        </div>
                        <div className="row mb-3">
                            <label htmlFor="inputEmail3" className="col-sm-3 col-form-label">Email</label>
                            <div className="col-sm-9">
                                <input type="email" className="form-control" value={email} onChange={handleInputEmailChange} />
                            </div>
                        </div>
                        <div className="row mb-3">
                            <label htmlFor="inputPassword3" className="col-sm-3 col-form-label">Password</label>
                            <div className="col-sm-9">
                                <input type="password" className="form-control" value={pass} onChange={handleInputPassChange} />
                            </div>
                        </div>
                        <div className="col-6">
                            <button type="submit" className="btn btn-danger">Sign Up</button>
                        </div>
                        <div className="col-6">
                            <button type="buttom" className="btn btn-outline-danger" onClick={handleBackSingUpClick}>Back</button>
                        </div>
                    
                    </form>
                </div>

                
            </div>
        </div>
    );
}

export default Singup;