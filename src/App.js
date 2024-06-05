import "./index.css"
import { useState } from "react";
function App() {
const[color ,setColor] = useState("indigo")
  return (
    <div className="h-screen w-full flex justify-center" style={{backgroundColor:color}}>
      
      <div className="fixed bottom-6 bg-white rounded-3xl border-2 border-black text-white " style={{backgroundColor:color}}>
        <button className="w-[80px] rounded-2xl font-bold font-serif p-1 my-2 ml-3 bg-green-500 text-white" style={{textShadow:"0 1px black,0-1px black,-1px 0 black,1px 0 black"}} onClick={()=>{setColor("green")}}> Green </button>
        <button className="w-[80px] rounded-2xl font-bold font-serif mx-3 p-1 bg-blue-600 text-white" style={{textShadow:"0 1px black,0-1px black,-1px 0 black,1px 0 black"}} onClick={()=>{setColor("blue")}}> Blue </button>
        <button className="w-[80px] rounded-2xl font-bold font-serif mx-3 p-1 bg-indigo-600 text-white" style={{textShadow:"0 1px black,0-1px black,-1px 0 black,1px 0 black"}} onClick={()=>{setColor("indigo")}}> Indigo </button>
        <button className="w-[80px] rounded-2xl font-bold font-serif mx-3 p-1 bg-teal-300 text-white" style={{textShadow:"0 1px black,0-1px black,-1px 0 black,1px 0 black"}} onClick={()=>{setColor("teal")}}> Teal </button>
        <button className="w-[80px] rounded-2xl font-bold font-serif mx-3 p-1 bg-yellow-300 text-white" style={{textShadow:"0 1px black,0-1px black,-1px 0 black,1px 0 black"}} onClick={()=>{setColor("yellow")}}> Yellow </button>
        <button className="w-[80px] rounded-2xl font-bold font-serif mx-3 p-1 bg-slate-500 text-white" style={{textShadow:"0 1px black,0-1px black,-1px 0 black,1px 0 black"}} onClick={()=>{setColor("black")}}> Black </button>
      </div>
    </div>
  );
} 

export default App;
