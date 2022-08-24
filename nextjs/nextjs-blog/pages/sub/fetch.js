import { useEffect, useState } from "react"

export default function SubFetch(){
    const [user, setUser] = useState({name:null});

    useEffect(()=>{
        fetch(process.env.NEXT_PUBLIC_API_URL+ 'api/hello')
        .then(type => type.json())
        .then(result=>{
            setUser(result);
        })
    })  
    return <>
        <h1>/pages/sub/fetch.js</h1>
        <a href="/">/pages/fetch.js</a>
        <p>User is {user.name} </p>
    </>
}