import { useEffect, useState } from "react"

export default function Kings(props) {
    const [kings, setKings] = useState({data:[]})

    useEffect(()=>{
        fetch('https://fly-starter-1-backend.fly.dev/kings')
        .then(resJson=>resJson.json())
        .then(setKings)
        .catch(console.warn)
    }, [])

    return <>
        <h2>Kings</h2>
        {kings.data.map((king, idx)=><article key={idx}>
            <hr />
            <ul>
                <li>index: {idx}</li>
                <li>Name: {king.name} {king.number}</li>
                <li>Country: {king.country}</li>
            </ul>
        </article>)}
    </>
}