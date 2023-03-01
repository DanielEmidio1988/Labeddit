import logo from "../../assets/logoBig.svg"
// import { MainSection } from "./styleLoginPage"
import { StyleMain, StyleSectionLoginSignup } from "../../constants/stylePages"
import { goToSignUpPage, goToHomePage } from "../../router/coordinator"
import { useNavigate } from "react-router-dom"

function LoginPage(){
    const navigate = useNavigate()

    return(
        <>
        <StyleMain>
            <StyleSectionLoginSignup>
                <div>
                    <img src={logo} alt="Logo Labeddit"/>
                    <h3>O projeto de rede social da Labenu</h3>
                </div>
                <div>
                    <input placeholder="E-mail"/>
                    <input type="password" placeholder="Senha"/>
                </div>
                <div>
                    <button onClick={()=>goToHomePage(navigate)}>Continuar</button>
                    <button onClick={()=>goToSignUpPage(navigate)} className="signUpButton">Crie uma conta</button>
                </div>
            </StyleSectionLoginSignup>
        </StyleMain>
        </>
    )
}

export default LoginPage