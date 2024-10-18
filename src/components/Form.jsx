import { useState } from "react";

function Form(props) {
    // my form component

    const [name, setName] = useState("");
    const [URL, setURL] = useState("");
    
    let handleSubmit = (event) => {
        event.preventDefault();
        // alert('Form submitted from arrow function!');

        if (name === "" || URL === "") {
            alert("Name and URL are required");
        } else {
            console.log(name, URL);
            
            // send this to the table
            props.onNewSubmit({ name, URL });
            
            setName("");
            setURL("");
        }
    }

    let handleNameChange = (event) => {
        setName(event.target.value);
    }

    let handleURLChange = (event) => {
        setURL(event.target.value);
    }

    return (
      <form onSubmit={handleSubmit}>
          <label htmlFor="linkName">Link Name</label>
          <input type="text" name="linkName" onChange={handleNameChange} />
          <br />
          <label htmlFor="linkURL">Link URL</label>
          <input type="text" name="linkURL" onChange={handleURLChange} />
  
          <br />
          <br />
  
          <input type="submit" disabled={name === "" || URL === ""} />
      </form>
    )
}

export default Form; // export the component so we can use it in other files