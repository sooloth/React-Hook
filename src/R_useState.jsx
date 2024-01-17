import React,{useState}from 'react'

export const R_useState = () => {
    const [count,setCount] = useState(4)
    const [theme,setTheme] = useState("blue")

    const decrementCount =()=>{
        setCount(prevenCount =>prevenCount - 1)
    }
    const incrementCount =()=>{
        setCount(prevenCount=>prevenCount + 1)
        setTheme("red")
    }
    return (
        <>
        <button onClick={decrementCount}>-</button>
        <span>{count}</span>
        <span>{theme}</span>
        <button onClick={incrementCount}>+</button>
        </>
    )
}
