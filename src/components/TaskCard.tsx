import { useState } from "react";
import LiquidGlass from 'liquid-glass-react'

const initialTasks = [
  {
    id: 0,
    title: "Task 1",
    completed: false
  },
  {
    id: 1,
    title: "Task 2",
    completed: true
  },
  {
    id: 2,
    title: "Task 3",
    completed: false
  }
]

interface Task {
  id: number;
  title: string;
  completed: boolean;
}
interface AddTaskProps {
  title?: string;
  todos?: Task[];
  onAddToDo?: (arg0: string) => void;
  onDeleteToDo?: (arg0: number) => void;
  onEditToDo?: (arg0: number, arg1: Task ) => void;
}

function Task({ todo, onDelete, onEdit } : { todo: Task, onDelete: AddTaskProps["onDeleteToDo"], onEdit: AddTaskProps["onEditToDo"] }){
  const [isEditing, setIsEditing] = useState(true);
  
  return(
      <label className="flex justify-between">
        <div className="w-full">
          {/* <input type="checkbox" checked={todo.completed}/> */}
          <input disabled={isEditing} onChange={e => onEdit?.(todo.id, {...todo, title: e.target.value})} className="pl-2" value={todo.title}/>
          <button onClick={() => setIsEditing(!isEditing)} className="text-slate-800 font-medium">
            {
              isEditing ?  "Editar" : "Guardar"
            }
          </button>
        </div>
        <button onClick={() => onDelete?.(todo.id)} className="pl-5 text-red-300 font-medium">Delete</button>
      </label>
  )
}

function TaskList({ todos, onDeleteToDo, onEditToDo }: AddTaskProps) {
  return(
    <ul className="w-full">
      {todos?.map(todo => (
        <li className="pb-2" key={todo.id}>
          <Task 
            todo={todo} 
            onDelete={onDeleteToDo} 
            onEdit={onEditToDo}
          />
        </li>
      ))}
    </ul>
  );
}

function AddTask({ onAddToDo }: AddTaskProps){
  const [title, setTitle] = useState("")

  return(
    <div className="flex items-center px-4 border border-slate-200 rounded-full transition focus:shadow focus:border-slate-400 duration-300 ease hover:border-slate-300 shadow-md w-[90%]">
      <input id="input_Task" value={title} onChange={e => setTitle(e.target.value)} className="w-full rounded-full h-14 focus:outline-none bg-white placeholder:text-slate-400 text-slate-700 text-xl pl-2 pb-1" placeholder="Start writing and press add to create task"/>
      <LiquidGlass blurAmount={0.1} displacementScale={34} saturation={3} aberrationIntensity={13} elasticity={0.39} cornerRadius={100} padding="12px 23px" className="hover:cursor-pointer" style={{ position: 'fixed', top: '45%', left: '62%' }}
        onClick={() => {
          setTitle(''); 
          onAddToDo?.(title);
        }}>
        <span className="text-slate-800 font-medium">Add</span>
      </LiquidGlass>
    </div>
  )
}

export default function TasksCard(){
    const [todos, setTodos] = useState(initialTasks)

    function handleAddToDo(title: string) {
      setTodos([
        ...todos,
        {
          id: todos.length,
          title: title,
          completed: false
        }
      ])
    }

    function handleDeleteToDo(todoId: number) {
      let newTodos = todos.filter( t => t.id !== todoId);
      setTodos(newTodos.map( (t, i) => ({...t, id: i})));
    }

    function handleEditToDo(todoId: number, newTodo: Task) {
      setTodos(todos.with(todoId, newTodo));
    }

    return(
      <div className="w-[33%] h-1/2">
        <div className="bg-white shadow-[inset_0_4px_6px_rgba(255,0,0,0.2)] border rounded-[50px] flex flex-col items-center gap-5 pt-6 h-full">
          <h1 className="text-[50px] font-serif">Task Tracker</h1>
          <AddTask onAddToDo={handleAddToDo} />
          <div className="flex text-2xl overflow-y-auto w-[88%] gap-2 mb-4 rounded-[10px] justify-start">
            <TaskList todos={todos} onDeleteToDo={handleDeleteToDo} onEditToDo={handleEditToDo} />
            {console.table(todos)}
          </div>
        </div>
      </div>
    );
}