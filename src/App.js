import React, {useState} from "react";
import ToDoList from "./ToDoList";

import LoginForm from './components/LoginForm'





const App = () => {

  const adminUser = {
    email : "admin@admin.com",
    password : "admin123"
  }
  const [user, setUser] = useState({name:"", email:""});
  const [error, setError] = useState("");

  const Login = () => {
    console.log("Logout");
  }
  const Logout = () => {
    console.log("Logout");
  }


  const [inputList, setInputList] = useState(""); //useState is a hook(function that allows you to have state variables in functional components)

  const [Items, setItems] = useState([]);


  const itemEvent = (event) => {
    setInputList(event.target.value);
  };

  const listOfItems = () => {
    setItems((oldItems) => {
      return [...oldItems, inputList];
    })
    setInputList("");
  };

  const deleteItems = (id) => {
    console.log("Deleted");

    setItems((oldItems) => {
      return oldItems.filter((arrElem, index) => {
        return index !== id;
      })
    })



  };

  return<>
  <div classname = "App">
    {
      (user.email != "") ? (
        <div className = "welcome">
          <h2>Welcome,<span>{user.name}</span></h2>
          <button>Logout</button>
        </div>
      ) : (
        <LoginForm Login = {Login} error={error}/>
      )
    }
    </div>

    <div className = "main_div">
      <div className = "center_div">
        <br/>
        <h1>To-Do-List</h1>
        <br/>
        <input type = "text" placeholder = "Add a Item" value = {inputList} onChange = {itemEvent} />
        <button onClick = {listOfItems}>  + </button>


        <ol>
          
          
          {Items.map( (itemval, index) =>{
            return <ToDoList 
             key = {index}
             id = {index} 
             text = {itemval}
             onSelect = {deleteItems} 
             />;
          })}

        </ol>
      </div>
    </div>
    
  </>
};

export default App;