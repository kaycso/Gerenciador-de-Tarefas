import { ChevronRightIcon, TrashIcon } from "lucide-react";
import { useNavigate } from "react-router-dom";
import ButtonTask from "./ButtonTask";

function Tasks(props) {
  const navigate = useNavigate();

  function onSeeDetailsClick(task) {
    const query = new URLSearchParams();
    query.set("title", task.title);
    query.set("description", task.description);
    navigate(`/task?${query.toString()}`);
  }

  return (
    <ul className="flex flex-col gap-4 p-6 bg-customFormBg rounded-md shadow">
      <h2 className="font-montserrat font-semibold text-xl text-white">
        TAREFAS EM ANDAMENTO
      </h2>
      {props.tasks.map((task) => (
        <li key={task.id} className="flex gap-2">
          <button
            onClick={() => props.onTaskClick(task.id)}
            className={`p-2 w-full bg-customEmphasisColor rounded-md text-slate-100 text-left font-medium ${
              task.isCompleted && "line-through"
            }`}
          >
            {task.title}
          </button>

          <ButtonTask onClick={() => onSeeDetailsClick(task)}>
            <ChevronRightIcon />
          </ButtonTask>

          <ButtonTask onClick={() => props.onDeleteTaskClick(task.id)}>
            <TrashIcon />
          </ButtonTask>
        </li>
      ))}
    </ul>
  );
}

export default Tasks;
