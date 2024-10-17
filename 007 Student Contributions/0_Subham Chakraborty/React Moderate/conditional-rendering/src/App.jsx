import List from './components/List';

let App =()=>{

  let list = ['Subham','Ridoy','Bhaskar','Preet','Alok','Nirmala']

    // let list;

  return(<>
  
  <h1 className="text-blue-500 font-serif text-4xl">Learners of MERN Stack</h1>
  
  <List data={list} />
  </>);
}

export default App;