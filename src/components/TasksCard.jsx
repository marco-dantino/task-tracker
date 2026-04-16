import Task from "@components/Task"
import { useState } from "react";

export default function TasksCard(){
    const [title, setTitle] = useState(null)

    function handleTitle(e) {
      setTitle(e.target.value);
    }

    return(
      <div className="w-[33%] h-1/2">
        <div className="bg-white shadow-[inset_0_4px_6px_rgba(255,0,0,0.2)] border rounded-[50px] flex flex-col items-center gap-5 pt-6 h-full">
          <h1 className="text-[50px] font-serif">Task Tracker</h1>
          <input id="input_Task" value={title} onChange={handleTitle} className="w-[90%] h-14 bg-white placeholder:text-slate-400 text-slate-700 text-xl pl-5 pb-3 border border-slate-200 rounded-full px-3 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow" placeholder="Start writing and press enter to create task" />  
          <div className="flex text-2xl w-[88%] gap-2 justify-start">
            <Task title={title} />
          </div>
        </div>
      </div>
    );
}