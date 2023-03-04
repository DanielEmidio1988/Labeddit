import { useContext } from "react"
import {GlobalContext} from "../../context/GlobalContext"
import axios from "axios"
import { BASE_URL } from "../../constants/BASE_URL"
import like from "../../assets/like.svg"
import dislike from "../../assets/dislike.svg"
import coment from "../../assets/coment.svg"

function PostCard (props){
    const context = useContext(GlobalContext)

    const showPost = (postId)=>{
        context.setUrlPost(postId)
        context.setModal(true)
        context.setActionModal("post")
    }

    const likePost = async (postId)=>{
        try {
            let body = {
                like: 1,
            }
            await axios.put(`${BASE_URL}/posts/${postId}/like`,body,{
                headers:{
                    Authorization:context.token
                }})
            props.browserPosts()
        } catch (error) {
            console.log(error)
        }
    }

    const dislikePost = async (postId)=>{
        try {
            let body = {
                like: 0,
            }
            await axios.put(`${BASE_URL}/posts/${postId}/like`,body,{
                headers:{
                    Authorization:'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6InUwMDEiLCJ1c2VybmFtZSI6IkRhbmllbCIsInJvbGUiOiJBRE1JTiIsImlhdCI6MTY3Nzg0NjQzMiwiZXhwIjoxNjc3OTMyODMyfQ.3oiSSQhgE4Q-twjcQpEoFlRUpOiFsjPovmxnPt-e3JU'
                }})
            props.browserPosts()
        } catch (error) {
            console.log(error)
        }
    }

    console.log("props",props)
    return(
        <article>
        <p className="subText">Enviado por: {props.post.creator.username}</p>
        <p>{props.post.content}</p>
        <p className="menuPost">
            <span className="subTextBold">
                <img src={like} onClick={()=>likePost(props.post.id)} alt="botão-like"/>
                {props.post.likes}
                <img src={dislike} onClick={()=>dislikePost(props.post.id)} alt="botão-dislike"/> 
            </span> 
            <span className="subText" onClick={()=>showPost(props.post.id)}>
                <img src={coment} alt="botão-comentários" />
                {props.post.comments}
            </span>
        </p>
    </article>
    )
}

export default PostCard