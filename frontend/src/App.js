import {useEffect, useState } from 'react'
import './App.css';
import axios from 'axios'

function App() {
  
  const [data,setData] = useState(null);
  const [seat,setSeat] = useState("");
  const [post,setPost] = useState("");

  const handleSubmit = (e)=>{
      e.preventDefault();
      axios.post(`http://localhost:5000/bookTicket/${e.target[0].value}`).then((response)=>{
        setPost(response.data);
      })
      
  }

  const baseURL = "http://localhost:5000/allTickets";
    useEffect(()=>{
      axios.get(baseURL).then((response)=>{
        setData(response.data);
      })
    },[])

    const dt = data;
    // console.log(dt)
    const mystr = JSON.stringify(dt);

  
  return (
    <div className="App">
      {post && <div>Tickets booked</div>}
      <form onSubmit={handleSubmit}>
        <input type="number" name="seats" onChange={(e)=>setSeat(e.target.value)} placeholder="Enter Seats to book..." value={seat}></input>
        <button>Book Ticket</button>
      </form>
      <p>{mystr}</p>
    </div>
  );
}

export default App;
