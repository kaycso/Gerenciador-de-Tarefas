function ButtonTask(props) {
  return (
    <button
      className="p-2 bg-customEmphasisColor text-slate-100 rounded-md"
      {...props}
    >
      {props.children}
    </button>
  );
}

export default ButtonTask;
