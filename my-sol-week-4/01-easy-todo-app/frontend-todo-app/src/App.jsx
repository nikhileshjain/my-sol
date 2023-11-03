/* eslint-disable react/prop-types */

import FormInput from "./components/FormInput";
import './App.css'
import { useState, useEffect } from "react";
import axios from "axios";
import TodoElement from "./components/TodoElement";

function App() {
  // const [todos,setTodos]= useState([{
  //   title: "go to gym",
  //   description: "hit the gym at 11 ",
  //   id: 1
  // },
  // {
  //   title: "go to class",
  //   description: "hit the class at 12 ",
  //   id: 2
  // }]);

  const [todos, setTodos] = useState([]);

  useEffect(() => {
    async function fetchTodos() {
      try {
        const response = await fetch("http://localhost:3000/todos");
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        const data = await response.json();
        setTodos(data);
      } catch (error) {
        console.error("Error fetching todos:", error);
      }
    }
    fetchTodos();
  }, [todos])

  // const [title,setTitle] = useState("");
  // const [description,setDescription] = useState("");
  const [values, setValues] = useState({
    title: "",
    description: ""
  })

  const inputs = [{
    id: 1,
    name: "title",
    type: "text",
    placeholder: "title"

  },
  {
    id: 2,
    name: "description",
    type: "text",
    placeholder: "description"
  }];

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post("http://localhost:3000/todos", values)
      .then((response) => {
        console.log("Task Added:", response)
      })
  }
  const handleDelete = (id) => {
   axios.delete(`http://localhost:3000/todos/${id}`)
   .then((response)=>{
    console.log("Task Deleted:", response)
   })
  }
  const onChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });

  }
  // console.log(values)

  return (
    <>
      <div className="app">
        <form onSubmit={handleSubmit}>
          {inputs.map((input) => (
            <FormInput key={input.id} {...input} value={values[input.name]} onChange={onChange} />
          ))}
          <button>Add</button>
        </form>
        <br />
        <div>
          {  todos.map((input) =>  (
            <TodoElement key={input.id} {...input}  deleteit ={handleDelete}/>
          ))}
        </div>
      </div>
    </>
  );

}

export default App
