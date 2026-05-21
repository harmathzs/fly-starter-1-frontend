import { useEffect, useState } from "react"

export default function Kings(props) {
    const [kings, setKings] = useState([])

    useEffect(()=>{
        fetch('https://fly-starter-1-backend.fly.dev/kings')
        .then(resJson=>resJson.json())
        .then(setKings)
        .catch(console.warn)
    }, [])

    return <>
        <p>
            {JSON.stringify(kings)}
        </p>
    </>
}