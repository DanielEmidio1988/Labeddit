import Header from "../../components/Header/Header"
import { StyleMain, StyleSection } from "../../constants/stylePages"
// import like from "../../assets/like.svg"
// import dislike from "../../assets/dislike.svg"
// import coment from "../../assets/coment.svg"
import { useContext } from "react"
import {GlobalContext} from "../../context/GlobalContext"
import { useParams } from "react-router-dom"
import ModalPost from "../../components/ModalPost/ModalPost"
import PostCard from "../../components/PostCard/PostCard"

function HomePage(){

    const context = useContext(GlobalContext)
    const params = useParams()

    console.log(context.posts)
    return(
        <>
            {context.modal ? 
            <section className="boxOverlay" />
            : 
            ''}
            <Header/>
            <StyleMain>
                {context.modal && context.actionModal === "post" ? 
                <>
                {/* <section className="boxOverlay" /> */}
                <ModalPost/> 
                </>
                : 
                ''}

                <StyleSection>
                    <div>
                        <input className="InputPost" placeholder="Escreva seu post..."/>
                        <button>Postar</button>
                    </div>
                    <div>
                        {context.posts && context.posts.map((post)=> {return(
                            <PostCard
                            post={post}/>
                        )})}
                        {/* <article>
                            <p className="subText">Enviado por: Fulano</p>
                            <p>Porque a maioria dos desenvolvedores usam Linux? ou as empresas de tecnologia usam Linux ?</p>
                            <p className="menuPost">
                                <span className="subTextBold">
                                    <img src={like} alt="botão-like"/>
                                    300
                                    <img src={dislike} alt="botão-dislike"/> 
                                </span> 
                                <span className="subText" onClick={()=>showPost()}>
                                    <img src={coment} alt="botão-comentários" />
                                    50
                                </span>
                            </p>
                        </article> */}
                    </div>
                </StyleSection>
            </StyleMain>
        </>
    )
}

export default HomePage