import { useState } from "react";

function AddTask(props) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  return (
    <div className="font-poppins flex flex-col gap-4 p-6 bg-customFormBg rounded-md shadow">
      <h2 className="font-montserrat font-semibold text-xl text-white">
        ADICIONAR TAREFA
      </h2>
      <input
        type="text"
        name=""
        id=""
        placeholder="Digite o Título da Tarefa"
        className="p-2 w-full bg-slate-400 rounded-md text-slate-100 placeholder-slate-100 text-left font-medium"
        value={title}
        onChange={(event) => setTitle(event.target.value)}
      />
      <textarea
        name=""
        id=""
        placeholder="Digite a Descrição da Tarefa"
        className="p-2 w-full bg-slate-400 rounded-md text-slate-100 placeholder-slate-100 text-left font-normal"
        value={description}
        onChange={(event) => setDescription(event.target.value)}
      ></textarea>
      <button onClick={() => props.onAddTaskSubmit(title, description)} className="py-2 bg-slate-500 rounded-md font-montserrat font-semibold text-slate-100">
        ADICIONAR
      </button>
    </div>
  );
}

export default AddTask;
