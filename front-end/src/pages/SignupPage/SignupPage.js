import Header from "../../components/Header/Header"
import { StyleMain, StyleSectionLoginSignup } from "../../constants/stylePages"
import { goToHomePage } from "../../router/coordinator"
import { useNavigate } from "react-router-dom"

function SignupPage (){
    const navigate = useNavigate()
    return(
        <>
        <Header/>
        <StyleMain>
            <StyleSectionLoginSignup>
                <div>
                    <h1>Olá, boas vindas ao LabEddit ;D</h1>
                </div>
                <div>
                    <input placeholder="Apelido"/>
                    <input placeholder="E-mail"/>
                    <input placeholder="Senha"/>         
                </div>
                <div>
                    <p>Ao continuar, você concorda com o nosso <a href="#">Contrato de usuário</a> e nossa <a href="#">Politica de Privacidade</a></p>
                    <p>
                        <span>
                            <input className="CheckBox" type="checkbox"/>
                        </span>
                        Eu concordo em receber e-mails sobre coisas legais no Labeddit
                    </p>
                    <button onClick={()=>goToHomePage(navigate)}>Cadastrar</button>
                </div>
            </StyleSectionLoginSignup>
        </StyleMain>
        </>
    )
}

export default SignupPage