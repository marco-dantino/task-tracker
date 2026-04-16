import { useState } from "react";
import LiquidGlass from 'liquid-glass-react'

function Task({ title = "Task Title" }: { title: string }) {

    return(
        <>
            <span>✅</span>
            <h1>{title}</h1>
        </>
    )
}

interface AddTaskProps {
  title: string;
  handleTitle: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

function AddTask({ title, handleTitle }: AddTaskProps){
  return(
    <div className="flex items-center px-4 border border-slate-200 rounded-full transition focus:shadow focus:border-slate-400 duration-300 ease hover:border-slate-300 shadow-md w-[90%]">
      <input id="input_Task" value={title} onChange={handleTitle} className="w-full rounded-full h-14 focus:outline-none bg-white placeholder:text-slate-400 text-slate-700 text-xl pl-2 pb-1" placeholder="Start writing and press enter to create task"/>
      {/* <button type="button" className="bg-slate-200 px-3 rounded-full text-sm h-fit py-2">
        +
      </button> */}
      <LiquidGlass
        blurAmount={0.1}
        displacementScale={34}
        saturation={3}
        aberrationIntensity={13}
        elasticity={0.39}
        cornerRadius={100}
        padding="12px 23px"
        className="hover:cursor-pointer"
        style={{ position: 'fixed', top: '45%', left: '62%' }}
        onClick={() => console.log('Button clicked!')}
      >
        <span className="text-slate-800 font-medium">Add</span>
      </LiquidGlass>
    </div>
  )
}

export default function TasksCard(){
    const [title, setTitle] = useState("")

    function handleTitle(e: React.ChangeEvent<HTMLInputElement>) {
      setTitle(e.target.value);
    }

    return(
      <div className="w-[33%] h-1/2">
        <div className="bg-white shadow-[inset_0_4px_6px_rgba(255,0,0,0.2)] border rounded-[50px] flex flex-col items-center gap-5 pt-6 h-full">
          <h1 className="text-[50px] font-serif">Task Tracker</h1>
          <AddTask title={title} handleTitle={handleTitle} />
          <div className="flex text-2xl w-[88%] gap-2 justify-start">
            <Task title={title} />
          </div>
        </div>
      </div>
    );
}