import axios from "axios"
import { useState, useEffect } from "react"

function GlobalState(){

    //Daniel: controle de usuários (EM AVALIAÇÃO)
    const [user, setUser] = useState('')

    //Daniel: controlar exibição de modais
    const [modal, setModal] = useState(false)

    //Daniel: controlar tipo de modais
    const [actionModal, setActionModal] = useState('')

    return{
        modal, 
        setModal,
        actionModal, 
        setActionModal,
    }
    

}


export default GlobalState