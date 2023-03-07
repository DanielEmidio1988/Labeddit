import logo from "../../assets/logoBig.svg"
import axios from "axios"
// import { MainSection } from "./styleLoginPage"
import { StyleMain, StyleSectionLoginSignup } from "../../constants/stylePages"
import { goToSignUpPage, goToHomePage } from "../../router/coordinator"
import { useNavigate } from "react-router-dom"
import { useContext, useState, useEffect } from "react"
import {GlobalContext} from "../../context/GlobalContext"
import { BASE_URL } from "../../constants/BASE_URL"

function LoginPage(){
    const navigate = useNavigate()
    const context = useContext(GlobalContext)
    const [form, setForm] = useState({email:'',password:''})

    const onChangeForm = (event) => {
        setForm({ ...form, [event.target.name]: event.target.value })
    }

    useEffect(()=>{
        const token = window.localStorage.getItem("TokenApi-Labeddit")
        if(token){
            goToHomePage(navigate)
        }
    },[])

    const loginUser = async ()=>{
        try {
            let body ={
                email: form.email,
                password: form.password,
            }

            const response = await axios.post(`${BASE_URL}/users/login`, body)
            console.log("response", response)
            context.setToken(response.data.token)
            // const tokenlabedditapi = JSON.stringify(response.data.token)
            window.localStorage.setItem("TokenApi-Labeddit", response.data.token)

            // localStorage.setItem('TokenApi-Labeddit', context.token)
            // console.log("teste vazio", response.data.tok)
            // console.log("teste cheio", response.data.token)
            if(response.data.token !== undefined){
                goToHomePage(navigate)
            } 
        } catch (error) {
            console.log(error)
            //Daniel: criar modal com o status 404 (senha incorreta)
        }
    }


    return(
        <>
        <StyleMain>
            <StyleSectionLoginSignup>
                <div>
                    <img src={logo} alt="Logo Labeddit"/>
                    <h3>O projeto de rede social da Labenu</h3>
                </div>
                <div>
                    <input value={form.email} name="email" onChange={onChangeForm} placeholder="E-mail"/>
                    <input value={form.password} name="password" onChange={onChangeForm} type="password" placeholder="Senha"/>
                </div>
                <div>
                    <button onClick={()=>loginUser()}>Continuar</button>
                    <button onClick={()=>goToSignUpPage(navigate)} className="signUpButton">Crie uma conta</button>
                </div>
            </StyleSectionLoginSignup>
        </StyleMain>
        </>
    )
}

export default LoginPage