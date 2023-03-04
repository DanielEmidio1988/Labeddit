import Header from "../../components/Header/Header"
import axios from "axios"
import { useContext } from "react"
import {GlobalContext} from "../../context/GlobalContext"
import { StyleContainerModal, StyleSection } from "./styleModalPost"
import like from "../../assets/like.svg"
import dislike from "../../assets/dislike.svg"
import coment from "../../assets/coment.svg"
import { useEffect, useState } from "react"
import { BASE_URL } from "../../constants/BASE_URL"

function ModalPost(){

    const context = useContext(GlobalContext)
    const [post, setPost] = useState({})
    const [content, setContent] = useState('')

    useEffect(()=>{
        browserPost()
    },
    [context.urlPost, context.posts])

    //Daniel: renderizar publicação individual
    const browserPost = async()=>{
        try {
            let aux = ''
            const response = await axios.get(`${BASE_URL}/posts/${context.urlPost}`,{
                headers:{
                    Authorization:context.token
                }})
            console.log("modal", response.data[0])
            aux = response.data[0]
            setPost(aux)
        } catch (error) {
            console.log(error)
        }
    }

    const insertNewComment = async () =>{
        try {          
            let body = {
                content,
            }
            await axios.post(`${BASE_URL}/posts/${context.urlPost}`,body,{
                headers:{Authorization:context.token}})           
            setContent('')

            } catch (error) {
            console.log(error)
        }
    }

    return(
        <>
            
            <StyleContainerModal>
            <Header/>
                <StyleSection>
                    <div>
                        <article>
                            <p className="subText">Enviado por: {post && post?.creator?.username}</p>
                            <p>{post.content}</p>
                            <p className="menuPost">
                                <span className="subTextBold">
                                    <img src={like} alt="botão-like"/>
                                    { post.likes}
                                    <img src={dislike} alt="botão-dislike"/> 
                                </span> 
                                <span className="subText">
                                    <img src={coment} alt="botão-comentários" />
                                    {post.comments}
                                </span>
                            </p>
                        </article>
                        <input value={content} onChange={(event)=>setContent(event.target.value)} className="InputPost" placeholder="Escreva seu post..."/>
                        <button onClick={()=>{insertNewComment()}}>Responder</button>
                    </div>
                    <div>
                        {post && post?.comments_post?.map((comment)=>{return(
                        <article>
                            {/* Corrigir linha abaixo, para puxar o nome do criador do comentário */}
                            <p className="subText">Enviado por: {comment.creator_id}</p>
                            <p>{comment.content}</p>
                            <p className="menuPost">
                                <span className="subTextBold">
                                    <img src={like} alt="botão-like"/>
                                    {comment.likes}
                                    <img src={dislike} alt="botão-dislike"/> 
                                </span> 
                            </p>
                        </article>
                        )})}
                    </div>
                </StyleSection>
            </StyleContainerModal>
        </>
    )
}

export default ModalPost