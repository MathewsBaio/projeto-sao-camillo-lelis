import { useState } from "react"


export default function Card({titulo, paragrafo}) {
    const [ativo, setAtivo] = useState(false)

    return <div>
        {ativo ? (<p>{paragrafo}</p>) : (<h1>{titulo}</h1>)}
    </div>
}