import axios from 'axios';
import { useEffect,useState } from 'react'

const FormShow=()=> {
    useEffect(()=>{
        getData();
    },[])

const [student,setStudent]=useState([]);

const getData=()=>{
    axios.get("http://localhost:8080/students").then((res)=>{
        setStudent(res.data);
        console.log(res.data);
    })
}

  return (
    <div>
      <div className='dataArrange'>
        <div>
            <table>
                <thead>
                    <tr>
                        <th>name</th>
                        <th>age</th>
                        <th>address</th>
                        <th>department</th>
                        <th>salary</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        student.map((e)=>{
                            return (
                                <tr>
                                    <td className="name">{e.name}</td>
                                    <td className="age">{e.age}</td>;            
                                    <td className="address">{e.address}</td>
                                    
                                    <td className="department">{e.department}</td>
                                    <td className="salary">{e.salary}</td>

                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
        </div>
      </div>
    </div>
  )
}

export { FormShow }
