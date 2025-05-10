import { useState } from 'react'
import './App.css'

function App() {
    const [count, setCount] = useState(0)

    return (
        <>
            <main>
                <h1>{count}</h1>
                <Display count={count} setCount={setCount}/>
            </main>
        </>
    )
}


function Display({count, setCount}) {
    return (
        <div>
            <Button name="increment" count={count} setCount={setCount}/>
            <Button name="decrement" count={count} setCount={setCount}/>
        </div>
    )

}

function Button({ name,setCount }) {
    const handleClick = () => {
        if (name === 'increment') {
            setCount((prevCount) => prevCount + 1)
        } else {
            setCount((prevCount) => prevCount === 0 ? prevCount  : prevCount - 1)
        }
    }
    return (
        <div style={{margin: '20px'}}>
            <button onClick={handleClick} className="button">
                {name}
            </button>
        </div>
    )
}

export default App
