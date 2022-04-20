import { useState } from 'react' ;
import axios from 'axios';

function Form() {
  const [fromData,setFormData]=useState({
    name:"",
    age:"",
    address:"",
    Department:["Science","Arts","Commerce"],
    salary:"",
  })

  const handleChange=(e)=>{
    const{name,value}=e.target
    setFormData({
      ...fromData,
      [name]:value
    })
  }

  const handleSubmit=(e)=>{
    e.preventDefault();
    axios.post("http://localhost:8080/students" ,fromData).then(()=>{
      alert("Data save");
      console.log()
    })

  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
          <div>
          Name:{" "}
          <input
          onChange={handleChange} type="text"
          placeholder='name'
          name="name"
          className='name' />
          </div>
          <div>
              Age:{" "}
              <input    onChange={handleChange}  type="number" placeholder='age' name="age" className='age' />
          </div>    
          <div>
              Address:{" "}
              <input    onChange={handleChange}  type="text" placeholder="address" name="address" className="address" />
          </div>   
          <div>
              Department:{" "}
              <select
              value={""}
              name="Department"
              className='Department'
              onChange={handleChange} 
              >
                  <option value="Science">Science</option>
                  <option value="Arts">Arts</option>
                  <option value="Commerce">Commerce</option>
              </select>
          </div>
          <div>
              Salary:{" "}
              <input    onChange={handleChange}  type="number" placeholder='salary' name="salary" className='salary' />
          </div> 
          <input type="submit" />
      </form>
    </div>
  )
}

export{ Form }
