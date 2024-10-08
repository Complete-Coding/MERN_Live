const Items = ({id, itemName, itemDate, deleteItems }) => {



  return (
    <>
      <div className=" flex ">
        <div className="flex">
          <span className="bg-slate-200 px-4 py-2 mx-2 my-1 border-solid border-2 border-black h-10 w-[13.5rem] text-black ">
            {itemName}
          </span>

          <span className="bg-slate-200 px-4 py-2 mx-0 my-1 border-solid border-2 border-black h-10 w-[10.9rem] text-black">
            {itemDate}
          </span>
          <button className="bg-red-500 m-1 ml-2 pr-1.5 p-2 font-bold rounded-sm" onClick={() => deleteItems(id)}>
            Delete
          </button>
        </div>
      </div>
    </>
  );
};

export default Items;
