export default function TasksCard(){
    return(
      <div className="w-1/2 h-1/2">
        <h1>Task Tracker</h1>
        <input className="w-full bg-white placeholder:text-slate-400 text-slate-700 text-sm border border-slate-200 rounded-md px-3 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow" placeholder="Start writing and press enter to create task" />  
      </div>
    );
}