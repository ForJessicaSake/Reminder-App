import {useState} from 'react'
import './Reminder.css';
import { useHistory } from "react-router-dom";

function Reminder({ handleSubmit}) {

    const [title, setTitle] =useState('')
    const [note, setNote] = useState('')
    const [location, setLocation] = useState('')
    const [time, setTime] = useState('')

    const history = useHistory();

  const handleClick=(e)=>{
      e.preventDefault();
      handleSubmit(title, note, location, time)
      history.push("/");


  }

    return (
        <section className='new-reminder-container'>
            <h1>Create a New Reminder</h1>
            <form onSubmit={handleClick}>
                <label>Event:</label>
                <input
                    type='text'
                    required
                    value={title}
                    onChange={(e)=> setTitle(e.target.value)}
                ></input>

                <label>Note:</label>
                <textarea
                    type='text'
                    required
                    value={note}
                    onChange={(e)=> setNote(e.target.value)}
                ></textarea>

                <label>Location:</label>
                <input
                    type='text'
                    required
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}

                ></input>

                <label>Time:</label>
                <input
                    type='text'
                    required
                    value={time}
                    onChange={(e) => setTime(e.target.value)}
                ></input>
                <input type='submit' className='btn'/>
            </form>
        </section>
    )
}

export default Reminder