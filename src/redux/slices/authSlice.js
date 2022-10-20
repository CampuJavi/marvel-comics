import { createSlice } from "@reduxjs/toolkit";

var usserLogged="";
const initialState={
    users: localStorage.getItem("SIGNED_UP_USERS"), 
    logged: localStorage.getItem("USER_LOGGED") ?? false,
    name: "",
    pass: "", 
    id: "",
    email: "",
    favorite: "[]",
}

const authSlice = createSlice({
    name: "authSlice",
    initialState,
    
    reducers: {
        createUser(state, action){
            var current = JSON.parse(localStorage.getItem("SIGNED_UP_USERS") ?? "[]");
            const user = {
                name: action.payload.name, 
                pass: action.payload.pass,
                id: action.payload.id,
                email: action.payload.email,
                favorite:"[]"
            };
            current.push(user);
            usserLogged=action.payload.name;
            localStorage.setItem("USER_LOGGED", usserLogged);
            localStorage.setItem("SIGNED_UP_USERS", JSON.stringify(current)); 
            localStorage.setItem("USER_FAVORITE_COMICS","[]");
            return{
                ...state,
                users: JSON.stringify(current),
                logged: true,
                name: user.name,
                pass: user.pass,
                favorite: localStorage.getItem("USER_FAVORITE_COMICS")
            }
                
                  
        },
        loginUser(state, action){
            const currentUsers=JSON.parse(localStorage.getItem("SIGNED_UP_USERS") ?? "[]");
            var logged = false; //TODO: Fix this
            
            for (let i = 0; i < currentUsers.length; i++) {
                
                if (currentUsers[i].name === action.payload.name && currentUsers[i].pass ===action.payload.pass) {
                    logged = true;
                    localStorage.setItem("CURRENT_USER", logged);
                    usserLogged=currentUsers[i].name;
            localStorage.setItem("USER_LOGGED", usserLogged);
                }
            }
            return{
                ...state,
                logged: logged,
                name: action.payload.name,
                pass: action.payload.pass,
                favorite: localStorage.getItem("USER_FAVORITE_COMICS"),
            }
        },
        logautUser(state){
            
            localStorage.setItem("CURRENT_USER", false);
            localStorage.setItem("USER_LOGGED", false);
            return{
                ...state,
                logged: false,
                name: "",
                pass: "", 
                id: "",
                email: "",
                favorite:"[]"
            }
        },
        addFavorite(state,action){
            const currentUsers=JSON.parse(localStorage.getItem("SIGNED_UP_USERS") ?? "[]");
            let user = localStorage.getItem("USER_LOGGED");

            for(let i = 0; i < currentUsers.length; i++){
                if (currentUsers[i].name === user) {
                    let usersFavorit=JSON.parse(currentUsers[i].favorite);
                    let flag = true;
                    for (const data in usersFavorit){
                        
                        //console.log("comparar:"+data.code+" === "+ action.payload.code);
                        if (usersFavorit[data].code === action.payload.code){
                            flag = false;
                        }

                    }
                    if (flag){
                        usersFavorit.push({
                            code:action.payload.code,
                            title:action.payload.title,
                            image:action.payload.image
                        })

                    }


                    currentUsers[i].favorite = JSON.stringify(usersFavorit);
                }   
            }
            const formattedUsers = JSON.stringify(currentUsers);
            localStorage.setItem("SIGNED_UP_USERS", formattedUsers);

            return {
                ...state,
                users: formattedUsers,
            }
        },
        getUserFavorites(state){
            const currentUsers=JSON.parse(localStorage.getItem("SIGNED_UP_USERS") ?? "[]");
            let user = localStorage.getItem("USER_LOGGED");
            let currentFavorites = [];
            
            for(let i = 0; i < currentUsers.length; i++){
                if (currentUsers[i].name === user) {
                    currentFavorites = JSON.parse(currentUsers[i].favorite);
                }   
            }
            return {
                ...state,
                favorite: currentFavorites,
            }
        }
       
    }
});


export const {createUser, loginUser, logautUser, addFavorite, getUserFavorites} = authSlice.actions;

export default authSlice.reducer;