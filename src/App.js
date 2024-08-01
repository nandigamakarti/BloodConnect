//----------------------------------------Blood  connect ----------------------------------------------------------------------

import Boddy from "./components/Bodyy";

function App() {
  
    return(
      <>
      <Boddy />
      </>
     
    
  );
}

export default App;





//-------------------------------------------search box--------------------------------------------------------------------




// import { useEffect, useState } from "react";

 

// const App = () => {

//   const [data, setData] = useState([]);

//   const [loading, setLoading] = useState(true);

//   const [inp, setInp] = useState("");

//   const [search, setSearch] = useState("");

//   const [done, setDone] = useState(true);

//   useEffect(() => {

//     fetch("https://jsonplaceholder.typicode.com/todos")

//       .then((response) => response.json())

//       .then((json) => {

//         setData(json);

//         setLoading(false);

//         console.log("hello");

//       });

//   }, []);

 

//   const filteredBySearch = data.filter((elem) =>

//     elem.title.toLowerCase().includes(search.trim().toLowerCase())

//   );

//   const filterByCategory = filteredBySearch.filter(

//     (elem) => elem.completed === done

//   );

//  return (


//     <div>


//       {loading ? 


//        ( <h1>Loading ...</h1>


//       ) : (


//         <div>


//           <input 
//           type="text"
//           value={inp}  
//           onChange={(e) => setInp(e.target.value)} 
//             placeholder="search "
//             />

// <button onClick={() => setSearch(inp)}>Search</button>
// <button onClick={() => setDone(!done)}>


//             {done ? "not-completed" : "completed"}


//           </button>


//           <ul>


//             {filterByCategory.map((elem) => (


//               <li key={elem.id}>


//                 {elem.title}: {elem.completed ? "done" : "not"}


//               </li>


//             ))}


//           </ul>


//         </div>


//       )}


//     </div>


//   );


// };


// export default App;
