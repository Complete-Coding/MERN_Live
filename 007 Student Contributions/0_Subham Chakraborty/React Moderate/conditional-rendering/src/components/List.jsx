let List = ({ data }) => {
  return (
    <>
      {!data || data.length === 0 ? (
        <h2 className="text-2xl font-serif text-red-500">Empty list...</h2>
      ) : (
        <h4 className="text-2xl font-serif text-green-500">
          Here are the students
        </h4>
      )}

      <ol class="list-decimal p-1 ml-6">
        {data &&
          data.length > 0 &&
          data.map((list, index) => (
            <li className="text-2xl text-red-900" key={index}>
              {list}
            </li>
          ))}
      </ol>
    </>
  );
};

export default List;
