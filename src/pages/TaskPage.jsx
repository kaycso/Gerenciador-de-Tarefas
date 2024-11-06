import { ChevronLeftIcon } from "lucide-react";
import { useNavigate, useSearchParams } from "react-router-dom";

function TaskPage() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const title = searchParams.get("title");
  const description = searchParams.get("description");

  return (
    <div className="min-w-screen min-h-screen bg-customBg flex gap-4 justify-center p-6">
      <div className="w-[500px] flex flex-col gap-6">
        <div className="flex items-center justify-center relative">
          <button
            onClick={() => navigate(-1)}
            className="absolute left-0 text-white"
          >
            <ChevronLeftIcon />
          </button>
          <h1 className="font-montserrat text-3xl text-white font-bold text-center">
            DETALHES DA TAREFA
          </h1>
        </div>

        <div className="flex flex-col gap-4 p-6 bg-customFormBg rounded-md shadow">
          <h2 className="text-slate-400 font-semibold text-2xl">{title}</h2>
          <p className="text-slate-50 text-base">{description}</p>
        </div>
      </div>
    </div>
  );
}

export default TaskPage;
