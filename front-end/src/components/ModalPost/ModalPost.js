import Header from "../../components/Header/Header"
// import { StyleMain, StyleSection } from "../../constants/stylePages"
import { StyleContainerModal, StyleSection } from "./styleModalPost"
import like from "../../assets/like.svg"
import dislike from "../../assets/dislike.svg"
import coment from "../../assets/coment.svg"

function ModalPost(){
    return(
        <>
            
            <StyleContainerModal>
            <Header/>
                <StyleSection>
                    <div>
                        <article>
                            <p className="subText">Enviado por: Fulano</p>
                            <p>Porque a maioria dos desenvolvedores usam Linux? ou as empresas de tecnologia usam Linux ?</p>
                            <p className="menuPost">
                                <span className="subTextBold">
                                    <img src={like} alt="botão-like"/>
                                    300
                                    <img src={dislike} alt="botão-dislike"/> 
                                </span> 
                                <span className="subText">
                                    <img src={coment} alt="botão-comentários" />
                                    50
                                </span>
                            </p>
                        </article>
                        <input className="InputPost" placeholder="Escreva seu post..."/>
                        <button>Responder</button>
                    </div>
                    <div>
                        <article>
                            <p className="subText">Enviado por: Fulano</p>
                            <p>Porque a maioria dos desenvolvedores usam Linux? ou as empresas de tecnologia usam Linux ?</p>
                            <p className="menuPost">
                                <span className="subTextBold">
                                    <img src={like} alt="botão-like"/>
                                    300
                                    <img src={dislike} alt="botão-dislike"/> 
                                </span> 
                            </p>
                        </article>
                        <article>
                            <p className="subText">Enviado por: Fulano</p>
                            <p>Porque a maioria dos desenvolvedores usam Linux? ou as empresas de tecnologia usam Linux ?</p>
                            <p className="menuPost">
                                <span className="subTextBold">
                                    <img src={like} alt="botão-like"/>
                                    300
                                    <img src={dislike} alt="botão-dislike"/> 
                                </span> 
                            </p>
                        </article>
                        <article>
                            <p className="subText">Enviado por: Fulano</p>
                            <p>Porque a maioria dos desenvolvedores usam Linux? ou as empresas de tecnologia usam Linux ?</p>
                            <p className="menuPost">
                                <span className="subTextBold">
                                    <img src={like} alt="botão-like"/>
                                    300
                                    <img src={dislike} alt="botão-dislike"/> 
                                </span> 
                            </p>
                        </article>
                    </div>
                </StyleSection>
            </StyleContainerModal>
        </>
    )
}

export default ModalPost