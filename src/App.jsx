import { useState } from "react";
import AddTask from "./components/AddTask";
import Tasks from "./components/Tasks";

function App() {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      title: "Estudar programação",
      description:
        "Estudar programação para se tornar um desenvolvedor Full Stack",
      isCompleted: false,
    },
    {
      id: 2,
      title: "Estudar Inglês",
      description: "Estudar Assunto X",
      isCompleted: false,
    },
    {
      id: 3,
      title: "Estudar Matemática",
      description: "Estudar Assunto X",
      isCompleted: false,
    },
  ]);

  function onAddTaskSubmit(title, description) {
    const maxTaskId =
      tasks.length > 0
        ? tasks.reduce((max, task) => (task.id > max ? task.id : max.id), 0)
        : 0;

    const newTask = {
      id: maxTaskId + 1,
      title: title,
      description: description,
      isCompleted: false,
    };

    setTasks([...tasks, newTask]);
  }

  function onTaskClick(taskId) {
    const newTask = tasks.map((task) => {
      if (task.id === taskId) {
        return { ...task, isCompleted: !task.isCompleted };
      }
      return task;
    });

    setTasks(newTask);
  }

  function onDeleteTaskClick(taskId) {
    const newTasks = tasks.filter((task) => task.id !== taskId);
    setTasks(newTasks);
  }

  return (
    <div className="min-w-screen min-h-screen bg-customBg flex gap-4 justify-center p-6">
      <div className="w-[500px] flex flex-col gap-6">
        <h1 className="font-montserrat text-3xl text-white font-bold text-center">
          Gerenciador de Tarefas
        </h1>
        <AddTask onAddTaskSubmit={onAddTaskSubmit} />
        <Tasks
          tasks={tasks}
          onTaskClick={onTaskClick}
          onDeleteTaskClick={onDeleteTaskClick}
        />
      </div>
    </div>
  );
}

export default App;
