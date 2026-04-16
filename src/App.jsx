import TasksCard from "@components/TaskCard";

/*
  Almacena tus tareas en una matriz de objetos, en la que cada objeto representa 
  una tarea con propiedades como la descripción 
  y el estado (completada o no). Cada vez que se añada, actualice, elimine 
  o marque como completada o no completada una nueva tarea, 
  actualiza la matriz de tareas. 
  Escribe una función renderTasks que elimine todas las tareas del DOM 
  y las vuelva a renderizar basándose en la matriz de tareas actualizada.
*/

function App() {
  return (
    <div className="flex flex-col h-screen">
      <header className="w-full bg-slate-200 p-4 text-center shadow">
        Feling
      </header>

      <main className="flex-1 flex items-center justify-center">
        <TasksCard />
      </main>
    </div>
  );
}

export default App;

