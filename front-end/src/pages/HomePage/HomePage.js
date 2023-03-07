import Header from "../../components/Header/Header"
import axios from "axios"
import { StyleMain, StyleSection } from "../../constants/stylePages"
// import like from "../../assets/like.svg"
// import dislike from "../../assets/dislike.svg"
// import coment from "../../assets/coment.svg"
import { useContext, useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import {GlobalContext} from "../../context/GlobalContext"
// import { useParams } from "react-router-dom"
import { goToLoginPage } from "../../router/coordinator"
import ModalPost from "../../components/ModalPost/ModalPost"
import PostCard from "../../components/PostCard/PostCard"
import { BASE_URL } from "../../constants/BASE_URL" 

function HomePage(){

    const context = useContext(GlobalContext)
    const navigate = useNavigate()
    // const params = useParams()
    const [content, setContent] = useState('')
    // let token = ''

    useEffect(()=>{
        browserPosts()
    },[])

    useEffect(()=>{
        const token = window.localStorage.getItem("TokenApi-Labeddit")
        if(!token){
            goToLoginPage(navigate)
        }
    },[])

    const browserPosts = async()=>{
        try {
            context.setLoading(true)
            const response = await axios.get(`${BASE_URL}/posts`,{
                headers: {
                    Authorization: window.localStorage.getItem("TokenApi-Labeddit")
                }
            }) 
            console.log(response)
            context.setPosts(response.data)
            context.setLoading(false)
        } catch (error) {
            console.log(error)
            context.setLoading(false)
        }
    }

    // useEffect(()=>{
    //     if(context.token === undefined){
    //         goToLoginPage(navigate)
    //     }
    // },[])

    const insertNewPost = async () =>{
        try {  
            if(context.token === undefined){
                return
            }        
            let body = {
                content,
            }

            await axios.post(`${BASE_URL}/posts`,body,{
                headers:{
                    Authorization:window.localStorage.getItem("TokenApi-Labeddit")
                }})  
            browserPosts() 
            setContent('')        
        } catch (error) {
            console.log(error)
        }
    }


    // console.log(context.token)
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
                postId={context.urlPost}
                browserPosts={browserPosts}/> 
                </>
                : 
                ''}

                <StyleSection>
                    <div>
                        <input value={content} onChange={(event)=>setContent(event.target.value)} className="InputPost" placeholder="Escreva seu post..."/>
                        <button onClick={()=>insertNewPost()}>Postar</button>
                    </div>
                    <div>
                        {context.loading ?
                        'Loading...' 
                        :
                        context.posts && context?.posts?.map((post)=> {return(
                            <PostCard key={post.id}
                            post={post}
                            browserPosts={browserPosts}/>
                        )})}
                    </div>
                </StyleSection>
            </StyleMain>
        </>
    )
}

export default HomePage