import axios from "axios"
import { BASE_URL } from "../constants/BASE_URL"
import { useState, useEffect } from "react"

function GlobalState(){

    //Daniel: armazenar informações de publicações
    const [posts, setPosts] = useState([])

    //Daniel: armazenar endereço de uma unica publicação
    const [urlPost, setUrlPost] = useState('')

    //Daniel: controlar o loading das requisições axios
    const [loading, setLoading] = useState(false)

    //Daniel: controlar exibição de modais
    const [modal, setModal] = useState(false)

    //Daniel: controlar tipo de modais
    const [actionModal, setActionModal] = useState('')

    //Daniel: controlar a exibição de modais de alerta
    const [alertModal, setAlertModal] = useState(false)

    //Daniel: controlar o tipo de modais de alerta
    const [alertMessage, setAlertMessage] = useState('')

    return{
        posts,
        setPosts,
        urlPost, 
        setUrlPost,
        loading, 
        setLoading,
        modal, 
        setModal,
        actionModal, 
        setActionModal,
        alertModal, 
        setAlertModal,
        alertMessage, 
        setAlertMessage
    }
    
}


export default GlobalState