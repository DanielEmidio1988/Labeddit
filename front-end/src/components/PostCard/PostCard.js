import { useContext } from "react"
import {GlobalContext} from "../../context/GlobalContext"
import like from "../../assets/like.svg"
import dislike from "../../assets/dislike.svg"
import coment from "../../assets/coment.svg"

function PostCard (props){
    const context = useContext(GlobalContext)

    const showPost = ()=>{
        context.setModal(true)
        context.setActionModal("post")
    }

    console.log("props",props)
    return(
        <article>
        <p className="subText">Enviado por: {props.post.creator.username}</p>
        <p>{props.post.content}</p>
        <p className="menuPost">
            <span className="subTextBold">
                <img src={like} alt="botão-like"/>
                {props.post.likes}
                <img src={dislike} alt="botão-dislike"/> 
            </span> 
            <span className="subText" onClick={()=>showPost()}>
                <img src={coment} alt="botão-comentários" />
                {props.post.comments}
            </span>
        </p>
    </article>
    )
}

export default PostCard