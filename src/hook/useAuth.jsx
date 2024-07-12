import axios from "axios"
import { useEffect, useState } from "react"

export const useAuth = (code) => {
    const [accessToken, setAccessToken] = useState("")
    const [refreshToken, setRefreshToken] = useState("")
    const [expiresIn, setExpiresIn] = useState("")
    console.log(code);
    useEffect(() => {
        axios.post("http://localhost:3001/login",{code}).then(res => {
            setAccessToken(res.data.accessToken)
            setRefreshToken(res.data.refreshToken)
            setExpiresIn(res.data.expiresIn)
             window.history.pushState({}, null, "/")
        }).catch(err => {
            // window.location = "/"
        })
    },[])

    return accessToken
}