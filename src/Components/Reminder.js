import {useState} from 'react'
import { Link } from 'react-router-dom';
import './Reminder.css';

function Reminder({ handleSubmit}) {

    const [events, setEvents] =useState('')
    const [note, setNote] = useState('')
    const [location, setLocation] = useState('')
    const [time, setTime] = useState('')

  const handleClick=(e)=>{
      e.preventDefault();
      handleSubmit(events, note, location, time)

  }

    return (
        <section className='new-reminder-container'>
            <h1>Create a New Reminder</h1>
            <form onSubmit={handleClick}>
                <label>Event:</label>
                <input
                    type='text'
                    required
                    value={events}
                    onChange={(e)=> setEvents(e.target.value)}
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
                <Link to='/'><input type='submit' className='btn'/></Link> 
            </form>
        </section>
    )
}

export default Reminder