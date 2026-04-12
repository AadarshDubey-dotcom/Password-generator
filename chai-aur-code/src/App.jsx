import {useState} from 'react'
import './App.css'

function App() {
  const [color, setColor] = useState("olive")
  return (
    <>
      <div className="w-full h-screen duration-200" style={{backgroundColor: color}} >
        <div className="absolute top-10 left-1/2 transform -translate-x-1/2 -translate-y-1/2 shadow-lg bg-white rounded-3xl px-3 py-2">
  <div className="flex flex-row justify-center items-center gap-4">
    <button 
    onClick={() => setColor("Red")}
    className="cursor-pointer pointer-click px-4 py-2 bg-blue-500 text-white rounded-full" style={{backgroundColor: "red"}}>
      Red
    </button>
    <button onClick={() => setColor("Green")} className="cursor-pointer px-4 py-2 bg-blue-500 text-white rounded-full" style={{backgroundColor: "green"}}>
      Green
    </button>
    <button onClick={() => setColor("Blue")} className="cursor-pointer px-4 py-2 bg-blue-500 text-white rounded-full" style={{backgroundColor: "blue"}}>
      Blue
    </button>
    <button onClick={() => setColor("Purple")} className="cursor-pointer px-4 py-2 bg-blue-500 text-white rounded-full"style={{backgroundColor: "purple"}}>
      Purple
    </button>
  </div>
</div>

      </div>
    </>
  )
}

export default App
