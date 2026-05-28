import { useEffect, useState } from "react"
import { getBackendUrl } from "../config"

export default function Kings() {
    const [kings, setKings] = useState({ data: [] })

    useEffect(() => {
        // Read kings from backend once when the component mounts.
        const backendUrl = getBackendUrl()
        fetch(`${backendUrl}/kings`)
            .then((resJson) => resJson.json())
            .then(setKings)
            .catch(console.warn)
    }, [])

    return <>
        <h2>Kings</h2>
        <table>
            <thead>
                <tr>
                    <th>#</th>
                    <th>Name</th>
                    <th>Country</th>
                </tr>
            </thead>
            <tbody>
                {kings.data.map((king, idx) => (
                    <tr key={idx}>
                        <td>{idx + 1}</td>
                        <td>{king.name} {king.number}</td>
                        <td>{king.country}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    </>
}