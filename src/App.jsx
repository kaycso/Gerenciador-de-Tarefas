import { useEffect, useState } from "react";
import AddTask from "./components/AddTask";
import Tasks from "./components/Tasks";
import Title from "./components/Title";

function App() {
  const [tasks, setTasks] = useState(
    JSON.parse(localStorage.getItem("tasks") || [])
  );

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

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
        <Title>Gerenciador de Tarefas</Title>
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
