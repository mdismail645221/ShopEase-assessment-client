import { useEffect, useState } from "react"



export const useToken = (user) => {
    const [token, setToken] = useState("")
    console.log("user", user)
    useEffect(()=>{
        const email =  user?.email;
        const uid = user?.uid;
        const userName = user?.displayName;
        const userInfo = {
            email,
            uid,
            userName
        }
        console.log(userInfo)
        if(userInfo){
            fetch(`https://shop-ease-assessment-sever.vercel.app/jwt?email=${userInfo?.email}`, {
                method : 'PUT',
                headers: {
                    'content-type': 'application/json',
                },
                body: JSON.stringify(userInfo)
                
            })
            .then(res=> res.json())
            .then(data=> {
                if (data.status === "success" && data.data){
                    setToken(data.data)
                }
            })
        }

    }, [user])

    return [token]
}