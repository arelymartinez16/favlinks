import "./App.css"; 
import Table from "./components/Table";
import Form from "./components/Form";
import { useState } from "react";

// create an App component to render as our main component

function App() { // Capitalize component names
  const [favLinks, setFavLinks] = useState([]); 

  let handleNewSubmission = (data) => {
    setFavLinks([...favLinks, data]);
  }

  // all components have to return some JSX --- that's it
  return (
    <div>
      <h1 className="testClass">Submit your fav links!</h1>

      <Form onNewSubmit={handleNewSubmission} />
      <Table links={favLinks} />
    </div>
  )
}
export default App; // export the component so we can use it in other files