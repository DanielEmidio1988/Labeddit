import Header from "../../components/Header/Header"
import axios from "axios"
import { StyleMain, StyleSection } from "../../constants/stylePages"
// import like from "../../assets/like.svg"
// import dislike from "../../assets/dislike.svg"
// import coment from "../../assets/coment.svg"
import { useContext, useEffect, useState } from "react"
import {GlobalContext} from "../../context/GlobalContext"
// import { useParams } from "react-router-dom"
import ModalPost from "../../components/ModalPost/ModalPost"
import PostCard from "../../components/PostCard/PostCard"
import { BASE_URL } from "../../constants/BASE_URL" 

function HomePage(){

    const context = useContext(GlobalContext)
    // const params = useParams()
    const [content, setContent] = useState('')

    const insertNewPost = async () =>{
        try {          
            let body = {
                content,
            }
            await axios.post(`${BASE_URL}/posts`,body,{
                headers:{Authorization:'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6InUwMDEiLCJ1c2VybmFtZSI6IkRhbmllbCIsInJvbGUiOiJBRE1JTiIsImlhdCI6MTY3Nzg0NjQzMiwiZXhwIjoxNjc3OTMyODMyfQ.3oiSSQhgE4Q-twjcQpEoFlRUpOiFsjPovmxnPt-e3JU'}})           
        } catch (error) {
            console.log(error)
        }
    }

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
                <ModalPost
                postId={context.urlPost}/> 
                </>
                : 
                ''}

                <StyleSection>
                    <div>
                        <input value={content} onChange={(event)=>setContent(event.target.value)} className="InputPost" placeholder="Escreva seu post..."/>
                        <button onClick={()=>insertNewPost()}>Postar</button>
                    </div>
                    <div>
                        {context.posts && context.posts.map((post)=> {return(
                            <PostCard
                            post={post}/>
                        )})}
                    </div>
                </StyleSection>
            </StyleMain>
        </>
    )
}

export default HomePage