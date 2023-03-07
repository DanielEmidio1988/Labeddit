import Header from "../../components/Header/Header"
import axios from "axios"
import { StyleMain, StyleSectionLoginSignup } from "../../constants/stylePages"
import { goToHomePage } from "../../router/coordinator"
import { useNavigate } from "react-router-dom"
import { useState } from "react"
import { BASE_URL } from "../../constants/BASE_URL"
import { useContext } from "react"
import { GlobalContext } from "../../context/GlobalContext"

function SignupPage (){
    const navigate = useNavigate()
    const [form, setForm] = useState({
        username: '',
        email: '',
        password: '',
    })
    const [checkBox, setCheckBox] = useState(false)
    const context = useContext(GlobalContext)

    const onChangeForm = (event)=>{
        setForm({ ...form, [event.target.name]: event.target.value })
    }

    const signUp = async ()=>{
        try {
            //Daniel: INCLUIR CONDICIONAL PARA NÃO PERMITIR CADASTRO, CASO O CHECKBOX SEJA FALSO
            let body ={
                username: form.username,
                email: form.email,
                password: form.password,
            }
            const response = await axios.post(`${BASE_URL}/users/signup`, body)
            context.setToken(response.data.token)
            window.localStorage.setItem("TokenApi-Labeddit", response.data.token)
            goToHomePage(navigate)
        } catch (error) {
            console.log(error)
        }
    }

    const onChangeCheckBox = (event)=>{
        const auxCheckBox = !checkBox
        setCheckBox(auxCheckBox)
    }

    return(
        <>
        <Header/>
        <StyleMain>
            <StyleSectionLoginSignup>
                <div>
                    <h1>Olá, boas vindas ao LabEddit ;D</h1>
                </div>
                <div>
                    <input value={form.username} name="username" onChange={onChangeForm} placeholder="Apelido"/>
                    <input value={form.email} name="email" onChange={onChangeForm} placeholder="E-mail"/>
                    <input value={form.password} name="password" onChange={onChangeForm} placeholder="Senha"/>         
                </div>
                <div>
                    <p>Ao continuar, você concorda com o nosso <a href="#">Contrato de usuário</a> e nossa <a href="#">Politica de Privacidade</a></p>
                    <p>
                        <span>
                            <input name="rememberme" value={checkBox} onChange={onChangeCheckBox} className="CheckBox" type="checkbox"/>
                        </span>
                        Eu concordo em receber e-mails sobre coisas legais no Labeddit
                    </p>
                    <button onClick={()=>signUp()}>Cadastrar</button>
                </div>
            </StyleSectionLoginSignup>
        </StyleMain>
        </>
    )
}

export default SignupPage