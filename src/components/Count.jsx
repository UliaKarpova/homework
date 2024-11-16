import { useState } from "react"

export const Count = () => {
    const [count, setCount] = useState(0)

    const increase = () => {
        setCount((prev) => { return prev < 5 ? ++prev : prev })
    }
    const decrease = () => {
        setCount((prev) => { return prev > 0 ? --prev : prev })
    }
    return (
        <div style={{ display: 'flex', flexDirection: 'row', marginTop: '12px' }}>
            <button onClick={decrease}>-</button>
            <span style={{ margin: '0 12px' }}>{count}</span>
            <button onClick={increase}>+</button>

        </div>
    )
}