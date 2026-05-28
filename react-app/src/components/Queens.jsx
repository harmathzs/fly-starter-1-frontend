import { useEffect, useState } from "react"

export default function Queens(props) {
    const [queens, setQueens] = useState({data:[]})

    useEffect(()=>{
        fetch('https://fly-starter-1-backend.fly.dev/queens')
        .then(resJson=>resJson.json())
        .then(setQueens)
        .catch(console.warn)
    }, [])

    return <>
        <h2>Queens</h2>
        {queens.data.map((queen)=><article key={queen.id}>
            <hr />
            <ul>
                <li>id: {queen.id}</li>
                <li>Name: {queen.name} {queen.number}</li>
                <li>Country: {queen.country}</li>
            </ul>
        </article>)}
    </>
}