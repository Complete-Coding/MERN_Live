const List = ({list}) => {
  return (
    <>
    <ol className="list-decimal ml-10 mt-5 text-xl">
      {list.map(item => <li>{item}</li>)}
    </ol>

    {/* <ol className="list-disc ml-10 mt-5 text-xl">
      {[<li>Nirmala</li>, <li>Aman</li>, <li>Akash</li>, <li>Amanullah</li>, <li>Abhijeet</li>]}
    </ol> */}
    </>
  );
};

export default List;
