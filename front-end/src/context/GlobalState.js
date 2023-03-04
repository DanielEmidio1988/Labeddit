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

    const [token, setToken] = useState('')

    //Daniel: controlar exibição de modais
    const [modal, setModal] = useState(false)

    //Daniel: controlar tipo de modais
    const [actionModal, setActionModal] = useState('')

    return{
        posts,
        setPosts,
        urlPost, 
        setUrlPost,
        token,
        setToken,
        modal, 
        setModal,
        actionModal, 
        setActionModal,
    }
    

}


export default GlobalState