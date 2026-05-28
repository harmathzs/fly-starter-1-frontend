import { useEffect, useState } from "react"
import { getBackendUrl } from "../config"

export default function Queens() {
    const [queens, setQueens] = useState({ data: [] })

    useEffect(() => {
        // Read queens from backend once when the component mounts.
        const backendUrl = getBackendUrl()
        fetch(`${backendUrl}/queens`)
            .then((resJson) => resJson.json())
            .then(setQueens)
            .catch(console.warn)
    }, [])

    return <>
        <h2>Queens</h2>
        <table>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Country</th>
                </tr>
            </thead>
            <tbody>
                {queens.data.map((queen) => (
                    <tr key={queen.id}>
                        <td>{queen.id}</td>
                        <td>{queen.name} {queen.number}</td>
                        <td>{queen.country}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    </>
}