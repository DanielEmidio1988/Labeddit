import axios from "axios"
import { BASE_URL } from "../constants/BASE_URL"
import { useState, useEffect } from "react"

function GlobalState(){

    //Daniel: controle de usuários
    const [user, setUser] = useState('')

    //Daniel: armazenar informações de publicações
    const [posts, setPosts] = useState([])

    //Daniel: armazenar endereço de uma unica publicação
    const [urlPost, setUrlPost] = useState('')

    //Daniel: controlar exibição de modais
    const [modal, setModal] = useState(false)

    //Daniel: controlar tipo de modais
    const [actionModal, setActionModal] = useState('')

    useEffect(()=>{
        browserPosts()
    },[])

    const browserPosts = async()=>{
        try {
            const response = await axios.get(`${BASE_URL}/posts`,{
                headers: {
                    Authorization: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6InUwMDEiLCJ1c2VybmFtZSI6IkRhbmllbCIsInJvbGUiOiJBRE1JTiIsImlhdCI6MTY3Nzg0NjQzMiwiZXhwIjoxNjc3OTMyODMyfQ.3oiSSQhgE4Q-twjcQpEoFlRUpOiFsjPovmxnPt-e3JU'
                }
            }) 
            console.log(response)
            setPosts(response.data)
        } catch (error) {
            console.log(error)
        }
    }

    return{
        posts,
        setPosts,
        urlPost, 
        setUrlPost,
        modal, 
        setModal,
        actionModal, 
        setActionModal,
    }
    

}


export default GlobalState