import { myAxios } from "./Helper";

const storedToken = sessionStorage.getItem('jwtToken')
const storedEmail = sessionStorage.getItem('email')

export const RegisterData =(user)=>{
    return myAxios.post("/register",user)
    .then((response)=>response.user);
}

export const LoginData =(user)=>{
    return myAxios.post("/signIn",user)
    .then((response)=>response.data);
}

export const NavbarSearch=(doSearch)=>{
    return myAxios.post("/",doSearch)
    .then((response)=>response.doSearch)
}

export const AddMoneyService=(money)=>{
    return myAxios.post("/addMoney",money,{
        headers: {
            'Authorization': `Bearer ${storedToken}`,
            'email': storedEmail
        }})
    .then((response)=>response.money)
}


